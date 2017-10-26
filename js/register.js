$("header").load("head.html");
$("footer").load("footer.html");

// s输入框焦点
$(".register_ul01>li").click(function () {
    $(this).attr("id", "active").siblings().removeAttr("id", "active");
});
$(".register_ul02>li").click(function () {
    $(this).attr("id", "active").siblings().removeAttr("id", "active");
});

// 注册验证
$(".next").click(function () {
    // 登录密码验证
    if ($(".login_pwd").val() == "") {
        $(".error_03>p").show().text("登录密码不能为空");
        return false;
    };
    // 验证密码一致性
    if ($(".login_pwd").val() != $(".login_pwd02").val()) {
        $(".error_04>p").show().text("两次密码不一致");
        return false;
    };
    // 表单提交验证
    $.ajax({
        type: "post",
        url: "/reg/registerSencond",
        dataType: "json",
        data: {
            mobile: $(".mibbleNum").val(),
            password: $(".login_pwd").val(),
            mobileCode: $(".authCode").val(),
            User_confirmpass: $(".login_pwd02").val(),
        },
        success: function (data) {
            if (data.code == 1) {
                alert("注册成功");
            } else {
                alert(data.msg);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        }
    });
});

function Weidai_Register() {
    this.type = 'json';
}
var mobileVal = '';
var captchaStat = '';
var mobilecodeStat = '';
var mobileStat = '';
var captchaVal = '';
var mobilecodeVal = '';
var mobileUrl = "/reg/authUserExist";
var authcodeUrl = "/reg/authCode";
var mobilecodeUrl = "/reg/authmobileCode";
var all_valid = {
    mobile: false,
    password: false,
    captcha: false,
    mobilecode: false
};
Weidai_Register.prototype = {
    //手机号码验证
    valid_mobile: function (not_valid_empty) {
        var mv = $.trim($('.mibbleNum').val());
        var t = "";
        var mobile = /^(13|15|18|14|17)[0-9]{9}$/;
        if (!mv) not_valid_empty ? undefined : register.valid_mobile_helper(-3);
        else if (!mobile.test(mv)) {
            register.valid_mobile_helper(-1);
        } else {
            if (mobileVal != mv) {
                mobileVal = mv;
                $.ajax({
                    type: "post",
                    url: mobileUrl,
                    dataType: "json",
                    data: "mobile=" + mv,
                    success: function (data) {
                        register.valid_mobile_helper(data.code);
                        mobileStat = data.code;
                        if (data.code == 1) {
                            getcode();
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        alert(errorThrown);
                    }
                });
            } else {
                //ajax 验证
                register.valid_mobile_helper(mobileStat);
                if (mobileStat == 1) {
                    getcode();
                }
            }
        }
    },
    // 手机验证提示语
    valid_mobile_helper: function (code) {
        var error1 = $(".error_01>p");
        out = false;
        if (code == -3) {
            error1.html("手机号码不能为空");
        } else if (code == -1) {
            error1.html("手机号码格式不正确");
        } else if (code == -2) {
            error1.html("该手机号已经被注册,请更换手机号");
        } else if (code == -4) {
            error1.html("该手机号未注册");
        } else if (code == 1) {
            out = true;
        }
        all_valid['mobile'] = out;
        return out;
    },

    //手机验证码验证
    valid_mobilecode: function (not_valid_empty) {
        var v = $.trim($('.authCode').val());
        var p = $.trim($('.mobileNum').val());
        if (!v) not_valid_empty ? undefined : register.valid_mobilecode_helper(-3);
        else {
            var temp = 'code=' + v;
            if (!p) {
                temp = 'code=' + v + '&mobile=' + p;
            }
            if (mobilecodeVal != v) {
                mobilecodeVal = v;
                $.ajax({
                    type: "post",
                    url: mobilecodeUrl,
                    dataType: "json",
                    data: 'code=' + v + '&mobile=' + p,
                    success: function (data) {
                        register.valid_mobilecode_helper(data.code);
                        mobilecodeStat = data.code;
                        if (data.code == 1) {
                            tijiao();
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                         alert(errorThrown);
                    }
                });
            } else {
                register.valid_mobilecode_helper(mobilecodeStat);
                if (mobilecodeStat == 1) {
                    tijiao();
                }
            }
        }
    },
    // 短信验证码失败提示语
    valid_mobilecode_helper: function (code) {
        var error3 = $(".error_02>p");
        out = false;
        if (code == -3) {
            error3.html("手机验证码不能为空");
        } else if (code == -2) {
            error3.html("手机验证码输入错误");
        } else if (code == -1) {
            error3.html("手机验证码获取失败");
        } else if (code == -5) {
            error3.html("手机验证码每天5次");
        } else if (code == -6) {
            error3.html("获取验证码次数超限");
        } else if (code == -7) {
            error3.html("手机号码不正确");
        } else if (code == 1) {
            out = true;
        }
        all_valid['mobilecode'] = out;
        return out;
    }
}
var register = new Weidai_Register();

// 发送验证码验证
function getcode() {
    $.ajax({
        type: "post",
        url: "/reg/mobileCode",
        dataType: "json",
        data: {
            mobiles: $(".mibbleNum").val(),
        },
        success: function (data) {
            $(".error_02>p").html(data.msg);
            downTime();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
}

// 验证码计时
function downTime() {
    $(".code_div01").attr("disabled", "disabled");
    var at = 30;
    var MyTime = setInterval(function () {
        if (at > 0) {
            at--;
            $(".code_div01").text("重新获取(" + at + ")");
        } else if (at == 0) {
            $(".code_div01").text("重获验证码").removeAttr("disabled").removeClass("noBut");
            clearInterval(MyTime);
        }
    }, 1000);
}
$(".code_div01").click(function () {
    register.valid_mobile(false);
});


// 注册协议input框
$("#deal_input").click(function () {
    var ii = $("input[type='checkbox']").prop("checked");
    if (ii === true) {
        $(".next").css("background-color", "#fe9c1c").removeAttr("disabled");
    } else if (ii === false) {
        $(".next").css("background-color", "#ccc").attr("disabled", "disabled");
    };
})

$(".login_ul>li").click(function () {
    $(this).addClass("active").siblings().removeClass("active")
});

// 用户名输入框焦点验证
$(".user_input").blur(function () {
    if ($(this).val() == "") {
        $(".error_01>p").show().text("用户名不能为空");
    };
});
$(".user_input").focus(function () {
    $(".error_01>p").hide();
});

// 密码输入焦点验证    
$(".pwd_input").blur(function () {
    if ($(this).val() == "") {
        $(".error_02>p").show().text("密码不能为空");
    }
});
$(".pwd_input").focus(function () {
    $(".hint_02>p").hide();
})
// 输入框焦点
$(".register_ul01>li").click(function () {
    $(this).attr("id", "active").siblings().removeAttr("id", "active");
});
$(".register_ul02>li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
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

$(".close_btn").click(function () {
    $(".mask").hide();
    $(".approve_mask").hide();
});

$("header").load("head.html");
$("footer").load("footer.html");

// s输入框焦点
$(".forget_ul01>li").click(function () {
    $(this).attr("id", "active").siblings().removeAttr("id", "active");
});
$(".forget_ul02>li").click(function () {
    $(this).attr("id", "active").siblings().removeAttr("id", "active");
})

// 显示注册第一步
$(".next").click(function () {
    $(".forget_part01").hide();
    $(".forget_part02").show();
    $(".forget_top_img").attr("src", "../../images/forget/forget_02.png");
});

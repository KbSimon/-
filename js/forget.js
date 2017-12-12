// 输入框焦点
$(".forget_ul01>li").click(function () {
    $(this).attr("id", "active").siblings().removeAttr("id", "active");
});
$(".forget_ul02>li").click(function () {
    $(this).attr("id", "active").siblings().removeAttr("id", "active");
})
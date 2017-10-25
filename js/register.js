$("header").load("head.html");
$("footer").load("footer.html");

// s输入框焦点
$(".register_ul01>li").click(function () {
    $(this).attr("id", "active").siblings().removeAttr("id", "active");
});
$(".register_ul02>li").click(function () {
    $(this).attr("id", "active").siblings().removeAttr("id", "active");
})

// 显示注册第二步
// $(".next").click(function () {
//     $(".register_part01").hide();
//     $(".register_part02").show();
//     $(".register_top_img").attr("src", "../../images/register/register_02.png");
// });
// 显示注册第三步
$(".get").click(function () {
    $(".register_part01").hide();
    $(".register_part02").hide();
    $(".register_part03").show();
    $(".register_top_img").attr("src", "../../images/register/register_03.png");
});
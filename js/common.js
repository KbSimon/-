// 顶部悬浮
$(".head_top_left02").hover(function () {

    $(".head_top_left01 p").css("color", "#ffa21a");
    $(this).children("img").attr("src", "../../images/mobilephnoe_01.png")
}, function () {
    $(".head_top_left01 p").css("color", "#666");
    $(this).children("img").attr("src", "../../images/mobilephone.png")
});
$(".head_top_left03").hover(function () {
    $(this).children("img").attr("src", "../../images/weixin_01.png")
}, function () {
    $(this).children("img").attr("src", "../../images/weixin.png")
});
$(".head_top_left04").hover(function () {
    $(this).children("img").attr("src", "../../images/tellphone_01.png")
}, function () {
    $(this).children("img").attr("src", "../../images/tellphone.png")
})
// 右侧悬浮
window.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if (t >= $(window).height()) {
        $('.up').fadeIn();
    } else {
        $('.up').fadeOut();
    }
};
$(".right_nav>li").eq(0).hover(function () {
    $(this).children(".down_div").css("right", "50px")
    $(this).children("img").attr("src", "../../images/download_01.png");
}, function () {
    $(this).children(".down_div").css("right", "-150px")
    $(this).children("img").attr("src", "../../images/download.png");
});
$(".right_nav>li").eq(1).hover(function () {
    $(this).find("img").attr("src", "../../images/jisuanqi_01.png");
}, function () {
    $(this).find("img").attr("src", "../../images/jisuanqi.png");
});
$(".right_nav>li").eq(2).hover(function () {
    $(this).children(".kefu_num").css("right", "50px");
    $(this).children("img").attr("src", "../../images/kefu_01.png");
}, function () {
    $(this).children(".kefu_num").css("right", "-150px");
    $(this).children("img").attr("src", "../../images/kefu.png");
});
$(".right_nav>li").eq(3).hover(function () {
    $(this).children("img").attr("src", "../../images/up_01.png");
}, function () {
    $(this).children("img").attr("src", "../../images/up.png");
})
// 注册协议
$(".to_protlcol").click(function () {
    $(".protocol").show();
    $(".registerMask").show();
});
$(".close_protlcol").click(function () {
    $(".protocol").hide();
    $(".registerMask").hide();
})
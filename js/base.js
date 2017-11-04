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
// 底部悬浮
$(".footer_ewm>span").eq(0).hover(function(){
    $(".qq_code").stop().animate({opacity:"1"},200);
    $(this).css("color","#ffa21a").find("img").attr("src","../../images/qq_01.png");
},function(){
    $(".qq_code").stop().animate({opacity:"0"},200);
    $(this).css("color","#333").find("img").attr("src","../../images/qq.png");
});
$(".footer_ewm>span").eq(1).hover(function(){
    $(".weixin_code").stop().animate({opacity:"1"},200);
    $(this).css("color","#ffa21a").find("img").attr("src","../../images/weixin_01.png");
},function(){
    $(".weixin_code").stop().animate({opacity:"0"},200);
    $(this).css("color","#333").find("img").attr("src","../../images/weixin.png");
});
// 判断用户是否登录 登录后的操作
// $(".head_nav>li").eq(4).attr("id","login_state");
// $("#login_state>a").text("欢迎")
// $(".head_nav>li").eq(5).attr("id","login_user");
// $("#login_user>a").text("151****2821")

// 右侧悬浮窗
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
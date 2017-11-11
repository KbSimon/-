// 顶部悬浮
$(".head_top_left02").hover(function () {
    $(".head_top_left01 p").css("color", "#ffa21a");
}, function () {
    $(".head_top_left01 p").css("color", "#666");
});
$(".head_top_left04").click(function(){
    window.location.href="https://weibo.com/u/6363624631?topnav=1&wvr=6&is_hot=1";
})

// 底部悬浮
$(".footer_ewm>span").eq(0).hover(function () {
    $(".qq_code").stop().animate({
        opacity: "1"
    }, 200);
    $(this).css("color", "#ffa21a").find("img").attr("src", "http://xlstyle.oss-cn-hangzhou.aliyuncs.com/xinlu-pc/images/qq_01.png");
}, function () {
    $(".qq_code").stop().animate({
        opacity: "0"
    }, 200);
    $(this).css("color", "#333").find("img").attr("src", "http://xlstyle.oss-cn-hangzhou.aliyuncs.com/xinlu-pc/images/qq.png");
});
$(".footer_ewm>span").eq(1).hover(function () {
    $(".weixin_code").stop().animate({
        opacity: "1"
    }, 200);
    $(this).css("color", "#ffa21a").find("img").attr("src", "http://xlstyle.oss-cn-hangzhou.aliyuncs.com/xinlu-pc/images/weixin_01.png");
}, function () {
    $(".weixin_code").stop().animate({
        opacity: "0"
    }, 200);
    $(this).css("color", "#333").find("img").attr("src", "http://xlstyle.oss-cn-hangzhou.aliyuncs.com/xinlu-pc/images/weixin.png");
});
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
    $(".down_div").show();
    $(this).children("img").attr("src", "http://xlstyle.oss-cn-hangzhou.aliyuncs.com/xinlu-pc/images/download_01.png");
}, function () {
    $(".down_div").hide();
    $(this).children("img").attr("src", "http://xlstyle.oss-cn-hangzhou.aliyuncs.com/xinlu-pc/images/download.png");
});
$(".right_nav>li").eq(1).hover(function () {
    $(this).find("img").attr("src", "http://xlstyle.oss-cn-hangzhou.aliyuncs.com/xinlu-pc/images/jisuanqi_01.png");
}, function () {
    $(this).find("img").attr("src", "http://xlstyle.oss-cn-hangzhou.aliyuncs.com/xinlu-pc/images/jisuanqi.png");
});
$(".right_nav>li").eq(2).hover(function () {
    $(".kefu_num").show();
    $(this).children("img").attr("src", "http://xlstyle.oss-cn-hangzhou.aliyuncs.com/xinlu-pc/images/kefu_01.png");
}, function () {
    $(".kefu_num").hide();
    $(this).children("img").attr("src", "http://xlstyle.oss-cn-hangzhou.aliyuncs.com/xinlu-pc/images/kefu.png");
});
$(".right_nav>li").eq(2).click(function(){
    window.location.href="http://p.qiao.baidu.com/cps/chat?siteId=11392674&userId=24667589";
})

$(".right_nav>li").eq(3).hover(function () {
    $(this).children("img").attr("src", "http://xlstyle.oss-cn-hangzhou.aliyuncs.com/xinlu-pc/images/up_01.png");
}, function () {
    $(this).children("img").attr("src", "http://xlstyle.oss-cn-hangzhou.aliyuncs.com/xinlu-pc/images/up.png");
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
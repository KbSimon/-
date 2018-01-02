// 底部悬浮
$(".xlfooter_top_icon li").eq(0).hover(function () {
    $(".logo_03").removeClass("logo_03").addClass("download");
}, function () {
    $(".download").addClass("logo_03").removeClass("download");
});
$(".xlfooter_top_icon li").eq(1).hover(function () {
    $(".logo_03").removeClass("logo_03").addClass("weixin");
}, function () {
    $(".weixin").addClass("logo_03").removeClass("weixin");
});
$(".xlfooter_top_icon li").eq(2).hover(function () {
    $(".logo_03").removeClass("logo_03").addClass("qq");
}, function () {
    $(".qq").addClass("logo_03").removeClass("qq");
});
// 右侧悬浮窗
$(window).scroll(function () {
    var i = $(window).scrollTop();
    if (i == 0) {
        $(".up").stop().animate({
            opacity: "0"
        }, 200);;
    } else {
        $(".up").stop().animate({
            opacity: "1"
        }, 200);;
    }
});
$(".up").click(function () {
    $(window).scrollTop(0);
})
$(".right_nav>li").eq(0).hover(function () {
    $(".down_div").show();
    $(this).children("img").attr("src", "https://xlstyle.oss-cn-hangzhou.aliyuncs.com/xinlu-pc/images/download_01.png");
}, function () {
    $(".down_div").hide();
    $(this).children("img").attr("src", "https://xlstyle.oss-cn-hangzhou.aliyuncs.com/xinlu-pc/images/download.png");
});
$(".right_nav>li").eq(1).hover(function () {
    $(this).find("img").attr("src", "https://xlstyle.oss-cn-hangzhou.aliyuncs.com/xinlu-pc/images/jisuanqi_01.png");
}, function () {
    $(this).find("img").attr("src", "https://xlstyle.oss-cn-hangzhou.aliyuncs.com/xinlu-pc/images/jisuanqi.png");
});
$(".right_nav>li").eq(2).hover(function () {
    $(".kefu_num").show();
    $(this).children("img").attr("src", "https://xlstyle.oss-cn-hangzhou.aliyuncs.com/xinlu-pc/images/kefu_01.png");
}, function () {
    $(".kefu_num").hide();
    $(this).children("img").attr("src", "https://xlstyle.oss-cn-hangzhou.aliyuncs.com/xinlu-pc/images/kefu.png");
});
// 联系客服
$(".right_nav>li").eq(2).click(function () {
    window.open("http://p.qiao.baidu.com/cps/chat?siteId=11392674&userId=24667589");
})

$(".right_nav>li").eq(3).hover(function () {
    $(this).children("img").attr("src", "https://xlstyle.oss-cn-hangzhou.aliyuncs.com/xinlu-pc/images/up_01.png");
}, function () {
    $(this).children("img").attr("src", "https://xlstyle.oss-cn-hangzhou.aliyuncs.com/xinlu-pc/images/up.png");
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
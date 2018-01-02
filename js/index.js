
// 标的
$(".xlmark_li").hover(function(){
    $(this).css('box-shadow', '0 15px 30px rgba(0,0,0,0.1)').stop().animate({
        top: -3
    }, 300);
},function(){
    $(this).css('box-shadow', '0 10px 20px #f7f3ec').stop().animate({
        top: 0
    }, 300);
});

// 下载
$(".iPhone").hover(function(){
    $(".iPhone_bg").removeClass("iPhone_bg").addClass("iPhone_bg02");
    $(".downloadApp").removeClass("downloadApp").addClass("downloadApp02");
},function(){
    $(".iPhone_bg02").addClass("iPhone_bg").removeClass("iPhone_bg02");
    $(".downloadApp02").addClass("downloadApp").removeClass("downloadApp02");
});
$(".Android").hover(function(){
    $(".Android_bg").removeClass("Android_bg").addClass("Android_bg02");
    $(".downloadApp").removeClass("downloadApp").addClass("downloadApp02");
},function(){
    $(".Android_bg02").addClass("Android_bg").removeClass("Android_bg02");
    $(".downloadApp02").addClass("downloadApp").removeClass("downloadApp02");
});




// 鑫客户专享系列
$('.novice_series').hover(function () {
    $(".series_mark").attr("src", "https://xlstyle.oss-cn-hangzhou.aliyuncs.com/xinlu-pc/images/series_mark_01.png");
    $(this).css('box-shadow', '0 15px 30px rgba(0,0,0,0.1)').stop().animate({
        top: -5
    }, 300);
}, function () {
    $(".series_mark").attr("src", "https://xlstyle.oss-cn-hangzhou.aliyuncs.com/xinlu-pc/images/series_mark.png");
    $(this).css('box-shadow', '0 10px 20px #f7f3ec').stop().animate({
        top: 0
    }, 300);
});

// bnner
$(document).ready(function () {
    var listLen = $('.banner_ul>li').length;
    var width;
    var lisWidth;
    lisWidth = $(window).width();
    if (lisWidth > 1920) {
        width = 1920;
    } else if (lisWidth > 1200) {
        $('.banner_ul>li').css({
            width: lisWidth
        });
        width = lisWidth;
    } else {
        $('.banner_ul>li').css({
            width: 1200
        });
        width = 1200;
    }

    var showWidth = function () {
        lisWidth = $(window).width();
        if (lisWidth > 1920) {
            width = 1920;
        } else if (lisWidth > 1200) {
            $('.banner_ul>li').css({
                width: lisWidth
            });
            width = lisWidth;
        } else {
            $('.banner_ul>li').css({
                width: 1200
            });
            width = 1200;
        }
    }

    var bannerN = 0;

    function nextBan() {
        bannerN = bannerN >= listLen - 1 ? 0 : bannerN + 1;
        showBan();
    }

    function prevBan() {
        bannerN = bannerN <= 0 ? listLen - 1 : bannerN - 1;
        showBan();
    }

    function showBan() {
        banLef = -(width * bannerN);
        $('.banner_ul').stop().animate({
            left: banLef
        }, 300);
        $('.banner_btn>li').eq(bannerN).addClass('banner_active').removeClass('banner_unactive').siblings().addClass('banner_unactive');
        $('.banner_btn>li').eq(bannerN).stop().animate({}, 200).siblings().stop().animate({}, 200);
    }

    // 自动切换
    var lb = setInterval(function () {
        nextBan();
    }, 5000)

    $('.banner').hover(function () {
        clearInterval(lb);
        $('.banner_btn>li').click(function () {
            var lisIndex = $(this).index();
            bannerN = lisIndex;
            $('.banner_ul').stop().animate({
                left: -lisIndex * width
            }, 300);
            $(this).addClass('banner_active').removeClass('banner_unactive').siblings().addClass('banner_unactive');
            $(this).stop().animate({

            }, 200).siblings().stop().animate({

            }, 200);
        })
    }, function () {
        lb = setInterval(function () {
            nextBan();
        }, 5000)
    })

    // 窗口变动
    $(window).resize(function () {
        showWidth();
        var banL = -bannerN * width;

        $('.banner_ul').css('left', banL);
    })
});

$('.invest li').hover(function () {
    $(this).find(".invest_img_02").show();
    $(this).css('box-shadow', '0 15px 30px rgba(0,0,0,0.1)').stop().animate({
        top: -10
    }, 300);
}, function () {
    $(this).find(".invest_img_02").hide();
    $(this).css('box-shadow', '0 10px 20px #f7f3ec').stop().animate({
        top: 0
    }, 300);
});

$(window).scroll(function () {
    // 大于500时header的悬浮效果
    if ($(window).scrollTop() > 500) {
        $(".topbar>li>a").css("color", "#666");
        $(".bottombar>li>a").css("color", "#333");
        $(".aborder").addClass("otherborder").removeClass("aborder");
        $(".xlHead_left").removeClass("xlHead_left").addClass("logo_02");
        $("header").addClass("xlHead_active").removeClass("xlHead_noActive");

        $("header").hover(function () {
            $(".topbar>li>a").css("color", "#666");
            $(".bottombar>li>a").css("color", "#333");
            $(".aborder").addClass("otherborder").removeClass("aborder");
            $(".xlHead_left").removeClass("xlHead_left").addClass("logo_02");
        })
    // 小于500时header的悬浮效果
    } else if ($(window).scrollTop() < 500) {
        $(".topbar>li>a").css("color", "#fff");
        $(".bottombar>li>a").css("color", "#fff");
        $(".logo_02").addClass("xlHead_left").removeClass("logo_02");
        $(".otherborder").removeClass("otherborder").addClass("aborder");
        $("header").removeClass("xlHead_active").addClass("xlHead_noActive");

        $("header").hover(function () {
            $(".topbar>li>a").css("color", "#666");
            $(".bottombar>li>a").css("color", "#333");
            $(".aborder").addClass("otherborder").removeClass("aborder");
            $(".xlHead_left").removeClass("xlHead_left").addClass("logo_02");
        }, function () {
            $(".topbar>li>a").css("color", "#fff");
            $(".bottombar>li>a").css("color", "#fff");
            $(".logo_02").addClass("xlHead_left").removeClass("logo_02");
            $(".otherborder").removeClass("otherborder").addClass("aborder");
        })
    }
})

// 标的
$(".xlmark_li").hover(function () {
    $(this).css('box-shadow', '0 15px 30px rgba(0,0,0,0.1)').stop().animate({
        top: -3
    }, 300);
}, function () {
    $(this).css('box-shadow', '0 10px 20px #f7f3ec').stop().animate({
        top: 0
    }, 300);
});

// 下载
$(".iPhone").hover(function () {
    $(".iPhone_bg").removeClass("iPhone_bg").addClass("iPhone_bg02");
    $(".downloadApp").removeClass("downloadApp").addClass("downloadApp02");
}, function () {
    $(".iPhone_bg02").addClass("iPhone_bg").removeClass("iPhone_bg02");
    $(".downloadApp02").addClass("downloadApp").removeClass("downloadApp02");
});
$(".Android").hover(function () {
    $(".Android_bg").removeClass("Android_bg").addClass("Android_bg02");
    $(".downloadApp").removeClass("downloadApp").addClass("downloadApp02");
}, function () {
    $(".Android_bg02").addClass("Android_bg").removeClass("Android_bg02");
    $(".downloadApp02").addClass("downloadApp").removeClass("downloadApp02");
});
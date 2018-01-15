$("header").hover(function(){
   // $("header").hover(function(){
    $(this).addClass("border_01");
    $(".topbar>li").css("color","#666");
    $(".xlUser>a").css("color","#666");
    $(".topbar>li>a").css("color","#666");
    $(".bottombar>li>a").css("color","#333");
    $(".aborder").addClass("otherborder").removeClass("aborder");
    $(".xlHead_left").removeClass("xlHead_left").addClass("logo_02");
    $(".xlUser_bg01").addClass("xlUser_bg02").removeClass("xlUser_bg01")    
},function(){
    $(this).removeClass("border_01")    
    $(".xlUser>a").css("color","#fff");
    $(".topbar>li").css("color","#fff");
    $(".topbar>li>a").css("color","#fff");
    $(".bottombar>li>a").css("color","#fff");
    $(".logo_02").addClass("xlHead_left").removeClass("logo_02");
    $(".otherborder").removeClass("otherborder").addClass("aborder");
    $(".xlUser_bg02").addClass("xlUser_bg01").removeClass("xlUser_bg02")    
})

$(window).scroll(function () {
    // 大于500时header的悬浮效果
    if ($(window).scrollTop() > 550) {
        $(".xlUser>a").css("color", "#666");
        $(".topbar>li").css("color", "#666");
        $(".topbar>li>a").css("color", "#666");
        $(".bottombar>li>a").css("color", "#333");
        $(".aborder").addClass("otherborder").removeClass("aborder");
        $(".xlHead_left").removeClass("xlHead_left").addClass("logo_02");
        $("header").addClass("xlHead_active").removeClass("xlHead_noActive");
        $(".xlUser_bg01").addClass("xlUser_bg02").removeClass("xlUser_bg01");

        // 大于500 header悬浮
        $("header").hover(function () {
            $(".xlUser>a").css("color", "#666");
            $(".topbar>li").css("color", "#666");
            $(".topbar>li>a").css("color", "#666");
            $(".bottombar>li>a").css("color", "#333");
            $(".aborder").addClass("otherborder").removeClass("aborder");
            $(".xlHead_left").removeClass("xlHead_left").addClass("logo_02");
            $(".xlUser_bg01").addClass("xlUser_bg02").removeClass("xlUser_bg01");
        }, function () {
            $(".xlUser>a").css("color", "#666");
            $(".topbar>li").css("color", "#666");
            $(".topbar>li>a").css("color", "#666");
            $(".bottombar>li>a").css("color", "#333");
            $(".aborder").addClass("otherborder").removeClass("aborder");
            $(".xlHead_left").removeClass("xlHead_left").addClass("logo_02");
            $(".xlUser_bg01").addClass("xlUser_bg02").removeClass("xlUser_bg01");
        })
        // 小于500时header的悬浮效果
    } else if ($(window).scrollTop() < 550) {
        $(".xlUser>a").css("color", "#fff");
        $(".topbar>li").css("color", "#fff");
        $(".topbar>li>a").css("color", "#fff");
        $(".bottombar>li>a").css("color", "#fff");
        $(".logo_02").addClass("xlHead_left").removeClass("logo_02");
        $(".otherborder").removeClass("otherborder").addClass("aborder");
        $("header").removeClass("xlHead_active").addClass("xlHead_noActive");
        $(".xlUser_bg02").addClass("xlUser_bg01").removeClass("xlUser_bg02");

        $("header").hover(function () {
            $(this).addClass("border_01");
            $(".xlUser>a").css("color", "#666");
            $(".topbar>li").css("color", "#666");
            $(".topbar>li>a").css("color", "#666");
            $(".bottombar>li>a").css("color", "#333");
            $(".aborder").addClass("otherborder").removeClass("aborder");
            $(".xlHead_left").removeClass("xlHead_left").addClass("logo_02");
            $(".xlUser_bg01").addClass("xlUser_bg02").removeClass("xlUser_bg01");
        }, function () {// alert(1)
            $(this).removeClass("border_01");
            $(".xlUser>a").css("color", "#fff");
            $(".topbar>li").css("color", "#fff");
            $(".topbar>li>a").css("color", "#fff");
            $(".bottombar>li>a").css("color", "#fff");
            $(".logo_02").addClass("xlHead_left").removeClass("logo_02");
            $(".otherborder").removeClass("otherborder").addClass("aborder");
            $(".xlUser_bg02").addClass("xlUser_bg01").removeClass("xlUser_bg02");
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
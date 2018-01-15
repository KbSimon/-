$(window).scroll(function () {
    if($(window).scrollTop() > 100){
        $("header").css("position","fixed");
    } else if($(window).scrollTop() < 100){
        $("header").css("position","static");
    }
});

$(".bottombar>li>a").click(function(){
    $(this).addClass("otherborder").parent().siblings().find("a").removeClass("otherborder").removeClass("aborder");
})

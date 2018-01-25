$(window).scroll(function () {
    if($(window).scrollTop() > 60){
        $("header").css({"position":"fixed","top":"0"});
    } else if($(window).scrollTop() < 60){
        $("header").css({"position":"static"});
    }
});

$(".bottombar>li>a").click(function(){
    $(this).addClass("otherborder").parent().siblings().find("a").removeClass("otherborder").removeClass("aborder");
})

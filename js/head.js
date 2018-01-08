$(window).scroll(function () {
    if($(window).scrollTop() > 100){
        $("header").css("position","fixed");
    } else if($(window).scrollTop() < 100){
        $("header").css("position","static");
    }
});

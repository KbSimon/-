$(".xlActivity_title_right>li").eq(0).hover(function () {
    $(this).hide();
    $(".xlActivity_title_right").css("right", "-60px");
    $(".xlActivity_top_ul>li").eq(1).css("z-index", 6);
    $(".xlActivity_title_left>li").eq(0).show().css("opacity", "1");
})

$(".xlActivity_title_right>li").eq(1).hover(function () {
    $(this).hide();
    $(".xlActivity_title_right>li").eq(0).hide();
    $(".xlActivity_title_right").css("right", "-120px");
    $(".xlActivity_top_ul>li").eq(2).css("z-index", 6);
    $(".xlActivity_top_ul>li").eq(0).css("z-index", 4);
    $(".xlActivity_top_ul>li").eq(1).css("z-index", 5);
    $(".xlActivity_top_ul>li").eq(3).css("z-index", 3);
    $(".xlActivity_top_ul>li").eq(4).css("z-index", 2);
    $(".xlActivity_top_ul>li").eq(5).css("z-index", 1);
    $(".xlActivity_title_left>li").eq(0).show().css("opacity", "1");
    $(".xlActivity_title_left>li").eq(1).show().css("opacity", "1");
})

$(".xlActivity_title_right>li").eq(2).hover(function () {
    $(this).hide();
    $(".xlActivity_title_right>li").eq(0).hide();
    $(".xlActivity_title_right>li").eq(1).hide();
    $(".xlActivity_title_right").css("right", "-180px");
    $(".xlActivity_top_ul>li").eq(3).css("z-index", 6);
    $(".xlActivity_top_ul>li").eq(0).css("z-index", 3);
    $(".xlActivity_top_ul>li").eq(1).css("z-index", 4);
    $(".xlActivity_top_ul>li").eq(2).css("z-index", 5);
    $(".xlActivity_top_ul>li").eq(4).css("z-index", 2);
    $(".xlActivity_top_ul>li").eq(5).css("z-index", 1);
    $(".xlActivity_title_left>li").eq(0).show().css("opacity", "1");
    $(".xlActivity_title_left>li").eq(1).show().css("opacity", "1");
    $(".xlActivity_title_left>li").eq(2).show().css("opacity", "1");
})

$(".xlActivity_title_right>li").eq(3).hover(function () {
    $(this).hide();
    $(".xlActivity_title_right>li").eq(0).hide();
    $(".xlActivity_title_right>li").eq(1).hide();
    $(".xlActivity_title_right>li").eq(2).hide();
    $(".xlActivity_title_right").css("right", "-240px")
    $(".xlActivity_top_ul>li").eq(4).css("z-index", 6);
    $(".xlActivity_top_ul>li").eq(0).css("z-index", 2);
    $(".xlActivity_top_ul>li").eq(1).css("z-index", 3);
    $(".xlActivity_top_ul>li").eq(2).css("z-index", 4);
    $(".xlActivity_top_ul>li").eq(3).css("z-index", 5);
    $(".xlActivity_top_ul>li").eq(5).css("z-index", 1);
    $(".xlActivity_title_left>li").eq(0).show().css("opacity", "1");
    $(".xlActivity_title_left>li").eq(1).show().css("opacity", "1");
    $(".xlActivity_title_left>li").eq(2).show().css("opacity", "1");
    $(".xlActivity_title_left>li").eq(3).show().css("opacity", "1");
})

$(".xlActivity_title_right>li").eq(4).hover(function () {
    $(this).hide();
    $(".xlActivity_title_right>li").eq(0).hide();
    $(".xlActivity_title_right>li").eq(1).hide();
    $(".xlActivity_title_right>li").eq(2).hide();
    $(".xlActivity_title_right>li").eq(3).hide();
    $(".xlActivity_title_right").css("right", "-300px");
    $(".xlActivity_top_ul>li").eq(5).css("z-index", 6);
    $(".xlActivity_top_ul>li").eq(0).css("z-index", 1);
    $(".xlActivity_top_ul>li").eq(1).css("z-index", 2);
    $(".xlActivity_top_ul>li").eq(2).css("z-index", 3);
    $(".xlActivity_top_ul>li").eq(3).css("z-index", 4);
    $(".xlActivity_top_ul>li").eq(4).css("z-index", 5);
    $(".xlActivity_title_left>li").eq(0).show().css("opacity", "1");
    $(".xlActivity_title_left>li").eq(1).show().css("opacity", "1");
    $(".xlActivity_title_left>li").eq(2).show().css("opacity", "1");
    $(".xlActivity_title_left>li").eq(3).show().css("opacity", "1");
    $(".xlActivity_title_left>li").eq(4).show().css("opacity", "1");
})

// 左→
$(".xlActivity_title_left>li").eq(0).hover(function () {
    $(this).css("opacity", "0");
    $(".xlActivity_title_right").css("right", "0px")
    $(".xlActivity_top_ul>li").eq(0).css("z-index", 6)
    $(".xlActivity_top_ul>li").eq(1).css("z-index", 5);
    $(".xlActivity_top_ul>li").eq(2).css("z-index", 4);
    $(".xlActivity_top_ul>li").eq(3).css("z-index", 3);
    $(".xlActivity_top_ul>li").eq(4).css("z-index", 2);
    $(".xlActivity_top_ul>li").eq(5).css("z-index", 1);
    $(".xlActivity_title_left>li").eq(1).hide().css("opacity", "0");
    $(".xlActivity_title_left>li").eq(2).hide().css("opacity", "0");
    $(".xlActivity_title_left>li").eq(3).hide().css("opacity", "0");
    $(".xlActivity_title_left>li").eq(4).hide().css("opacity", "0");
    $(".xlActivity_title_left>li").eq(5).hide().css("opacity", "0");
    $(".xlActivity_title_right>li").eq(0).show().css("opacity", "1");
    $(".xlActivity_title_right>li").eq(1).show().css("opacity", "1");
    $(".xlActivity_title_right>li").eq(2).show().css("opacity", "1");
    $(".xlActivity_title_right>li").eq(3).show().css("opacity", "1");
    $(".xlActivity_title_right>li").eq(4).show().css("opacity", "1");
    $(".xlActivity_title_right>li").eq(5).show().css("opacity", "1");
})


$(".xlActivity_title_left>li").eq(1).hover(function () {
    $(this).css("opacity", "0");
    $(".xlActivity_title_right").css("right", "-60px");
    $(".xlActivity_top_ul>li").eq(2).css("z-index", 4)
    $(".xlActivity_top_ul>li").eq(0).css("z-index", 5)
    $(".xlActivity_top_ul>li").eq(1).css("z-index", 6);
    $(".xlActivity_top_ul>li").eq(3).css("z-index", 3);
    $(".xlActivity_top_ul>li").eq(4).css("z-index", 2);
    $(".xlActivity_top_ul>li").eq(5).css("z-index", 1);
    $(".xlActivity_title_left>li").eq(0).show().css("opacity", "1");
    $(".xlActivity_title_left>li").eq(2).hide().css("opacity", "0");
    $(".xlActivity_title_left>li").eq(3).hide().css("opacity", "0");
    $(".xlActivity_title_left>li").eq(4).hide().css("opacity", "0");
    $(".xlActivity_title_left>li").eq(5).hide().css("opacity", "0");
    $(".xlActivity_title_right>li").eq(0).hide().css("opacity", "0");
    $(".xlActivity_title_right>li").eq(1).show().css("opacity", "1");
    $(".xlActivity_title_right>li").eq(2).show().css("opacity", "1");
    $(".xlActivity_title_right>li").eq(3).show().css("opacity", "1");
    $(".xlActivity_title_right>li").eq(4).show().css("opacity", "1");
    $(".xlActivity_title_right>li").eq(5).show().css("opacity", "1");
})

 $(".xlActivity_title_left>li").eq(2).hover(function(){
    $(this).css("opacity", "0");
    $(".xlActivity_title_right").css("right", "-120px");
    $(".xlActivity_top_ul>li").eq(2).css("z-index", 6);
    $(".xlActivity_top_ul>li").eq(0).css("z-index", 4);
    $(".xlActivity_top_ul>li").eq(1).css("z-index", 5);
    $(".xlActivity_top_ul>li").eq(3).css("z-index", 3);
    $(".xlActivity_top_ul>li").eq(4).css("z-index", 2);
    $(".xlActivity_top_ul>li").eq(5).css("z-index", 1);
    $(".xlActivity_title_left>li").eq(0).show().css("opacity", "1");
    $(".xlActivity_title_left>li").eq(1).show().css("opacity", "1");
    $(".xlActivity_title_left>li").eq(3).hide().css("opacity", "0");
    $(".xlActivity_title_left>li").eq(4).hide().css("opacity", "0");
    $(".xlActivity_title_left>li").eq(5).hide().css("opacity", "0");
    $(".xlActivity_title_right>li").eq(0).hide().css("opacity", "0");
    $(".xlActivity_title_right>li").eq(1).hide().css("opacity", "0");
    $(".xlActivity_title_right>li").eq(2).show().css("opacity", "1");
    $(".xlActivity_title_right>li").eq(3).show().css("opacity", "1");
    $(".xlActivity_title_right>li").eq(4).show().css("opacity", "1");
    $(".xlActivity_title_right>li").eq(5).show().css("opacity", "1");
})

 $(".xlActivity_title_left>li").eq(3).hover(function(){
    $(this).css("opacity", "0");
    $(".xlActivity_title_right").css("right", "-180px");
    $(".xlActivity_top_ul>li").eq(2).css("z-index", 5);
    $(".xlActivity_top_ul>li").eq(0).css("z-index", 3);
    $(".xlActivity_top_ul>li").eq(1).css("z-index", 4);
    $(".xlActivity_top_ul>li").eq(3).css("z-index", 6);
    $(".xlActivity_top_ul>li").eq(4).css("z-index", 2);
    $(".xlActivity_top_ul>li").eq(5).css("z-index", 1);
    $(".xlActivity_title_left>li").eq(0).show().css("opacity", "1");
    $(".xlActivity_title_left>li").eq(1).show().css("opacity", "1");
    $(".xlActivity_title_left>li").eq(2).show().css("opacity", "1");
    $(".xlActivity_title_left>li").eq(4).hide().css("opacity", "0");
    $(".xlActivity_title_left>li").eq(5).hide().css("opacity", "0");
    $(".xlActivity_title_right>li").eq(0).hide().css("opacity", "0");
    $(".xlActivity_title_right>li").eq(1).hide().css("opacity", "0");
    $(".xlActivity_title_right>li").eq(2).hide().css("opacity", "0");
    $(".xlActivity_title_right>li").eq(3).show().css("opacity", "1");
    $(".xlActivity_title_right>li").eq(4).show().css("opacity", "1");
    $(".xlActivity_title_right>li").eq(5).show().css("opacity", "1");
})

 $(".xlActivity_title_left>li").eq(4).hover(function(){
    $(this).css("opacity", "0");
    $(".xlActivity_title_right").css("right", "-240px");
    $(".xlActivity_top_ul>li").eq(2).css("z-index", 4);
    $(".xlActivity_top_ul>li").eq(0).css("z-index", 2);
    $(".xlActivity_top_ul>li").eq(1).css("z-index", 3);
    $(".xlActivity_top_ul>li").eq(3).css("z-index", 5);
    $(".xlActivity_top_ul>li").eq(4).css("z-index", 6);
    $(".xlActivity_top_ul>li").eq(5).css("z-index", 1);
    $(".xlActivity_title_left>li").eq(0).show().css("opacity", "1");
    $(".xlActivity_title_left>li").eq(1).show().css("opacity", "1");
    $(".xlActivity_title_left>li").eq(2).show().css("opacity", "1");
    $(".xlActivity_title_left>li").eq(3).show().css("opacity", "1");
    $(".xlActivity_title_left>li").eq(5).hide().css("opacity", "0");
    $(".xlActivity_title_right>li").eq(0).hide().css("opacity", "0");
    $(".xlActivity_title_right>li").eq(1).hide().css("opacity", "0");
    $(".xlActivity_title_right>li").eq(2).hide().css("opacity", "0");
    $(".xlActivity_title_right>li").eq(3).hide().css("opacity", "0");
    $(".xlActivity_title_right>li").eq(4).show().css("opacity", "1");
    $(".xlActivity_title_right>li").eq(5).show().css("opacity", "1");
})

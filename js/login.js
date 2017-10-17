 // 导入头部
 $("header").load("head.html");
 // 导入尾部
 $("footer").load("footer.html");

 $(".login_ul>li").click(function(){
     $(".login_ul>li").addClass("active").siblings().removeClass("active")
 });

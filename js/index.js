
    // 鑫客户专享系列
    $('.novice_series').hover(function () {
        $(".series_mark").attr("src", "images/series_mark_01.png");
        $(this).css('box-shadow', '0 15px 30px rgba(0,0,0,0.1)').stop().animate({
            top: -10
        }, 300);
    }, function () {
        $(".series_mark").attr("src", "images/series_mark.png");
        $(this).css('box-shadow', '0 10px 20px #f7f3ec').stop().animate({
            top: 0
        }, 300);
    });

    // 投资专区
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
    $(function () {

        var index = 0;
        // 获取xia一个索引
        function next() {
            index = (index == $('.friends_ul>li').length) ? 0 : (index + 1);
            change();
        }
        // 获取shang一个索引
        function prev() {
            index = index == 0 ? $('.friends_ul>li').length : index - 1;
            change();
        }
        //  setInterval(prev, 5000);
        // 改变样式
        function change() {
            var left = -(($('.friends_ul').width() / 4.25) * index);
            console.log($('.friends_ul').width());
            $('.coo_sec').stop().animate({
                marginLeft: left,
            }, 300);
        }
        // 上一张
        $('.l_btn').click(function () {
            prev();
            console.log("s")
        });
        // 下一张
        $('.r_btn').click(function () {
            next();
            console.log("xia")
        });
    })
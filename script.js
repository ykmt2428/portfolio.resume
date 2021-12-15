$(function(){
    $('.hanbager').click(function(){
        if($('#header').hasClass('open')) {
            $('#header').removeClass('open');
        } else {
            $('#header').addClass('open');
        }
    });
    $('#mask').click(function(){
        if($('#header').hasClass('open')) {
            $('#header').removeClass('open');
        }
    });
    $('.hanbager-list a').click(function(){
        if($('#header').hasClass('open')) {
            $('#header').removeClass('open');
        }
    });
    $(".inview").on("inview", function (event, isInView) {
        if (isInView) {
          $(this).stop().addClass("show");
        }
      });
      $('a[href^="#"]').click(function(){
            var spped = 800,
                href =$(this).attr("href"),
                target = $(href === "#"|| href===""? 'html':href),
                position =target.offset().top;
            $("html,body").animate({scrollTop:position},spped,"swing");
            return false;
      });
});
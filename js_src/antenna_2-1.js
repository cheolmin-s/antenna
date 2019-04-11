$(function(){

    var $popup = $('.popupBg, .popup');

    $('.contents-list-item').on('click',function(){

        $('html,body,.popup').css({overflow:'hidden'}).bind('touchmove');

        $(this).children($popup).fadeIn();

    });

    $('.popupBg, .popup-wrap-close').on('click', function(e){

        e.stopPropagation();

        $('html,body,.popup').css({overflow:'visible'}).unbind('touchmove');

        $popup.fadeOut();
    });
});
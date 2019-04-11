$(function(){

    var $popup = $('.popupBg, .popup');

    $('.contents-list-item').on('click',function(e){

        e.preventDefault();
        e.stopPropagation();

        $('html,body').css({overflow:'hidden'}).bind('touchmove,mousewheel');

        $(this).children($popup).fadeIn();

    });

    $('.popupBg, .popup-wrap-close').on('click', function(e){

        e.stopPropagation();
        
        $('html,body').css({overflow:'visible'}).unbind('touchmove mousewheel');

        $popup.fadeOut();
    });
});
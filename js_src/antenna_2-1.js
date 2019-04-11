$(function(){

    var $popup = $('.popupBg, .popup');

    $('.contents-list-item').on('click',function(e){

        e.preventDefault();
        
        $('html,body').css({overflow:'hidden'}).bind('touchmove');

        $(this).children($popup).fadeIn();

    });

    $('.popupBg, .popup-wrap-close').on('click', function(e){

        e.stopPropagation();

        $('html,body').css({overflow:'visible'}).unbind('touchmove');

        $popup.fadeOut();
    });
});
$(function(){

    var $popup = $('.popupBg, .popup');

    $('.contents-list-item').on('click',function(){

        $('body').css({overflow:'hidden'});

        $(this).children($popup).fadeIn();

    });

    $('.popupBg').on('click', function(e){

        e.stopPropagation();

        $('body').css({overflow:'visible'});

        $popup.fadeOut();
    });
});
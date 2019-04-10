$(function(){

    var $popup = $('.popupBg, .popup');

    $('.contents-list-item').on('click',function(){

        $(this).children($popup).fadeIn();

    });

    $('.popupBg').on('click', function(e){

        e.stopPropagation();

        $popup.fadeOut();
    });
});
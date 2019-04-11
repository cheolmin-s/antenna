$(function(){
    $('.share-button').on('click',function(){
        $('.share-button').toggleClass('on');
    });

    $(window).scroll(function(){

        var st = 0;
        var scrollTop =  $(this).scrollTop();

        if( st < scrollTop){
            $('.header').addClass('on');
        } else {
            $('.header').removeClass('on');
        }
    });

    $('.gnbBtn, .gnbWrap').on('click',function(){

        $('.gnbBtn, .gnbWrap').toggleClass('on');
    });

    $('.share-button').on('click',function(){
        $('.sns').toggleClass('on');
    });

});
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGVubmFfMS5qcyIsImFudGVubmFfMi0xLmpzIiwiYW50ZW5uYV82LTEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKXtcclxuICAgICQoJy5zaGFyZS1idXR0b24nKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLnNoYXJlLWJ1dHRvbicpLnRvZ2dsZUNsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgc3QgPSAwO1xyXG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSAgJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgaWYoIHN0IDwgc2Nyb2xsVG9wKXtcclxuICAgICAgICAgICAgJCgnLmhlYWRlcicpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy5oZWFkZXInKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuZ25iQnRuLCAuZ25iV3JhcCcpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgJCgnLmduYkJ0biwgLmduYldyYXAnKS50b2dnbGVDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5zaGFyZS1idXR0b24nKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLnNucycpLnRvZ2dsZUNsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG59KTsiLCIkKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRwb3B1cCA9ICQoJy5wb3B1cEJnLCAucG9wdXAnKTtcclxuXHJcbiAgICAkKCcuY29udGVudHMtbGlzdC1pdGVtJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICQoJ2h0bWwsYm9keScpLmNzcyh7b3ZlcmZsb3c6J2hpZGRlbid9KS5iaW5kKCd0b3VjaG1vdmUnKTtcclxuXHJcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbigkcG9wdXApLmZhZGVJbigpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5wb3B1cEJnLCAucG9wdXAtd3JhcC1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAkKCdodG1sLGJvZHknKS5jc3Moe292ZXJmbG93Oid2aXNpYmxlJ30pLnVuYmluZCgndG91Y2htb3ZlJyk7XHJcblxyXG4gICAgICAgICRwb3B1cC5mYWRlT3V0KCk7XHJcbiAgICB9KTtcclxufSk7IiwiIl19

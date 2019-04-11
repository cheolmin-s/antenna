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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGVubmFfMS5qcyIsImFudGVubmFfMi0xLmpzIiwiYW50ZW5uYV82LTEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG4gICAgJCgnLnNoYXJlLWJ1dHRvbicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcuc2hhcmUtYnV0dG9uJykudG9nZ2xlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciBzdCA9IDA7XHJcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICBpZiggc3QgPCBzY3JvbGxUb3Ape1xyXG4gICAgICAgICAgICAkKCcuaGVhZGVyJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLmhlYWRlcicpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5nbmJCdG4sIC5nbmJXcmFwJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAkKCcuZ25iQnRuLCAuZ25iV3JhcCcpLnRvZ2dsZUNsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnNoYXJlLWJ1dHRvbicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcuc25zJykudG9nZ2xlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbn0pOyIsIiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJHBvcHVwID0gJCgnLnBvcHVwQmcsIC5wb3B1cCcpO1xyXG5cclxuICAgICQoJy5jb250ZW50cy1saXN0LWl0ZW0nKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICQoJ2JvZHknKS5jc3Moe292ZXJmbG93OidoaWRkZW4nfSk7XHJcblxyXG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oJHBvcHVwKS5mYWRlSW4oKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcucG9wdXBCZycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAkKCdib2R5JykuY3NzKHtvdmVyZmxvdzondmlzaWJsZSd9KTtcclxuXHJcbiAgICAgICAgJHBvcHVwLmZhZGVPdXQoKTtcclxuICAgIH0pO1xyXG59KTsiLCIiXX0=

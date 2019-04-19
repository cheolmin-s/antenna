$(function(){

    function pageCheck(){

        if( gnb === "sub1" ){

            $('.gnb-list-link').eq(0).addClass('on');

        } else if ( gnb === "sub2"){

            $('.gnb-list-link').eq(1).addClass('on');

        } else if ( gnb === "sub3" ){

            $('.gnb-list-link').eq(2).addClass('on');

        } else if ( gnb === "sub4" ){

            $('.gnb-list-link').eq(3).addClass('on');

        } else if ( gnb === "sub5" ){

            $('.gnb-list-link').eq(4).addClass('on');

        } else if ( gnb === "sub6" ){

            $('.gnb-list-link').eq(5).addClass('on');

        }

    }

    pageCheck()

    $('.gnb-list-item').on('click',function(){

        $(this).removeClass('on');

        $(this).children('.gnb-list-link').addClass('on');

    });

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
$(function(){
    $('.slide-list').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGVubmFfMS5qcyIsImFudGVubmFfMi0xLmpzIiwiYW50ZW5uYV81LTEuanMiLCJhbnRlbm5hXzYtMS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG5cclxuICAgIGZ1bmN0aW9uIHBhZ2VDaGVjaygpe1xyXG5cclxuICAgICAgICBpZiggZ25iID09PSBcInN1YjFcIiApe1xyXG5cclxuICAgICAgICAgICAgJCgnLmduYi1saXN0LWxpbmsnKS5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggZ25iID09PSBcInN1YjJcIil7XHJcblxyXG4gICAgICAgICAgICAkKCcuZ25iLWxpc3QtbGluaycpLmVxKDEpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCBnbmIgPT09IFwic3ViM1wiICl7XHJcblxyXG4gICAgICAgICAgICAkKCcuZ25iLWxpc3QtbGluaycpLmVxKDIpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCBnbmIgPT09IFwic3ViNFwiICl7XHJcblxyXG4gICAgICAgICAgICAkKCcuZ25iLWxpc3QtbGluaycpLmVxKDMpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCBnbmIgPT09IFwic3ViNVwiICl7XHJcblxyXG4gICAgICAgICAgICAkKCcuZ25iLWxpc3QtbGluaycpLmVxKDQpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCBnbmIgPT09IFwic3ViNlwiICl7XHJcblxyXG4gICAgICAgICAgICAkKCcuZ25iLWxpc3QtbGluaycpLmVxKDUpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VDaGVjaygpXHJcblxyXG4gICAgJCgnLmduYi1saXN0LWl0ZW0nKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5nbmItbGlzdC1saW5rJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnNoYXJlLWJ1dHRvbicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcuc2hhcmUtYnV0dG9uJykudG9nZ2xlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciBzdCA9IDA7XHJcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICBpZiggc3QgPCBzY3JvbGxUb3Ape1xyXG4gICAgICAgICAgICAkKCcuaGVhZGVyJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLmhlYWRlcicpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5nbmJCdG4sIC5nbmJXcmFwJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAkKCcuZ25iQnRuLCAuZ25iV3JhcCcpLnRvZ2dsZUNsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnNoYXJlLWJ1dHRvbicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcuc25zJykudG9nZ2xlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG59KTsiLCIkKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRwb3B1cCA9ICQoJy5wb3B1cEJnLCAucG9wdXAnKTtcclxuXHJcbiAgICAkKCcuY29udGVudHMtbGlzdC1pdGVtJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICQoJ2h0bWwsYm9keScpLmNzcyh7b3ZlcmZsb3c6J2hpZGRlbid9KS5iaW5kKCd0b3VjaG1vdmUsbW91c2V3aGVlbCcpO1xyXG5cclxuICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCRwb3B1cCkuZmFkZUluKCk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnBvcHVwQmcsIC5wb3B1cC13cmFwLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICQoJ2h0bWwsYm9keScpLmNzcyh7b3ZlcmZsb3c6J3Zpc2libGUnfSkudW5iaW5kKCd0b3VjaG1vdmUgbW91c2V3aGVlbCcpO1xyXG5cclxuICAgICAgICAkcG9wdXAuZmFkZU91dCgpO1xyXG4gICAgfSk7XHJcbn0pOyIsIiQoZnVuY3Rpb24oKXtcclxuICAgICQoJy5zbGlkZS1saXN0Jykuc2xpY2soe1xyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICBjc3NFYXNlOiAnbGluZWFyJ1xyXG4gICAgfSk7XHJcbn0pOyIsIiJdfQ==

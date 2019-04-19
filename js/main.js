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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudGVubmFfMS5qcyIsImFudGVubmFfMi0xLmpzIiwiYW50ZW5uYV81LTEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgZnVuY3Rpb24gcGFnZUNoZWNrKCl7XHJcblxyXG4gICAgICAgIGlmKCBnbmIgPT09IFwic3ViMVwiICl7XHJcblxyXG4gICAgICAgICAgICAkKCcuZ25iLWxpc3QtbGluaycpLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCBnbmIgPT09IFwic3ViMlwiKXtcclxuXHJcbiAgICAgICAgICAgICQoJy5nbmItbGlzdC1saW5rJykuZXEoMSkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIGduYiA9PT0gXCJzdWIzXCIgKXtcclxuXHJcbiAgICAgICAgICAgICQoJy5nbmItbGlzdC1saW5rJykuZXEoMikuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIGduYiA9PT0gXCJzdWI0XCIgKXtcclxuXHJcbiAgICAgICAgICAgICQoJy5nbmItbGlzdC1saW5rJykuZXEoMykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIGduYiA9PT0gXCJzdWI1XCIgKXtcclxuXHJcbiAgICAgICAgICAgICQoJy5nbmItbGlzdC1saW5rJykuZXEoNCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIGduYiA9PT0gXCJzdWI2XCIgKXtcclxuXHJcbiAgICAgICAgICAgICQoJy5nbmItbGlzdC1saW5rJykuZXEoNSkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcGFnZUNoZWNrKClcclxuXHJcbiAgICAkKCcuZ25iLWxpc3QtaXRlbScpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmduYi1saXN0LWxpbmsnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuc2hhcmUtYnV0dG9uJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5zaGFyZS1idXR0b24nKS50b2dnbGVDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyIHN0ID0gMDtcclxuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgIGlmKCBzdCA8IHNjcm9sbFRvcCl7XHJcbiAgICAgICAgICAgICQoJy5oZWFkZXInKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmduYkJ0biwgLmduYldyYXAnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICQoJy5nbmJCdG4sIC5nbmJXcmFwJykudG9nZ2xlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuc2hhcmUtYnV0dG9uJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5zbnMnKS50b2dnbGVDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbn0pOyIsIiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJHBvcHVwID0gJCgnLnBvcHVwQmcsIC5wb3B1cCcpO1xyXG5cclxuICAgICQoJy5jb250ZW50cy1saXN0LWl0ZW0nKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgJCgnaHRtbCxib2R5JykuY3NzKHtvdmVyZmxvdzonaGlkZGVuJ30pLmJpbmQoJ3RvdWNobW92ZSxtb3VzZXdoZWVsJyk7XHJcblxyXG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oJHBvcHVwKS5mYWRlSW4oKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcucG9wdXBCZywgLnBvcHVwLXdyYXAtY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgJCgnaHRtbCxib2R5JykuY3NzKHtvdmVyZmxvdzondmlzaWJsZSd9KS51bmJpbmQoJ3RvdWNobW92ZSBtb3VzZXdoZWVsJyk7XHJcblxyXG4gICAgICAgICRwb3B1cC5mYWRlT3V0KCk7XHJcbiAgICB9KTtcclxufSk7IiwiJChmdW5jdGlvbigpe1xyXG4gICAgJCgnLnNsaWRlLWxpc3QnKS5zbGljayh7XHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInXHJcbiAgICB9KTtcclxufSk7Il19

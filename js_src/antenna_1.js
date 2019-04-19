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
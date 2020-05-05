$(function(){

    /*start nav*/
   
    $('.nav .aaa').click(function(){

        $('.ddd').animate({
            right:0
        },300);
      

        $('.dd').animate({
            right:15
        },300); 

    }); 

    $('.dd').click(function(){

        $('.ddd').animate({
            right:'-300px'
        },300);

        $('.dd').animate({
            right:'-45'
        },300);
   
    });

    /*end nav*/
    /*start header*/

    $('.header').height($(window).height()-50);
    $("body").niceScroll();




     $(window).scroll(function(){

        if($(this).scrollTop() >= $('window').height()){
            
            $('.nav').addClass('scrolled')
        }

        else{
            
            $(".nav").removeClass('scrolled')
        }

     });



});
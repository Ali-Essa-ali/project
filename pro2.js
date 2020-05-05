
$(function(){
   
    $('.carousel img').height($(window).height());


    $('.vv').click(function(){

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




});




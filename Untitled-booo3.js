$(function(){
     




$('.slider .carousel-item ').height($(window).height()-($(".navbar").innerHeight()+$('.upper-bar').innerHeight()));


$('.featured-work ul li').click(function(){

$(this).addClass('active').siblings().removeClass('active');

if ( $(this).data('class') === '.all')
{
    $('.shiffel .col-sm').css('opacity' ,1);


}else{
    $('.shiffel .col-sm').css('opacity' ,'.4');
   $( $(this).data('class')).parent().css('opacity' ,'1')
    
}



});

$('.carousel').carousel({
    interval:0

});


});
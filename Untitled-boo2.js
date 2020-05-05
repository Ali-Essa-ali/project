$(function(){



    $(window).scroll(function(){

        if($(this).scrollTop() >= $('.navbar').height()){
            
            $('.navbar').addClass('scrolled')
        }

        else{
            
            $(".navbar").removeClass('scrolled')
        }

     });

     $('.tabs .tab1 li').click(function(){


        $(this).addClass('selected').siblings().removeClass('selected');
        $('.tabs .tab2 >div').hide();
        $('.'+$(this).data("class")).show();
        
        });
        




});



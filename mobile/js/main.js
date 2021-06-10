$(function(){

    var ua = navigator.userAgent;
    var event = (ua.match(/iPhone/i)) ? 'touchstart' : 'click';


    if($('.promotion-slide').length > 0){
        var swiper = new Swiper(".promotion-slide", {
            pagination: {
                el: ".promotion-slide .swiper-pagination",
                clickable: true,
                type: "fraction",
                auto: true
            },
            loop : true,
            autoplay : {
                delay : 3500,
                disableOnInteraction : false,
            },
        });
    }

    if($('.recomend').length > 0){
        var swiper = new Swiper(".recomend", {
            slidesPerView: 2.5,
            spaceBetween: 10,
            centeredSlides: false,
            pagination: {
                el: ".recomend .swiper-pagination",
                clickable: true,
            }
        });
    }



    //search form
    $('header .search').click(function(e){
        e.preventDefault();
        $('header .search-contents').addClass('active');    
    });
    $('header .search-close').click(function(e){
        e.preventDefault();
        $('header .search-contents').removeClass('active');    
    });



    //menu-btn
    $('.menu-btn').click(function(e){
        e.preventDefault();
        $('aside').addClass('active');    
    });
    $('aside > div > i').click(function(){
        $('aside').removeClass('active');    
    });


    //backward
    if($('header .backward').length > 0){
        $('header .backward').click(function(e){
            e.preventDefault();
            //history.back();
            history.go(-1);
        });
    }


    //CART
    if($('.cart-form').length > 0){

        //x버튼 클릭시 리스트제거
        $('.cart_list .xi-close').click(function(e){
            e.preventDefault();
            $(this).parent('li').remove();
			calcTotalPrice();
        });


        function calcTotalPrice(){
            cartItem = $('.cart_list > li');
            var itemTotal = 0;
   
            cartItem.each(function(){
               var itemPrice = $(this).find('.cart-info h4').attr('data-price') * $(this).find('.quantity input').val();
               itemTotal += itemPrice;
            });
   
            $('.product-amt').text(comma(itemTotal+'원'));
            var deliveryFee = parseInt($('.delivery-fee').attr('data-price'));
            var totalPrice = comma(deliveryFee + itemTotal);

            $('.total-price').text(totalPrice + '원'); 
        }
        calcTotalPrice();
   
        cartItem.find('input').change(function(){
            calcTotalPrice();
        });

        $('.cart-form [data-price]').each(function(){
            var price = comma(parseInt($(this).attr('data-price')));
            $(this).text(price + '원');
        });


        //천단위 콤마
        function comma(str) {
            str = String(str);
            return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
        }


    } //cart-form

});
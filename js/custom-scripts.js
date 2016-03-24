$(document).ready(function () {

    $('.block-choice .select-image').click(function() {
        var selectorId = $(this).index();
        $(this).find('ul').fadeToggle();
        if(selectorId == 0) {
            $('.block-choice .select-image').eq(1).find('ul').fadeOut(100);
        } else if(selectorId == 1) {
            $('.block-choice .select-image').eq(0).find('ul').fadeOut(100);
        }
    });

    $('.block-choice .select-image ul li').click(function() {
        var selectorId = $(this).parents('.select-image').index();
        var productName = $(this).html();
        var productId = $(this).index();
        $(this).parents('.select-image').find('.selected').html(productName);
        if(selectorId == 0) {
            $('#select-1 option').eq(productId).attr("selected", "selected");
        } else if(selectorId == 1) {
            $('#select-2 option').eq(productId).attr("selected", "selected");
        }
    });

    $('.icon-big-basket').click(function() {
        $('.basket-submit').click();
    });

    $('.product-amount-controls .control').click(function() {
        var currentAmount = $(this).siblings('label').find('.input-amount').val();
        console.log(currentAmount);
        if($(this).hasClass('control-add')) {
            //currentAmount
        }
    });

    $('.slider').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        appendArrows: '.slider-arrow',
        initialSlide: 0,
        prevArrow: '.slider-left-arrow',
        nextArrow: '.slider-right-arrow',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });

});

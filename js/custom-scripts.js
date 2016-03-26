$(document).ready(function () {

    $('.select-image').click(function() {

        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).find('.select-mark').removeClass('selected-mark');
        } else {
            $(this).addClass('active');
            $(this).find('.select-mark').addClass('selected-mark');
        }

        var selectorId = $(this).index('.select-image');
        console.log(selectorId);
        $('.select-image').each(function(index, element) {
            if(index == selectorId){
                $(element).find('ul').fadeToggle();
            } else {
                $(element).find('ul').fadeOut(100);
                $(this).find('.select-mark').removeClass('selected-mark');
            }
        });
    });

    $('.select-image ul li').click(function() {
        var productName = $(this).html();
        var productId = $(this).index();
        var thisOptions = $(this).parent().siblings('select').find('option');

        $(this).parents('.select-image').find('.selected').html(productName);

        $(thisOptions).each(function(id, option) {
            if(id == productId){
                $(option).attr('selected', 'selected');
            } else {
                $(option).attr('selected', false);
            }
        });
    });

    $('.icon-big-basket').click(function() {
        $('.basket-submit').click();
    });

    $('.product-amount-controls .control').click(function() {
        var thisInput = $(this).siblings('label').find('.input-amount');
        var currentAmount = parseInt($(thisInput).val());
        var amountImage = $(this).parents('.product-amount').find('.current-amount');
        console.log(currentAmount);
        if($(this).hasClass('control-add')) {
            $(thisInput).val(++currentAmount);
            $(amountImage).html($(thisInput).val());
        } else if($(this).hasClass('control-remove')) {
            if(currentAmount > 0) {
                $(thisInput).val(--currentAmount);
                $(amountImage).html($(thisInput).val());
            }
        }
    });

    $('.pages-nav ul li').click(function() {
        if(!$(this).hasClass('active') && !$(this).hasClass('three-dot')){
            $('.pages-nav ul li').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('.filter-oils-2 li').click(function() {
        if(!$(this).hasClass('active')){
            $('.filter-oils-2 li').removeClass('active');
            $(this).addClass('active');
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

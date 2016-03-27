$(document).ready(function () {

    $('.select-image').click(function() {

        $(this).toggleClass('active');
        $(this).find('.select-mark').toggleClass('selected-mark');

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

    $('.price-form .icon-basket').click(function() {
        $('.price-form-submit').click();
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

    $('.image-list li').click(function() {
        if(!$(this).hasClass('active')){
            var currentPhoto = $(this).index();
            $('.image-list li').removeClass('active');
            $(this).addClass('active');
            $('.image-main li').css('display', 'none');
            $('.image-main li').eq(currentPhoto).fadeIn();
        }
    });

    $('.icon-menu-middle-control').click(function() {
        $(this).parent().toggleClass('active');
        $('.menu-middle ul').fadeToggle();
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
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});

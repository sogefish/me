/*
 Template Name: Deniel-Cruze
 File Name: custom.js
 Author Name: ThemeVault
 Author URI: http://www.themevault.net/
 License URI: http://www.themevault.net/license/
 */


jQuery(window).load(function () {
    $('#preloader-container').delay(1050).fadeOut('slow');

});

$(document).ready(function () {
    var myButton = $('#mybutton');
    var userFeed = new Instafeed({
        get: 'user',
        userId: '4828631159',
        accessToken: '4828631159.1677ed0.3e66d0fb39cc4a8383ddd034121c65dc',
        limit: '12',
        sortBy: 'most-recent',
        after: function () {
            var images = $("#instafeed").find('a');
            $.each(images, function (index, image) {
                var delay = (index * 75) + 'ms';
                $(image).css('-webkit-animation-delay', delay);
                $(image).css('-moz-animation-delay', delay);
                $(image).css('-ms-animation-delay', delay);
                $(image).css('-o-animation-delay', delay);
                $(image).css('animation-delay', delay);
                $(image).addClass('animated flipInX');
            });

        },
        template: ' <div class="col-md-2 col-sm-2 col-xs-4"><div class="insta-image"><a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a></div></div>'
    });
    userFeed.run();

    // Progress Bar
    $('#about').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'), function () {
                $(this).css('width', $(this).attr('aria-valuetransitiongoal') + '%');
            });
            $(this).unbind('inview');
        }
    });
});


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').addClass('active');
        } else {
            $('.back-to-top').removeClass('active');
        }
    });
    $('#back-to-top').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });





    /*--
     Variables
     -----------------------------------*/
    var
            $imagePopup = $('[data-image-popup]');
    /*Image*/
    $imagePopup.magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
    });



    /*-----------------------------------------------------------
     jQuery for page scrolling
     -------------------------------------------------------------*/
    $('a.page-scroll').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    $("a.page-scroll").on('click', function () {
        $('.menu-section').removeClass('show-win');
        $('.menu-toggle-btn').removeClass('open');
    });

    /* -------------------------------------------------------
     Menu active class changer
     ----------------------------------------------------------*/
    $('.main-menu ul li').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
    });


});




(function ($) {
    /*-------------------------------------------
     Menu show hide 
     ---------------------------------------------*/

})(jQuery);


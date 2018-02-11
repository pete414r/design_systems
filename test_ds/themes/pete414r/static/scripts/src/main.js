$(document).ready(function() {

    // fixed til top
    $('nav').addClass('nav-fixed');
    $('nav > div.logo').css('visibility','visible').fadeIn();
    $('nav > div.nav-toggle').css('visibility','visible').fadeIn();

    // side nav åbener
    $('.nav-icon').click(function(){
        $(".nav-full").toggleClass('active');
        $('main').toggleClass('active');
        $(this).find('img').toggle();
    });
});

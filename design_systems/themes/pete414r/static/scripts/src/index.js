$(document).ready(function() {

    // nav som bund menu
    // Logo and hamburger menu
    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop();
        if( scrollPosition > $(this).height() - $("nav").height() ) {
            $("nav").addClass("nav-fixed");
            $("nav > div.logo").css('visibility','visible').fadeIn();
            $("nav > div.nav-toggle").css('visibility','visible').fadeIn();
        } else {
            $("nav").removeClass("nav-fixed");
            $("nav > div.logo").css('visibility','hidden').fadeOut();
            $("nav > div.nav-toggle").css('visibility','hidden').fadeOut();
        }

    });

    // åbner side nav
    $(".nav-icon").click(function(){
        $(".nav-full").toggleClass("active");
        $("main").toggleClass("active");
        $(this).find("img").toggle();
    });

    // lukkeklik
    $(".nav-full").find("a").click(function(){
        $(".nav-full").toggleClass("active");
        $("main").toggleClass("active");
        $(".nav-icon").find("img").toggle();
    });
});

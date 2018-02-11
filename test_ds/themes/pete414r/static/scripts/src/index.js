$(document).ready(function() {

    // nav som bund menu
    // Logo and hamburger menu
    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop();
        if( scrollPosition > $(this).height() - $("nav").height() ) {
            $("nav").addClass("nav-fixed");
        } else {
            $("nav").removeClass("nav-fixed");
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

// Mobile browsers viewport
function fullMobileViewport() {
    var HEIGHT_CHANGE_TOLERANCE = 100;
    var element = $(this);
    var viewportHeight = $(window).height();

    $(window).resize(function () {
        if (Math.abs(viewportHeight - $(window).height()) > HEIGHT_CHANGE_TOLERANCE) {
            viewportHeight = $(window).height();
            update();
        }
    });

    function update() {
        element.css("height", viewportHeight + "px");
    }

    update();
}
$("header").each(fullMobileViewport);

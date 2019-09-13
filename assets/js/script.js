$(document).ready(function() {
    const links = $(".navi");



    $("#port").on("click", function() {
        remove();
        $(".portfolio").removeClass("not-active").addClass("active slide-in-left");
    });

    $("#homepage").on("click", function() {
        remove();
        $(".blockquote").removeClass("not-active").addClass("active slide-in-left");
    });

    $("#contact").on("click", function() {
        remove();
        $(".contact").removeClass("not-active").addClass("active slide-in-left");
    });

    function remove() {
        $(".active").removeClass("active").addClass("not-active");
    }

    links.on("click", function() {
        let area = $(this).attr("id");
        console.log(area);
    })

    function navFix() {

    }

    $(window).on("scroll", navFix);

});
$(document).ready(function() {

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

});
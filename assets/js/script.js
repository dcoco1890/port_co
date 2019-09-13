$(document).ready(function() {
    const links = $(".navi");

    function remove() {
        $(".active").removeClass("active").addClass("not-active");
    }

    // when you click on a link, the text of the ID attribute is stored in the area variable
    // call remove, then based on ID active is removed and correct area is made active
    links.on("click", function() {


        let area = $(this).attr("id");
        remove();
        switch (area) {
            case "homepage":
                $(".blockquote").removeClass("not-active").addClass("active slide-in-left");
                break;
            case "port":
                $(".portfolio").removeClass("not-active").addClass("active slide-in-left");
                break;
            case "contact":
                $(".contact").removeClass("not-active").addClass("active slide-in-left");
                break;
        }

    })

    function navFix() {

    }

    $(window).on("scroll", navFix);

});
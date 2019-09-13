$(document).ready(function() {

    const head = $("header");
    const links = $(".navi");

    const nav = $(".navigate");
    var offset = nav.offset();
    var top = offset.top;

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



        if (window.scrollY >= top) {
            $("body").css({ "padding-top": top });
            nav.addClass("fixed");
            head.css({ "display": "none" });
            $("body").addClass("fixed-nav");

        } else {
            $("body").css({ "padding-top": 0 });
            nav.removeClass("fixed");
            $("body").removeClass("fixed-nav");
            head.css({ "display": "" });
        }
    }

    $(window).on("scroll", navFix);

});
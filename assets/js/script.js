let port = $(".port-el");
let notRun = true;


$(document).ready(function() {

    const head = $("header");
    const links = $(".navi");


    const nav = $(".navigate");
    var offset = nav.offset();
    var top = offset.top;

    // when you click on a link, the text of the ID attribute is stored in the area variable
    // call remove, then based on ID active is removed and correct area is made active
    links.on("click", function() {

        // id's of clicked elements
        let area = $(this).attr("id");

        // checking to see if area is a truthy value, because the li with my name returns undefined
        if (area) { remove(); }

        switch (area) {
            case "homepage":
                $(".about").removeClass("not-active").addClass("active slide-in-left");
                break;
            case "port":
                $(".portfolio").removeClass("not-active").addClass("active slide-in-left");
                break;
            case "contact":
                $(".contact").removeClass("not-active").addClass("active puff-in-center");
                break;
        }

    });

    // helper function for nav li clicks
    function remove() {
        $(".active").removeClass("active").addClass("not-active");
    }


    function navFix() {
        // if it has not been run yet
        if (notRun) {
            // if the scroll is past the nav
            if (window.scrollY >= top) {
                $("body").css({ "padding-top": top });
                nav.addClass("fixed");
                head.css({ "display": "none" });
                $("body").addClass("fixed-nav");
                window.scroll({
                    top: -100,
                    left: 0,
                    behavior: 'smooth'
                });
                notRun = false;
            } else {
                $("body").css({ "padding-top": 0 });
                nav.removeClass("fixed");
                $("body").removeClass("fixed-nav");
                head.css({ "display": "" });
            }

        } else {
            $("body").css({ "padding-top": 0 });
        }



    }
    // port.on("click", function() {
    //     $().slideToggle("slow");
    // })
    $(window).on("scroll", navFix);


});
function sidebar_close() {
    "use strict";
    document.getElementById("sidebar").style.display = "none",
        $menu.removeClass("fa-times").addClass("fa-bars"), query = !1
}

function sidebar_open() {
    "use strict";
    query === !1 ? (document.getElementById("sidebar").style.display = "block",
        $menu.removeClass("fa-bars").addClass("fa-times"), query = !0) :
        query === !0 && sidebar_close()
}
$(document).ready(function () {
    "use strict";
    var e = $("#mainNav"),
        s = $("nav"),
        a = s[0].offsetTop;
    s.wrap('<div class="nav-placeholder"></div>'),
        $(".nav-placeholder").height(e.outerHeight()),
        $(document).bind("ready scroll", function () {
            var e = $(this).scrollTop();
            e >= a ? s.addClass("fixed") : s.removeClass("fixed")
        })
});
var query = !1,
    didScroll, $menu = $(".mb");
$(window).scroll(function (e) {
    "use strict";
    didScroll = !0
}), setInterval(function () {
    "use strict";
    didScroll && (sidebar_close(), didScroll = !1)
}, 750);
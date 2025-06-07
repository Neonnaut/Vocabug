function colourSchemeButtons(click) {
    let selection = document.querySelectorAll("#colour-switch-field input");

    for (i = 0; i < selection.length; i++) {
        selection[i].classList.remove('checked');
    }
    click.addClass("checked");
}

function assignSchemeClass(scheme) {
    var mySchemes = ["light-mode", "dark-mode", "warm-mode"];

    for (var i = 0; i < mySchemes.length; i++) {
        if (scheme != mySchemes[i]) {
            document.getElementById("colour-target").classList.remove(mySchemes[i]);
        } else {
            document.getElementById("colour-target").classList.add(scheme);
        }
    }

}

if (localStorage.hasOwnProperty('colourScheme')) {
    assignSchemeClass(localStorage.getItem('colourScheme'));
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    assignSchemeClass('light-mode');
}

$(window).on('load', function () {
    if (localStorage.hasOwnProperty('colourScheme')) {
        if (localStorage.getItem('colourScheme') == "light-mode") {
            colourSchemeButtons($("#light-mode"));
        } else if (localStorage.getItem('colourScheme') == "dark-mode") {
            colourSchemeButtons($("#dark-mode"));
        } else if (localStorage.getItem('colourScheme') == "warm-mode") {
            colourSchemeButtons($("#warm-mode"));
        } else {
            colourSchemeButtons($("#system-mode"));
        }
    } else {
        colourSchemeButtons($("#system-mode"));
    }

    $("[name='changeThemeButton']").click(function () {
        var myID = $(this).attr('id');

        switch (myID) {
            case "light-mode":
                localStorage.setItem("colourScheme", "light-mode");
                assignSchemeClass('light-mode');
                break;
            case "dark-mode":
                localStorage.setItem("colourScheme", "dark-mode");
                assignSchemeClass('dark-mode');
                break;
            case "warm-mode":
                localStorage.setItem("colourScheme", "warm-mode");
                assignSchemeClass('warm-mode');
                break;
            default:
                localStorage.removeItem("colourScheme");
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                    assignSchemeClass('light-mode');
                } else {
                    assignSchemeClass('dark-mode');
                }
                break;
        }
        colourSchemeButtons($(this))
    });

    $("#main_menu").click(function () {
        window.location.href = './index.html';
    });

});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (!localStorage.hasOwnProperty('colourScheme')) {
        const scheme = event.matches ? "dark" : "light";
        if (scheme == "dark") {
            document.getElementById("colour-target").classList.remove("light-mode");
        } else if (scheme == "light") {
            document.getElementById("colour-target").classList.add("light-mode");
        }
    }
});
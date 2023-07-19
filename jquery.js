$(document).ready(function () {

    $(".tab-th-1").click(function () {
        $(this).css("background", "#ffffff")
            .css("color", "#0F2137");
        $(".tab-th-2").css("background", "#020718")
            .css("color", "#ffffff");
    });


    $(".tab-th-2").click(function () {
        $(this).css("background", "#ffffff")
            .css("color", "#0F2137");
        $(".tab-th-1").css("background", "#020718").css("color", "#ffffff");
    });

    $(".three-bars").click(function () {
        $(".nav-button, .menu").fadeToggle()


    })


    $(".progress-iner").click(function () {
        $(".mic-play").toggle()
    })

    $(".progress-iner").click(function () {
        $(".mic-pause").toggle()
    });






});
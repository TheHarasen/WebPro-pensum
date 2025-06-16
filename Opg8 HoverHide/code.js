$(document).ready(function() {
    $(".sneaker").hover(
        function () {
            $(this)
            .stop(true, false)
            .fadeTo(100, 0);
        },
        function () {
            $(this)
            .stop(true, false)
            .fadeTo(500, 1);
        }
    )
});
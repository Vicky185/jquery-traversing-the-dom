$(document).ready(function() {
    $("p").click(function() {
        $(this).children("a").css("background-color", "yellow");
    });

    $("button").click(function() {
        $(this).prev().slideToggle('slow');
    });

    $("img").click(function() {
        $(this).next().children("p").slideDown();
    });

    $(".card").click(function() {
        $(this).toggleClass("highlight");
    });

    $("#select_btn").click(function() {
        $(".card:not(.highlight)").hide();
    });

    // Select all cards
    $("#all_btn").click(function() {
        $(".card").show();
    });
});

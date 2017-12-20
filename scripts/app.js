$(document).ready(function() {
    $('#show-carousel').click(function() {
        $('.center-data').toggleClass("inactive"); //inactive class makes the display:none
    });
    $('#close-carousel').click(function() {
        $('.center-data').toggleClass('inactive');
    });
    $('#my-profile').click(function() {
        // $('.container-fluid').css('filter','blur(5px)');
    });
});
$(window).on("load", function() {

    //Add background image once page loads
    $("body").css("background-image", "url('https://i.imgur.com/dcHO7hg.jpg')");

    //Slide Center Block upward upon loading
    $("#center-block").show("slide", {
        direction: "down"
    }, 500);


});



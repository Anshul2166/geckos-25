$(document).ready(function() {
    $("#show-carousel").click(function() {
        $(".center-data").toggleClass("inactive"); //inactive class makes the display:none
    });
    $("#close-carousel").click(function() {
        $(".center-data").toggleClass("inactive");
    });
    $("#my-profile").click(function() {
        // $('.container-fluid').css('filter','blur(5px)');
    });
});

$(window).on("load", function() {
    //Add background image once page loads
    $("body").css("background-image", "url('https://i.imgur.com/dcHO7hg.jpg')");

    //Slide Center Block upward upon loading
    $("#center-block").show(
        "slide",
        {
            direction: "down"
        },
        500
    );
});

$(".tab a").on("click", function(e) {
    e.preventDefault();

    $(this)
        .parent()
        .addClass("active");
    $(this)
        .parent()
        .siblings()
        .removeClass("active");

    target = $(this).attr("href");

    $(".tab-content > div")
        .not(target)
        .hide();

    $(target).fadeIn(600);
});

var map;
var center = new google.maps.LatLng(59.76522, 18.35002);

//Create Google map

function initialize() {

	var mapOptions = {
		zoom: 14,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: center
	};

	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

	var marker = new google.maps.Marker ({
		map: map,
		position: center
	});

}

google.maps.event.addDomListener(window, "load", initialize);


//Show Google map when modal loads

$("#show-map").click(function() {
   setTimeout(function() {
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    }, 300);
});
	
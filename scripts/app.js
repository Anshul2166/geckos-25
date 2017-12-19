$(document).ready(function(){
	$('#show-carousel').click(function(){
		$('.center-data').toggleClass("inactive");
	});
	$('#close-carousel').click(function(){
		$('.center-data').toggleClass('inactive');
	});
	$('#my-flights').click(function(){
		$('.flight-bar').show();
		// $('.center-data').css("margin-top","-6%");
	});
	$('#close-flight').click(function(){
		$('.flight-bar').hide();
		// $('.center-data').css("margin-top","6%");
	});
});

$(window).on("load", function(){

	//Add background image once page loads
	$("body").css("background-image", "url('https://i.imgur.com/dcHO7hg.jpg')");

	//Slide Center Block upward upon loading
	$("#center-block").show("slide", { direction: "down" }, 500);
	
	
});


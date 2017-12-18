$(window).on("load", function(){

	//Add background image once page loads
	$("body").css("background-image", "url('https://i.imgur.com/dcHO7hg.jpg')");

	//Slide Center Block upward upon loading
    $("#center-block").show("slide", { direction: "down" }, 500);
      
      
});
window.addEventListener("scroll", function(event) {
	var scrollHeight = $(window).scrollTop();
	var alpha = 0.2;
	if (scrollHeight < 50) {
		alpha = 0.2 * (scrollHeight/50);
	}

	console.log(alpha);

    $(".navbar-fade").css("background-color",  "rgba(0,0,0,"+alpha+")");

}, false);


imageURLs=[];
$('.img-container img').each(function(index, element) {
	imageURLs[index] = $(element).attr("src");
});
console.log(imageURLs);

carouselHTML = "";
$.each(imageURLs, function(index, url) {
	itemClass = "carousel-item"
	if (index == 0) {
		itemClass += " active"
	}
	carouselHTML += `
              <div class="`+itemClass+`"><img src="`+url+`" alt="item`+index+`"></div>`
});

$('.carousel-inner').html(carouselHTML);

// Set up carousel javascript
$('.carousel').carousel({
	interval: false, // don't automatically cycle through photos
});

// Set up prev/next buttons
$('.carousel-control-prev').click(function() {
	$('.carousel').carousel('prev');
});
$('.carousel-control-next').click(function() {
	$('.carousel').carousel('next');
});

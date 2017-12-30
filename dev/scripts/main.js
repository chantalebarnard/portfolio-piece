$(function(){
	$('.arrowContainer').click(function(e){
		$('html, body').animate({
			scrollTop: $('#about').offset().top
		}, 
		1500);
	});
	$('.scroll').click(function(e){
		var linkHref = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(linkHref).offset().top
		},
		1500);
		e.preventDefault();
	});
	
	new WOW().init();

	// function myFunction() {
	// 	var x = document.getElementById('nav');
	// 	if (x.className === navBar') {
	// 		x.className += " responsive";
	// 	} else {
	// 		x.className = 'navBar';
	// 	}
	// }
});


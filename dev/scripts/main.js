$(function(){

	console.log("asadasdasd");
	$('.arrowContainer').click(function(e){
		$('html, body').animate({
			scrollTop: $('#nav').offset().top
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
});


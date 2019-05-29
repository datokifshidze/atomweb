function over(current) {
	$(document).ready(function() {
		$(current).find('.hover-img').css('display', 'block');
		$(current).find('.blue-back').css('display', 'block');
		$(current).find('.text').css('display', 'block');
	})
}

function out(current) {
	$(document).ready(function() {
		$(current).find('.hover-img').css('display', 'none');
		$(current).find('.blue-back').css('display', 'none');
		$(current).find('.text').css('display', 'none');
	})
}

$(document).ready(function(){
	$('#burger-icon').bind('click', function(){
		$(this).toggleClass('open');
		$('.responsive-menu').slideToggle();
		return false;	
	});
	var menuItem = $('.responsive-menu').find('a');
	menuItem.on('click', function() {
		$('.responsive-menu').slideUp();
		$('#burger-icon').removeClass('open');
	})
});
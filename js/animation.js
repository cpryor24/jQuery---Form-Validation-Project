$(function() {
	$('li.fields').filter(':nth-child(n+4)').addClass('hide');

	$('ul').on('click', '.title', function () {
		$(this).next().slideDown(200).siblings('li.fields').slideUp(200);
	})
});
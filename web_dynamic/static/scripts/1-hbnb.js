// Script that is executed only when DOM is loaded
// Uses JQuery

const checkedBox = {};
$(document).ready(function () {
    $('input:checkbox').change(function () {
	if ($(this).is(':checkedBox')) {
	    checkedBox[$(this).data('id')] = $(this).data('name');
	}
	else {
	    delete checkedBox[$(this).data('id')];
	}
	$('div.amenities h4').html(function () {
	    let amenities = [];
	    Object.keys(checkedBox).forEach(function (key) {
		amenities.push(checkedBox[key]);
	    });
	    if (amenities.length === 0) {
		return ('&nbsp');
	    }
	    return (amenities.join(', '));
	});
    });
});
$(function() {
	var flip = function(element) {
		var color = $(element).css('backgroundColor');
		var opacity = $(element).css('opacity');
		if (opacity === '0') {
			$(element).animate({ 'opacity': 1 });
		} else {
			$(element).animate({ 'opacity': 0 });
		}
	};
		
	var drawing = false;

	$(document).on('mouseenter', 'div.pixel', function(ev) {
		if (drawing) {
			flip(ev.target);
		}
	});

	$(document).on('mousedown', 'div.pixels', function(ev) {
		drawing = true;
		if ($(ev.target).hasClass('pixel')) {
			flip(ev.target);
		}
		ev.preventDefault();
	});

	$(document).on('mouseup', function(ev) {
		drawing = false;
	});

	var populate = function() {
		var y;
		var width = 64;
		var height = width;
		for (y = 0; y < height; y++) {
			var row = $("<div class='row'></div>");
			for (x = 0; x < width; x++) {
				row.append($("<div class='pixel' draggable='false'></div>"));
			}
			$("div.pixels").append(row);
		}
	};

	populate();
});

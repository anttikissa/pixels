$(function() {

	var flip = function(element) {
		var color = $(element).css('backgroundColor');
		if (color === 'rgb(0, 0, 0)') {
			$(element).css('backgroundColor', 'white');
		} else {
			$(element).css('backgroundColor', 'black');
		}
		console.log(element);
		console.log(color);
	};
		
	var drawing = false;

	$(document).on('mouseenter', 'div.pixel', function(ev) {
		if (drawing) {
			flip(ev.target);
		}
	});

	$(document).on('mousedown', 'div.pixel', function(ev) {
		console.log("mousedown");
		drawing = true;
		flip(ev.target);
	});
	$(document).on('mouseup', function(ev) {
		console.log("mouseup");
		drawing = false;
	});

	var populate = function() {
		var y;
		var width = 10;
		var height = width;
		for (y = 0; y < height; y++) {
			var row = $("<div class='row'></div>");
			for (x = 0; x < width; x++) {
				row.append($("<div class='pixel'></div>"));
			}
			$("div.pixels").append(row);
		}
	};

	populate();
});

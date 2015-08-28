jQuery(document).ready(function($) {
	adaptHeight();
});

$(window).resize(function() {
	adaptHeight();
});

function adaptHeight() {
	$("#main_content").each(function(event) {
		var titleHeight = 0 ;
		var textHeight  = 0 ;
		var totalHeight  = 0 ;
		$(".project").each(function(event) {
			if( $(this).find("h3").height() > titleHeight ) titleHeight = $(this).find("h3").height();
			if( $(this).find("p").height() > textHeight ) textHeight = $(this).find("p").height();
		});
		$(".project h3").height(titleHeight);
		$(".project p").height(textHeight);
		totalHeight = $(".project").first().height();
		$(".project:not(:eq(0))").height(totalHeight+1);
	});
}
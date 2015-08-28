jQuery(document).ready(function($) {
	adaptHeight();

	console.log("SRF Data here, welcome to the console.");
});

	$(window).on('resize', function(){
		adaptHeight();
	});

function adaptHeight() {
	$("#main_content .project").height('auto');
	$("#main_content .project h3").height('auto');
	$("#main_content .project p").height('auto');
	var titleHeight = 0 ;
	var textHeight  = 0 ;
	var totalHeight = 0 ;
	$("#main_content .project").each(function(event) {
		if( $(this).find("h3").height() > titleHeight ) titleHeight = $(this).find("h3").height();
		if( $(this).find("p").height() > textHeight ) textHeight = $(this).find("p").height();
	});

	$("#main_content .project h3").height(titleHeight);
	$("#main_content .project p").height(textHeight);
	totalHeight = $("#main_content .project").first().height();
	$("#main_content .project:not(:eq(0))").height(totalHeight+1);
}
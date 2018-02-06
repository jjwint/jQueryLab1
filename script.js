$(document).ready(function(){

	var table;

	$(".tables").click(function() {
		table = $(this)
	});

	$(".tables").click(function() {
		if (table.hasClass("available")) {
			$("#hiddenForm").removeClass("hidden");
		}
	});

	$(".tables").click(function() {
		var digit = $(this).text();
		$("#tableDigit").text(digit);
	});

	$("#saveButton").click(function() {
		$(table).addClass("reserved");
		$(table).removeClass("available");
		$("#hiddenForm").addClass("hidden");
	});

	$("#quitButton").click(function() {
		$("#hiddenForm").addClass("hidden");
	});
	
});
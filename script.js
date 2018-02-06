$(document).ready(function(){

	$(".tables").click(function() {
		$(this).addClass("reserved");
		$(this).removeClass("available");
	});

	$(".tables").click(function() {
		$("#hiddenForm").removeClass("hidden");
	});

	$(".tables").click(function() {
		var digit = $(this).text();
		$("#tableDigit").text(digit);
	});

	$("#saveButton").click(function() {
		$("#hiddenForm").addClass("hidden");
	});

	$("#quitButton").click(function() {
		$("#hiddenForm").addClass("hidden");
	});
	
});
$(document).ready(function(){

	$(".circles").click(function() {
		$(this).addClass("reserved");
		$(this).removeClass("available");
	});

	$(".circles").click(function() {
		$("#hiddenForm").removeClass("hidden");
	});

	$(".circles").click(function() {
		var digit = $(this).text();
		$("#tableDigit").text(digit);
	})
	
});
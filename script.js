$(document).ready(function(){

	var table;

	$(".tables").click(function() {
		table = $(this);
	});

	$(".tables").hover(function() {
		tableHover = $(this);
	})

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
		$(table).addClass("notAllowed");
		$("#hiddenForm").addClass("hidden");
	});

	$("#quitButton").click(function() {
		$("#hiddenForm").addClass("hidden");
	});

	$(".tables").hover(function() {
		if (tableHover.hasClass("available")) {
			$(tableHover).css("border", "2px dashed #E34E45");
		}
	}, function() {
		$(tableHover).css("border", "none");
	});

	$(".tables").hover(function() {
		if (tableHover.hasClass("available")) {
			$(tableHover).css("cursor", "crosshair");
		}
	}, function() {
		$(tableHover).css("cursor", "");
	});
	
});
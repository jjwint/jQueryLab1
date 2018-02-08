$(document).ready(function(){

	var table;
	var nameInput = document.getElementById("name");
	var userName = nameInput.value;

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
		// $(table).append(userName);
		// console.log(userName);
	});

	$("#quitButton").click(function() {
		$("#hiddenForm").addClass("hidden");
	});

	$(".tables").hover(function() {
		if (tableHover.hasClass("available")) {
			$(tableHover).css("background-color", "#E34E45");
		}
	}, function() {
		$(tableHover).css("background-color", "");
	});

	$(".tables").hover(function() {
		if (tableHover.hasClass("available")) {
			$(tableHover).css("cursor", "crosshair");
		}
	}, function() {
		$(tableHover).css("cursor", "");
	});
	
});










//TODO:
	//change button to "submit" - add prevent default function
	//step 1 of lab2 - get form inputs onto hover
	//












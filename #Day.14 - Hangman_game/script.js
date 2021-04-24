var animals = ["yak", "jaguar", "Elephant", "Tiger", "Wolf"];
var countries = ["China", "Canada", "India", "Zimbabwe", "Liechtenstien"];
var sports = ["golf", "boxing", "surfing", "badminton", "wrestling"];


var categories = [animals, countries, sports];


var char;
var charIndex;
var canvas;
var context;
var hangOrder;
var show;
var triesLeft;
var word;
var random;
var id;
var category;
var newWord;
var gameEnded;


function regexEscape(char) {
	return char.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').toLowerCase();
}

function replace(c, a) {
	var regex = new RegExp("[^ " + a + "]", 'ig');
	return c.replace(regex, "_");
}

$(".category").click(function() {
	show = "aeiou";
	triesLeft = 5;
	gameEnded = false;

	
	$("#keyboard").html('<div><span id="a" class="vowel">a</span><span id="b">b</span><span id="c">c</span><span id="d">d</span><span id="e" class="vowel">e</span><span id="f">f</span><span id="g">g</span><span id="h">h</span><span id="i" class="vowel">i</span><span id="j">j</span><span id="k">k</span><span id="l">l</span><span id="m">m</span></div><div><span id="n">n</span><span id="o" class="vowel">o</span><span id="p">p</span><span id="q">q</span><span id="r">r</span><span id="s">s</span><span id="t">t</span><span id="u" class="vowel">u</span><span id="v">v</span><span id="w">w</span><span id="x">x</span><span id="y">y</span><span id="z">z</span></div>');

	
	id = $(this).attr("id");
	random = Math.floor(Math.random() * 5);
	word = categories[id][random];
	category = $(this).html();


	$("#infoSign").fadeIn();
	$("#initialInfo").fadeOut('fast');
	$("#game").fadeIn();
	$("#triesLeft").html("Tries Left: " + (triesLeft));
	$("#difficulty").html("Word Dificulty: " + (random + 1) + "/5");
	$("title").html(category + " - Hangman");
	$("#category").html("<strong>Category:</strong> " + category);
	$("#word").html(replace(word, show));
	makeHangman(0);

	
	$(".static").removeClass("static");
	$("body").off('keypress').on('keypress', function(event) {
		if (!gameEnded) {
			var keyCode = (event.which) ? event.which : event.keyCode;
			if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32) {
				$("#status").html('<div class="alert alert-warning"><strong>Warning: </strong>There aren\'t any numbers, puncuation characters, or special characters in the word, only letters.</div>');
			} else {
				playHangman(regexEscape(String.fromCharCode(event.which)));
			}
		}

	});

	$("#keyboard span").click(function() {
		if (!gameEnded) {
			playHangman($(this).html());
		}
	});
});

function playHangman(char) {
	$("#status").html("");
	$("#" + char).css("background-color", "#23527c").css("color", "#EEE");
	newWord = replace(word, show + char);

	if (newWord === word) {
		$("#status").html('<div class="alert alert-success"><strong>You Won!</strong><span class="pull-right">Select a category to play again.</span></div>');
		$("#keyboard span").css("background-color", "green");
		gameEnded = true;
	} else if (newWord == $("#word").html()) {
		if (show.indexOf(char) > -1) {
			if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
				$("#status").html('<div class="alert alert-warning center"><strong>Warning: </strong>The vowels of the word are already given to you.</span>');
			} else {
				$("#status").html('<div class="alert alert-warning center"><strong>Warning: </strong>You have already guessed that letter.</span>');
			}
		} else {
			--triesLeft;
			makeHangman(triesLeft);
			if (triesLeft === 0) {
				$("#status").html('<div class="alert alert-danger center"><strong>Game Over!</strong></div>');
				$("#triesLeft").html("");
				newWord = newWord.split('');
				for (var i = 0; i <= newWord.length - 1; ++i) {
					if (newWord[i] === "_") {
						newWord[i] = '<span class="red">' + word[i] + '</span>';
					}
				}
				gameEnded = true;
				makeHangman(5);
				$("#keyboard span").css("background-color", "red");
			} else {
				$("#status").html('<div class="alert alert-danger center"><strong>Try Again</strong></div>');
				makeHangman(Math.abs(5 - triesLeft));
			}
		}
	} else {
		$("#status").html('<div class="alert alert-success center"><strong>Nice!</strong></div>');
	}
	show = show + char;
	$("#word").html(newWord);
	$("#triesLeft").html("Tries Left: " + triesLeft);
}


function drawBottomGallow() {
	context.beginPath();
	context.moveTo(250, 300);
	context.lineTo(0, 300);
	context.lineTo(70, 300);
	context.stroke();
};

function drawTopGallow() {
	context.beginPath();
	context.lineTo(70, 300);
	context.lineTo(70, 10);
	context.lineTo(200, 10);
	context.lineTo(200, 50);
	context.stroke();
};

function drawHead() {
	context.beginPath();
	context.arc(200, 80, 30, 0, Math.PI * 2, true);
	context.closePath();
	context.lineWidth = 4;
	context.stroke();
};

function drawBody() {
	context.beginPath();
	context.moveTo(200, 110);
	context.lineTo(200, 225);
	context.stroke();
};

function drawHands() {
	context.beginPath();
	context.moveTo(200, 125);
	context.lineTo(150, 175);
	context.stroke();

	context.beginPath();
	context.moveTo(200, 125);
	context.lineTo(250, 175);
	context.stroke();
};

function drawFeet() {
	context.beginPath();
	context.moveTo(200, 225);
	context.lineTo(150, 275);
	context.stroke();

	context.beginPath();
	context.moveTo(200, 225);
	context.lineTo(250, 275);
	context.stroke();
};

function makeHangman(a) {
	hangOrder = [drawBottomGallow, drawTopGallow, drawHead, drawBody, drawHands, drawFeet];
	canvas = $('#hangman')[0];
	context = canvas.getContext("2d");
	canvas.width = canvas.width;
	context.strokeStyle = '#000000';
	context.lineWidth = 8;

	for (var i = 0; i <= a; ++i) {
		hangOrder[i]();
	}
};

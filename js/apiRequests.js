/*===============================================
apirequests.JS
===============================================*/
"use strict";


/*==============================================
CERCH
===============================================*/
var movie0 = document.getElementById("movie0");
var movieWrap0 = document.getElementById("movieWrap0");
var errorMessage = document.getElementById("errorMessage");
var errorMessage2 = document.getElementById("errorMessage2");


var movieCerchForm = document.getElementsByClassName("movieCerchForm")[0];
var movieCerch = document.getElementById("movieCerch");
var movieCerchSubmit = document.getElementById("movieCerchSubmit");
var newCerch = document.getElementById("newCerch");

movieCerch.value = "";
newCerch.style.display = "none";


var items = [];
var poster = [];	


$( document ).ajaxError(function() {
  errorMessage2.style.display = "block";
});

movieCerchSubmit.onclick = function() {
	
	var cerchVal = movieCerch.value.toLowerCase();
	var result = cerchVal.split(" ").join("+");
	
	if (movieCerch.value == "" || movieCerch.value == null) {
		errorMessage.style.display = "block";
		newCerch.style.display = "block";
		movieCerchSubmit.style.display = "none";
	} else {

		newCerch.style.display = "block";
		movieCerchSubmit.style.display = "none";
		
		$.getJSON( "http://www.omdbapi.com/?t=" + result + "&y=&plot=full&r=json", function( data ) {
		
			$.each( data, function( key, val ) {
				if (key === "Title") {
					items.push( "<li id='" + key + "'><span class='movieTitle'>" + val + "</span></li>" );
				} else if (key === "Poster") {
					poster.push( val );
					items.unshift( "<li id='" + key + "'><img src='" + val + "'></img></li>" );
				} else {
					items.push( "<li id='" + key + "'>" + "<span>" + key + "</span>" + ": " + val + "</li>" );
				}
			});
			
			if (items.length < 3) {
				errorMessage3.style.display = "block";
			}
			
			for (var i = 0; i < items.length - 6; i++) {
				$("#movie0").append(items[i]);
				movieWrap0.style.background = "url('" + poster[0] + "')";
			}
		});
	}
	
	return false;
};

newCerch.onclick = function(e) {
	
	e.preventDefault();
	movieCerch.value = "";
	
	errorMessage.style.display = "none";
	errorMessage2.style.display = "none";
	errorMessage3.style.display = "none";
	
	newCerch.style.display = "none";
	movieCerchSubmit.style.display = "block";
	
	items.length = 0;
	poster.length = 0;
	
	$("#movie0").empty();
	movieWrap0.style.background = "none";

};

movieCerch.oninput = function() {
	
	errorMessage.style.display = "none";
	errorMessage2.style.display = "none";
	errorMessage3.style.display = "none";
	
	newCerch.style.display = "none";
	movieCerchSubmit.style.display = "block";
	
	items.length = 0;
	poster.length = 0;
	
	$("#movie0").empty();
	movieWrap0.style.background = "none";
};

//* ========================================= *//



/*===============================================
AS GOOD AS IT GETS
===============================================*/
var movieWrap1 = document.getElementById("movieWrap1");

$.getJSON( "http://www.omdbapi.com/?t=as+good+as+it+gets&y=&plot=full&r=json", function( data ) {
	var items = [];
	var poster = [];
	
	$.each( data, function( key, val ) {
		if (key === "Title") {
			items.push( "<li id='" + key + "'><span class='movieTitle'>" + val + "</span></li>" );
		} else if (key === "Poster") {
			poster.push( val );
			items.unshift( "<li id='" + key + "'><img src='" + val + "'></img></li>" );
		} else {
			items.push( "<li id='" + key + "'>" + "<span>" + key + "</span>" + ": " + val + "</li>" );
		}
	});
	
	for (var i = 0; i < items.length - 6; i++) {
		$("#movie1").append(items[i]);
		movieWrap1.style.background = "url('" + poster[0] + "')";
	}
});
//* ========================================= *//




/*===============================================
THE BIG LEBOWSKI
================================================*/
var movieWrap2 = document.getElementById("movieWrap2");

$.getJSON( "http://www.omdbapi.com/?t=the+big+lebowski&y=&plot=full&r=json", function( data ) {
	var items = [];
	var poster = [];
	
	$.each( data, function( key, val ) {
		if (key === "Title") {
			items.push( "<li id='" + key + "'><span class='movieTitle'>" + val + "</span></li>" );
		} else if (key === "Poster") {
			poster.push( val );
			items.unshift( "<li id='" + key + "'><img src='" + val + "'></img></li>" );
		} else {
			items.push( "<li id='" + key + "'>" + "<span>" + key + "</span>" + ": " + val + "</li>" );
		}
	});
	
	for (var i = 0; i < items.length - 6; i++) {
		$("#movie2").append(items[i]);
		movieWrap2.style.background = "url('" + poster[0] + "')";
	}
});

//* ========================================= *//



/*==============================================
WONDER BOYS
===============================================*/
var movieWrap3 = document.getElementById("movieWrap3");

$.getJSON( "http://www.omdbapi.com/?t=wonder+boys&y=&plot=full&r=json", function( data ) {
	var items = [];
	var poster = [];
	
	$.each( data, function( key, val ) {
		if (key === "Title") {
			items.push( "<li id='" + key + "'><span class='movieTitle'>" + val + "</span></li>" );
		} else if (key === "Poster") {
			poster.push( val );
			items.unshift( "<li id='" + key + "'><img src='" + val + "'></img></li>" );
		} else {
			items.push( "<li id='" + key + "'>" + "<span>" + key + "</span>" + ": " + val + "</li>" );
		}
	});
	
	for (var i = 0; i < items.length - 6; i++) {
		$("#movie3").append(items[i]);
		movieWrap3.style.background = "url('" + poster[0] + "')";
	}
});
//* ========================================= *//



/*==============================================
JOE VERSUS THE VOLCANO
===============================================*/
var movieWrap4 = document.getElementById("movieWrap4");

$.getJSON( "http://www.omdbapi.com/?t=joe+versus+the+volcano&y=&plot=full&r=json", function( data ) {
	var items = [];
	var poster = [];
	
	$.each( data, function( key, val ) {
		if (key === "Title") {
			items.push( "<li id='" + key + "'><span class='movieTitle'>" + val + "</span></li>" );
		} else if (key === "Poster") {
			poster.push( val );
			items.unshift( "<li id='" + key + "'><img src='" + val + "'></img></li>" );
		} else {
			items.push( "<li id='" + key + "'>" + "<span>" + key + "</span>" + ": " + val + "</li>" );
		}
	});
	
	for (var i = 0; i < items.length - 6; i++) {
		$("#movie4").append(items[i]);
		movieWrap4.style.background = "url('" + poster[0] + "')";
	}
});
//* ========================================= *//



/*==============================================
THE BIG YEAR
===============================================*/
var movieWrap5 = document.getElementById("movieWrap5");

$.getJSON( "http://www.omdbapi.com/?t=the+big+year&y=&plot=full&r=json", function( data ) {
	var items = [];
	var poster = [];
	
	$.each( data, function( key, val ) {
		if (key === "Title") {
			items.push( "<li id='" + key + "'><span class='movieTitle'>" + val + "</span></li>" );
		} else if (key === "Poster") {
			poster.push( val );
			items.unshift( "<li id='" + key + "'><img src='" + val + "'></img></li>" );
		} else {
			items.push( "<li id='" + key + "'>" + "<span>" + key + "</span>" + ": " + val + "</li>" );
		}
	});
	
	for (var i = 0; i < items.length - 6; i++) {
		$("#movie5").append(items[i]);
		movieWrap5.style.background = "url('" + poster[0] + "')";
	}
});
//* ========================================= *//



/*==============================================
UNCORKED
===============================================*/
var movieWrap6 = document.getElementById("movieWrap6");

$.getJSON( "http://www.omdbapi.com/?t=at+sachem+farm&y=&plot=full&r=json", function( data ) {
	var items = [];
	var poster = [];
	
	$.each( data, function( key, val ) {
		if (key === "Title") {
			items.push( "<li id='" + key + "'><span class='movieTitle'>" + val + "</span></li>" );
		} else if (key === "Poster") {
			poster.push( val );
			items.unshift( "<li id='" + key + "'><img src='" + val + "'></img></li>" );
		} else {
			items.push( "<li id='" + key + "'>" + "<span>" + key + "</span>" + ": " + val + "</li>" );
		}
	});
	
	for (var i = 0; i < items.length - 6; i++) {
		$("#movie6").append(items[i]);
		movieWrap6.style.background = "url('" + poster[0] + "')";
	}
});
//* ========================================= *//



/*==============================================
FEAR AND LOATHING
===============================================*/
var movieWrap7 = document.getElementById("movieWrap7");

$.getJSON( "http://www.omdbapi.com/?t=fear+and+loathing+in+las+vegas&y=&plot=full&r=json", function( data ) {
	var items = [];
	var poster = [];
	
	$.each( data, function( key, val ) {
		if (key === "Title") {
			items.push( "<li id='" + key + "'><span class='movieTitle'>" + val + "</span></li>" );
		} else if (key === "Poster") {
			poster.push( val );
			items.unshift( "<li id='" + key + "'><img src='" + val + "'></img></li>" );
		} else {
			items.push( "<li id='" + key + "'>" + "<span>" + key + "</span>" + ": " + val + "</li>" );
		}
	});
	
	for (var i = 0; i < items.length - 6; i++) {
		$("#movie7").append(items[i]);
		movieWrap7.style.background = "url('" + poster[0] + "')";
	}
});
//* ========================================= *//



/*==============================================
THE ROYAL TENENBAUMS
===============================================*/
var movieWrap8 = document.getElementById("movieWrap8");

$.getJSON( "http://www.omdbapi.com/?t=the+royal+tenenbaums&y=&plot=full&r=json", function( data ) {
	var items = [];
	var poster = [];
	
	$.each( data, function( key, val ) {
		if (key === "Title") {
			items.push( "<li id='" + key + "'><span class='movieTitle'>" + val + "</span></li>" );
		} else if (key === "Poster") {
			poster.push( val );
			items.unshift( "<li id='" + key + "'><img src='" + val + "'></img></li>" );
		} else {
			items.push( "<li id='" + key + "'>" + "<span>" + key + "</span>" + ": " + val + "</li>" );
		}
	});
	
	for (var i = 0; i < items.length - 6; i++) {
		$("#movie8").append(items[i]);
		movieWrap8.style.background = "url('" + poster[0] + "')";
	}
});
//* ========================================= *//



/*==============================================
THE DOORS
===============================================*/
var movieWrap9 = document.getElementById("movieWrap9");

$.getJSON( "http://www.omdbapi.com/?t=the+doors&y=&plot=full&r=json", function( data ) {
	var items = [];
	var poster = [];
	
	$.each( data, function( key, val ) {
		if (key === "Title") {
			items.push( "<li id='" + key + "'><span class='movieTitle'>" + val + "</span></li>" );
		} else if (key === "Poster") {
			poster.push( val );
			items.unshift( "<li id='" + key + "'><img src='" + val + "'></img></li>" );
		} else {
			items.push( "<li id='" + key + "'>" + "<span>" + key + "</span>" + ": " + val + "</li>" );
		}
	});
	
	for (var i = 0; i < items.length - 6; i++) {
		$("#movie9").append(items[i]);
		movieWrap9.style.background = "url('" + poster[0] + "')";
	}
});
//* ========================================= *//



/*==============================================
THE SHAWSHANK REDEMPTION
===============================================*/
var movieWrap10 = document.getElementById("movieWrap10");

$.getJSON( "http://www.omdbapi.com/?t=the+shawshank+redemption&y=&plot=full&r=json", function( data ) {
	var items = [];
	var poster = [];
	
	$.each( data, function( key, val ) {
		if (key === "Title") {
			items.push( "<li id='" + key + "'><span class='movieTitle'>" + val + "</span></li>" );
		} else if (key === "Poster") {
			poster.push( val );
			items.unshift( "<li id='" + key + "'><img src='" + val + "'></img></li>" );
		} else {
			items.push( "<li id='" + key + "'>" + "<span>" + key + "</span>" + ": " + val + "</li>" );
		}
	});
	
	for (var i = 0; i < items.length - 6; i++) {
		$("#movie10").append(items[i]);
		movieWrap10.style.background = "url('" + poster[0] + "')";
	}
});
//* ========================================= *//



/*==============================================
INGLORIOUS BASTARDS
===============================================*/
var movieWrap11 = document.getElementById("movieWrap11");

$.getJSON( "http://www.omdbapi.com/?t=inglourious+basterds&y=&plot=full&r=json", function( data ) {
	var items = [];
	var poster = [];
	
	$.each( data, function( key, val ) {
		if (key === "Title") {
			items.push( "<li id='" + key + "'><span class='movieTitle'>" + val + "</span></li>" );
		} else if (key === "Poster") {
			poster.push( val );
			items.unshift( "<li id='" + key + "'><img src='" + val + "'></img></li>" );
		} else {
			items.push( "<li id='" + key + "'>" + "<span>" + key + "</span>" + ": " + val + "</li>" );
		}
	});
	
	for (var i = 0; i < items.length - 6; i++) {
		$("#movie11").append(items[i]);
		movieWrap11.style.background = "url('" + poster[0] + "')";
	}
});
//* ========================================= *//



/*==============================================
CATCH ME IF YOU CAN
===============================================*/
var movieWrap12 = document.getElementById("movieWrap12");

$.getJSON( "http://www.omdbapi.com/?t=catch+me+if+you+can&y=&plot=full&r=json", function( data ) {
	var items = [];
	var poster = [];
	
	$.each( data, function( key, val ) {
		if (key === "Title") {
			items.push( "<li id='" + key + "'><span class='movieTitle'>" + val + "</span></li>" );
		} else if (key === "Poster") {
			poster.push( val );
			items.unshift( "<li id='" + key + "'><img src='" + val + "'></img></li>" );
		} else {
			items.push( "<li id='" + key + "'>" + "<span>" + key + "</span>" + ": " + val + "</li>" );
		}
	});
	
	for (var i = 0; i < items.length - 6; i++) {
		$("#movie12").append(items[i]);
		movieWrap12.style.background = "url('" + poster[0] + "')";
	}
});
//* ========================================= *//



/*==============================================
ANONYMOUS
===============================================*/
var movieWrap13 = document.getElementById("movieWrap13");

$.getJSON( "http://www.omdbapi.com/?t=anonymous&y=&plot=full&r=json", function( data ) {
	var items = [];
	var poster = [];
	
	$.each( data, function( key, val ) {
		if (key === "Title") {
			items.push( "<li id='" + key + "'><span class='movieTitle'>" + val + "</span></li>" );
		} else if (key === "Poster") {
			poster.push( val );
			items.unshift( "<li id='" + key + "'><img src='" + val + "'></img></li>" );
		} else {
			items.push( "<li id='" + key + "'>" + "<span>" + key + "</span>" + ": " + val + "</li>" );
		}
	});
	
	for (var i = 0; i < items.length - 6; i++) {
		$("#movie13").append(items[i]);
		movieWrap13.style.background = "url('" + poster[0] + "')";
	}
});
//* ========================================= *//



/*==============================================
BIRDS OF AMERICA
===============================================*/
var movieWrap14 = document.getElementById("movieWrap14");

$.getJSON( "http://www.omdbapi.com/?t=birds+of+america&y=&plot=full&r=json", function( data ) {
	var items = [];
	var poster = [];
	
	$.each( data, function( key, val ) {
		if (key === "Title") {
			items.push( "<li id='" + key + "'><span class='movieTitle'>" + val + "</span></li>" );
		} else if (key === "Poster") {
			poster.push( val );
			items.unshift( "<li id='" + key + "'><img src='" + val + "'></img></li>" );
		} else {
			items.push( "<li id='" + key + "'>" + "<span>" + key + "</span>" + ": " + val + "</li>" );
		}
	});
	
	for (var i = 0; i < items.length - 6; i++) {
		$("#movie14").append(items[i]);
		movieWrap14.style.background = "url('" + poster[0] + "')";
	}
});
//* ========================================= *//



/*==============================================
THE PROFESSIONAL
===============================================*/
var movieWrap15 = document.getElementById("movieWrap15");

$.getJSON( "http://www.omdbapi.com/?t=leon+the+professional&y=&plot=full&r=json", function( data ) {
	var items = [];
	var poster = [];
	
	$.each( data, function( key, val ) {
		if (key === "Title") {
			items.push( "<li id='" + key + "'><span class='movieTitle'>" + val + "</span></li>" );
		} else if (key === "Poster") {
			poster.push( val );
			items.unshift( "<li id='" + key + "'><img src='" + val + "'></img></li>" );
		} else {
			items.push( "<li id='" + key + "'>" + "<span>" + key + "</span>" + ": " + val + "</li>" );
		}
	});
	
	for (var i = 0; i < items.length - 6; i++) {
		$("#movie15").append(items[i]);
		movieWrap15.style.background = "url('" + poster[0] + "')";
	}
});
//* ========================================= *//



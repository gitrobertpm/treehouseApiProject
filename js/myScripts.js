/*===============================================
SCRIPTS.JS

PROGRAMMING FOR SEARCH FORM IN APIREQUESTS.JS
===============================================*/
"use strict";

var myWebApiProjectScripts = function() {
	var width = window.innerWidth;
	var height = window.innerHeight;

	var modalWrap = document.getElementById("modalWrap");
	var modal = document.getElementById("modal");
	var closeModal = document.getElementById("closeModal");
	var movieWrap = document.getElementsByClassName("movieWrap");
	var movieInfo = document.getElementsByClassName("movieInfo");
	var movieCerchForm = document.getElementsByClassName("movieCerchForm")[0];

	var movieInfoCounter;

	/*==============================================
	OPEN MODAL
	===============================================*/

	var openThatModal = function () {
		
		for (var i = 0; i < movieWrap.length; i++) {
			
			movieWrap[i].marker = i;
			
			movieWrap[i].onclick = function() {
					
				modalWrap.style.display = "block";
				modalWrap.classList.toggle("closeModal", false);
				modalWrap.classList.toggle("openModal", true);
			
				// MAKE LIGHTBOX OPEN IN WINDOW INSTEAD OF TOP OF DOCUMENT IN CASE OF USER SCROLL - ACOUNTS FOR CORSS-BROWSER 
				if (navigator.userAgent.indexOf("Firefox") > 0) {
					modal.style.top = document.documentElement.scrollTop + "px";
				} else if (navigator.userAgent.indexOf("AppleWebKit") > 0 || navigator.userAgent.indexOf("Trident") > 0) {
					modal.style.top = window.pageYOffset + "px";
				}

				if (this.marker === 0) {

					movieCerchForm.style.display = "block";
					
					movieInfo[0].style.display = "block";
					movieInfoCounter = 0;
				
				} else {
					movieInfo[this.marker].style.display = "block";
					movieInfoCounter = this.marker;
					
				}
			}
		}
	};

	openThatModal();
	//* ========================================= *//


	/*==============================================
	CLOSE MODAL
	===============================================*/

	var closeThatModal = function() {
		
		closeModal.onclick = function() {	
				
			for (var i = 0; i < movieInfo.length; i++) {
				movieInfo[i].style.display = "none";
			}
			
			modalWrap.classList.toggle("openModal", false);
			modalWrap.classList.toggle("closeModal", true);
			
			setTimeout(function(){ modalWrap.style.display = "none"; },750);
			
			movieCerchForm.reset();	
			movieCerchForm.style.display = "none";
		
			newCerch.style.display = "none";
			movieCerchSubmit.style.display = "block";
			
			modalNavWrap.classList.toggle("arrowFixed", false);
			
			items.length = 0;
			poster.length = 0;
			
			$("#movie0").empty();
			movieWrap0.style.background = "none";
		};
	};

	closeThatModal();
	//* ========================================= *//



	/*==============================================
	ARROWS
	===============================================*/
	var arrowsAreGreat = function() {

		var arrowWrapLeft = document.getElementById("arrowWrapLeft");
		var arrowWrapRight = document.getElementById("arrowWrapRight");

		arrowWrapLeft.onclick = function() {
			if (movieInfoCounter === 0) {
				movieInfo[0].style.display = "none";
				movieInfo[movieInfo.length-1].style.display = "block";
				movieCerchForm.style.display = "none";
				movieInfoCounter = movieInfo.length-1;
			} else {
				if (movieInfoCounter === 1) {
					movieCerchForm.style.display = "block";
				}
				movieInfo[movieInfoCounter].style.display = "none";
				movieInfo[movieInfoCounter - 1].style.display = "block";
				movieInfoCounter -= 1;
			}
		};

		arrowWrapRight.onclick = function() {
			if (movieInfoCounter === movieInfo.length-1) {
				movieInfo[movieInfo.length-1].style.display = "none";
				movieInfo[0].style.display = "block";
				movieCerchForm.style.display = "block";
				movieInfoCounter = 0;
			} else {
				if (movieInfoCounter === 0) {
					movieCerchForm.style.display = "none";
				}
				movieInfo[movieInfoCounter].style.display = "none";
				movieInfo[movieInfoCounter + 1].style.display = "block";
				movieInfoCounter += 1;
			}
		};
	};

	arrowsAreGreat();
	//* ========================================= *//



	/*===============================================
	STICKY NAV
	===============================================*/
	var stickyNav = function() {
		
		var arrowWrap = document.getElementsByClassName("arrowWrap");
		var modalNavWrap = document.getElementById("modalNavWrap");
			
		// VARIABLES TO GET SCROLL DISTANCE FOR ALL BROWSERS
		var distance = document.getElementsByTagName("html")[0].scrollTop;
		var distance2 = document.body.scrollTop;
		
		// MAKE RESPONSIVE NAV STICK ON SCROLL
		if (distance > 45 || distance2 > 45) {
			modalNavWrap.classList.toggle("arrowFixed", true);
		}
	};

	window.onscroll = function() {stickyNav()};
	//* ========================================= *//



	/*==============================================
	REMOVE SCRIM ON HOVER
	===============================================*/
	var scrimScram = function() {

		var scrim = document.getElementsByClassName("scrim");

		for (var i = 0; i < scrim.length; i++) {
			
			scrim[i].marker = i;
			
			scrim[i].onmouseover = function() {
				scrim[this.marker].style.background = "none";
			}
			
			scrim[i].onmouseout = function() {
				if (this.marker % 2 === 0) {
					scrim[this.marker].style.background = "webkit-linear-gradient(top left, rgba(50,50,245,0.5), transparent 60%)";
					scrim[this.marker].style.background = "linear-gradient(to bottom right, rgba(50,50,245,0.5), transparent 60%)";
				} else if (this.marker % 3 === 0) {
					scrim[this.marker].style.background = "-webkit-linear-gradient(top left, rgba(50,245,50,0.5), transparent 60%)";
					scrim[this.marker].style.background = "linear-gradient(to bottom right, rgba(50,245,50,0.5), transparent 60%)";
				} else {
					scrim[this.marker].style.background = "-webkit-linear-gradient(top left, rgba(245,50,50,0.5), transparent 60%)";
					scrim[this.marker].style.background = "linear-gradient(to bottom right, rgba(245,50,50,0.5), transparent 60%)";
				}
			};
		}
	};

	scrimScram();
	//* ========================================= *//
	
	
	
	/*==============================================
	CERCH
	===============================================*/
	var width = window.innerWidth;
	var height = window.innerHeight;

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

	// HANDLE AJAX ERROR
	$( document ).ajaxError(function() {
	  errorMessage2.style.display = "block";
	});

	// MOVIE SEARCH
	movieCerchSubmit.onclick = function() {
		
		var cerchVal = movieCerch.value.toLowerCase();
		var result = cerchVal.split(" ").join("+");
		
		// ERROR MESSAGE
		if (movieCerch.value == "" || movieCerch.value == null) {
			errorMessage.style.display = "block";
			newCerch.style.display = "block";
			movieCerchSubmit.style.display = "none";
			
		} else {
			newCerch.style.display = "block";
			movieCerchSubmit.style.display = "none";
			
			// SEARCH XHR
			$.getJSON( "http://www.omdbapi.com/?t=" + result + "&y=&plot=full&r=json", function( data ) {
			
				// ITERATE OVER AND HANDLE DATA
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
				
				// ERROR MESSAGE
				if (items.length < 3) {
					errorMessage3.style.display = "block";
				}
				
				// PRINT DATA TO WINDOW
				for (var i = 0; i < items.length - 6; i++) {
					$("#movie0").append(items[i]);
					movieWrap0.style.background = "url('" + poster[0] + "')";
				}
			});
		}
		return false;
	};

	// RESET FORM FOR NEW SEARCH
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

	// RESET FORM ON INPUT
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
	AJAX HELPER FUNCTION
	===============================================*/
	var getAndSet = function(yerl, idee1, idee2){
		$.getJSON( yerl, function( data ) {
			var items = [];
			var poster = [];
			
			// ITERATE OVER AND HANDLE DATA
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
			
			// PRINT DATA TO WINDOW
			for (var i = 0; i < items.length - 6; i++) {
				idee1.append(items[i]);
				idee2.style.backgroundImage = "url('" + poster[0] + "') no-repeat fixed top left";
			}
		});
	};
	//* ========================================= *//	


	/*===============================================
	AS GOOD AS IT GETS
	===============================================*/
	var movieWrap1 = document.getElementById("movieWrap1");

	getAndSet("http://www.omdbapi.com/?t=as+good+as+it+gets&y=&plot=full&r=json", $("#movie1"), movieWrap1);
	//* ========================================= *//


	/*===============================================
	THE BIG LEBOWSKI
	================================================*/
	var movieWrap2 = document.getElementById("movieWrap2");

	getAndSet("http://www.omdbapi.com/?t=the+big+lebowski&y=&plot=full&r=json", $("#movie2"), movieWrap2);
	//* ========================================= *//


	/*==============================================
	WONDER BOYS
	===============================================*/
	var movieWrap3 = document.getElementById("movieWrap3");

	getAndSet("http://www.omdbapi.com/?t=wonder+boys&y=&plot=full&r=json", $("#movie3"), movieWrap3);
	//* ========================================= *//


	/*==============================================
	JOE VERSUS THE VOLCANO
	===============================================*/
	var movieWrap4 = document.getElementById("movieWrap4");

	getAndSet("http://www.omdbapi.com/?t=joe+versus+the+volcano&y=&plot=full&r=json", $("#movie4"), movieWrap4);
	//* ========================================= *//


	/*==============================================
	THE BIG YEAR
	===============================================*/
	var movieWrap5 = document.getElementById("movieWrap5");

	getAndSet("http://www.omdbapi.com/?t=the+big+year&y=&plot=full&r=json", $("#movie5"), movieWrap5);
	//* ========================================= *//


	/*==============================================
	UNCORKED
	===============================================*/
	var movieWrap6 = document.getElementById("movieWrap6");

	getAndSet("http://www.omdbapi.com/?t=at+sachem+farm&y=&plot=full&r=json", $("#movie6"), movieWrap6);
	//* ========================================= *//


	/*==============================================
	FEAR AND LOATHING
	===============================================*/
	var movieWrap7 = document.getElementById("movieWrap7");

	getAndSet("http://www.omdbapi.com/?t=fear+and+loathing+in+las+vegas&y=&plot=full&r=json", $("#movie7"), movieWrap7);
	//* ========================================= *//


	/*==============================================
	THE ROYAL TENENBAUMS
	===============================================*/
	var movieWrap8 = document.getElementById("movieWrap8");

	getAndSet("http://www.omdbapi.com/?t=the+royal+tenenbaums&y=&plot=full&r=json", $("#movie8"), movieWrap8);
	//* ========================================= *//


	/*==============================================
	THE DOORS
	===============================================*/
	var movieWrap9 = document.getElementById("movieWrap9");

	getAndSet("http://www.omdbapi.com/?t=the+doors&y=&plot=full&r=json", $("#movie9"), movieWrap9);
	//* ========================================= *//


	/*==============================================
	THE SHAWSHANK REDEMPTION
	===============================================*/
	var movieWrap10 = document.getElementById("movieWrap10");

	getAndSet("http://www.omdbapi.com/?t=the+shawshank+redemption&y=&plot=full&r=json", $("#movie10"), movieWrap10);
	//* ========================================= *//


	/*==============================================
	INGLORIOUS BASTARDS
	===============================================*/
	var movieWrap11 = document.getElementById("movieWrap11");

	getAndSet("http://www.omdbapi.com/?t=inglourious+basterds&y=&plot=full&r=json", $("#movie11"), movieWrap11);
	//* ========================================= *//


	/*==============================================
	CATCH ME IF YOU CAN
	===============================================*/
	var movieWrap12 = document.getElementById("movieWrap12");

	getAndSet("http://www.omdbapi.com/?t=catch+me+if+you+can&y=&plot=full&r=json", $("#movie12"), movieWrap12);
	//* ========================================= *//


	/*==============================================
	ANONYMOUS
	===============================================*/
	var movieWrap13 = document.getElementById("movieWrap13");

	getAndSet("http://www.omdbapi.com/?t=anonymous&y=&plot=full&r=json", $("#movie13"), movieWrap13);
	//* ========================================= *//


	/*==============================================
	BIRDS OF AMERICA
	===============================================*/
	var movieWrap14 = document.getElementById("movieWrap14");

	getAndSet("http://www.omdbapi.com/?t=birds+of+america&y=&plot=full&r=json", $("#movie14"), movieWrap14);
	//* ========================================= *//


	/*==============================================
	THE PROFESSIONAL
	===============================================*/
	var movieWrap15 = document.getElementById("movieWrap15");

	getAndSet("http://www.omdbapi.com/?t=leon+the+professional&y=&plot=full&r=json", $("#movie15"), movieWrap15);
	//* ========================================= *//
};
	
myWebApiProjectScripts();
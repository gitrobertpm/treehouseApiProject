/*===============================================
SCRIPTS.JS

PROGRAMMING FOR SEARCH FORM IN APIREQUESTS.JS
===============================================*/
"use strict";

var width = window.innerWidth;
var height = window.innerHeight;
//* ========================================= *//


/*==============================================
OPEN MODAL
===============================================*/
var modalWrap = document.getElementById("modalWrap");
var modal = document.getElementById("modal");
var closeModal = document.getElementById("closeModal");
var movieWrap = document.getElementsByClassName("movieWrap");
var movieInfo = document.getElementsByClassName("movieInfo");
var movieInfoWrap = document.getElementById("movieInfoWrap");
var movieCerchForm = document.getElementsByClassName("movieCerchForm")[0];

var modalOpen = false;

var movieInfoCounter; 

var openThatModal = function () {
	
	for (var i = 0; i < movieWrap.length; i++) {
		
		movieWrap[i].marker = i;
		
		if (i === 0) {
			
			movieWrap[i].onclick = function() {
				if (!modalOpen) {
					
					movieCerchForm.style.display = "block";
					
					movieInfo[0].style.display = "block";
					movieInfoCounter = 0;
					modalWrap.style.display = "block";
					modalWrap.classList.toggle("closeModal", false);
					modalWrap.classList.toggle("openModal", true);
					
					// MAKE LIGHTBOX OPEN IN WINDOW INSTEAD OF TOP OF DOCUMENT IN CASE OF USER SCROLL - ACOUNTS FOR CORSS-BROWSER 
					if (navigator.userAgent.indexOf("Firefox") > 0) {
						modal.style.top = document.documentElement.scrollTop + "px";
					} else if (navigator.userAgent.indexOf("AppleWebKit") > 0 || navigator.userAgent.indexOf("Trident") > 0) {
						modal.style.top = window.pageYOffset + "px";
					}
					
					modalOpen = true;
				} 
			};	
		} else {
		
			movieWrap[i].onclick = function() {
				
				if (!modalOpen) {
					movieInfo[this.marker].style.display = "block";
					movieInfoCounter = this.marker;
					modalWrap.style.display = "block";
					modalWrap.classList.toggle("closeModal", false);
					modalWrap.classList.toggle("openModal", true);
					
					// MAKE LIGHTBOX OPEN IN WINDOW INSTEAD OF TOP OF DOCUMENT IN CASE OF USER SCROLL - ACOUNTS FOR CORSS-BROWSER 
					if (navigator.userAgent.indexOf("Firefox") > 0) {
						modal.style.top = document.documentElement.scrollTop + "px";
					} else if (navigator.userAgent.indexOf("AppleWebKit") > 0 || navigator.userAgent.indexOf("Trident") > 0) {
						modal.style.top = window.pageYOffset + "px";
					}
					
					modalOpen = true;
				} 
			};
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
		if (modalOpen) {		
			
			for (var i = 0; i < movieInfo.length; i++) {
				movieInfo[i].style.display = "none";
			}
			
			modalWrap.classList.toggle("openModal", false);
			modalWrap.classList.toggle("closeModal", true);
			
			setTimeout(function(){ modalWrap.style.display = "none"; },750);

			modalOpen = false;
			
			movieCerchForm.reset();	
			movieCerchForm.style.display = "none";
		
			newCerch.style.display = "none";
			movieCerchSubmit.style.display = "block";

			
			items.length = 0;
			poster.length = 0;
			
			$("#movie0").empty();
			movieWrap0.style.background = "none";
		}
	};
};

closeThatModal();
//* ========================================= *//



/*==============================================
ARROWS
===============================================*/
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


//* ========================================= *//



/*==============================================
REMOVE SCRIM ON HOVER
===============================================*/
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

//* ========================================= *//



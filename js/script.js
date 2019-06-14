////////////////////////////////////////////////////////////

var popup2 = document.querySelector(".card-box");
var btn2 = document.querySelectorAll(".price-send");
var close2 = document.querySelector(".close");

for(var i=0; i<btn2.length; i++){
	btn2[i].addEventListener("click", function(evt){
		evt.preventDefault();
		popup2.classList.add("modal-show");
	})
}
close2.addEventListener("click", function(evt){
		evt.preventDefault();
		popup2.classList.remove("modal-show");
})

////////////////////////////////////////////////////////////

var popup = document.querySelector(".message");
var btn = document.querySelector(".message-bottom");
var close = document.querySelector(".close");


btn.addEventListener("click", function(evt){
    evt.preventDefault();
	popup.classList.add("modal-show");
})

close.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.remove("modal-show");	
})

////////////////////////////////////////////////////////////
// Funcion Loader

window.addEventListener("load", function(){
    this.document.getElementById("contloader").classList.toggle("contloader2");
});

// Funcion Loader

// Animacion lettering
let textWrapper = document.querySelector(".textani .letters");
textWrapper.innerHTML = textWrapper.textContent.replace( /\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
	.add({
		targets: ".textani .letter",
		translateY: ["1.2em", 0],
		translateZ: 0,
		duration: 1200,
		delay: (el, i) => 50 * i,
	})
	.add({
		targets: ".textani",
		opacity: 0,
		duration: 1000,
		easing: "easeOutExpo",
		delay: 1000,
	});

// Animacion lettering	


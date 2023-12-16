function toggleMenu() {
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector(".hamburger-icon");
	menu.classList.toggle("open");
	icon.classList.toggle("open");
}

document.querySelector("#book-1").addEventListener("mouseover", () => {
	document.querySelector("#click-1").style.textShadow = "4px 0px 20px #f65d00";
	document.querySelector("#click-1").style.color = "white";
});

document.querySelector("#book-1").addEventListener("mouseout", () => {
	document.querySelector("#click-1").style.textShadow = "	0.5px 0.5px 1px black";
	document.querySelector("#click-1").style.color = "#f65d00";
});

document.querySelector("#book-2").addEventListener("mouseover", () => {
	document.querySelector("#click-2").style.textShadow = "4px 0px 20px #f65d00";
	document.querySelector("#click-2").style.color = "white";
});

document.querySelector("#book-2").addEventListener("mouseout", () => {
	document.querySelector("#click-2").style.textShadow = "	0.5px 0.5px 1px black";
	document.querySelector("#click-2").style.color = "#f65d00";
});

document.addEventListener("DOMContentLoaded", function () {
	var anchorLinks = document.querySelectorAll('a[href*="#"]');

	anchorLinks.forEach(function (link) {
		link.addEventListener("click", function (e) {
			e.preventDefault();

			var target = document.querySelector(this.getAttribute("href"));
			var topOffset = target.getBoundingClientRect().top + window.pageYOffset;

			window.scroll({
				top: topOffset,
				behavior: "smooth",
			});
		});
	});
});

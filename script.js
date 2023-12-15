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

$(function () {
	$("a[href*=#]").on("click", function (e) {
		e.preventDefault();
		$("html, body").animate(
			{ scrollTop: $($(this).attr("href")).offset().top },
			500,
			"linear"
		);
	});
});

var content = document.getElementById("content");
content.addEventListener("scroll", function () {
	const scrolled = window.scrollY;
	console.log(scrolled);
})
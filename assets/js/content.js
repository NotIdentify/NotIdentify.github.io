// var htmlasli1 = `
// <div class="col-md-4">
// 	<div class="card mb-4 box-shadow bg-dark shadow">
// 	<img class="card-img-top" src="$img$" alt="Card image cap">
// 	<div class="card-body">
// 		<h5>$title$</h5>
// 		<p class="card-text text-mute">
// 			$text$
// 		</p>
// 		<div class="d-flex justify-content-between align-items-center">
// 		<div class="btn-group">
// 			<a href="$url$" type="button" class="btn btn-sm btn-outline-secondary">View</a>
// 		</div>
// 		<small class="text-muted">9 mins</small>
// 		</div>
// 	</div>
// 	</div>
// </div>`;

var htmlasli = `
<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
	<div class="hovereffect shadow-own rounded" style="background: linear-gradient(to right, #414345, #232526);">
        <img class="img-responsive" src="$img$" alt="">
        <div class="overlay">
           <h2>$title$</h2>
           <a class="info" href="$url$" target="_blank">View More</a>
		</div>
		<div class="container bg-green text-center  p-2 ">HOVER ME!</div>
    </div>
</div>
`
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "../content/content.txt", true);
xmlhttp.send();
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var myArr = JSON.parse(this.responseText);
		// html = html.replace("$img$", myArr[0].img)
		// html = html.replace("$title$", myArr[0].title)
		// html = html.replace("$text$", myArr[0].spoiler)
		var arrayContent = [];
		for(var i=0; i<myArr.length; i++){
			html = htmlasli.replace("$img$", myArr[i].img)
			html = html.replace("$title$", myArr[i].title)
			// html = html.replace("$text$", myArr[i].spoiler)
			html = html.replace("$url$", myArr[i].url)
			arrayContent.push(html)
		}
		// document.getElementById("album").innerHTML = html;
		var isi = "";
		for (var i=0; i<arrayContent.length; i++){
			isi += arrayContent[i];
		}
		document.getElementById("album").innerHTML = isi
		
	}
};
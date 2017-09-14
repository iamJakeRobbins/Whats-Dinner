var form = document.getElementById('searchItem');
form.addEventListener('submit', function(event){
	document.getElementsByClassName('pure-menu pure-menu-scrollable custom-restricted')[0].innerHTML=''
	event.preventDefault();
	var id = event.target.elements.search.value;
	fetch('https://galvanize-cors-proxy.herokuapp.com/http://food2fork.com/api/search?key=8dc9930929d68ece9d0e39c41c097980&q='+ id)
	.then (function(id){
		return id.json()
		.then (function(recipeData){
			food(recipeData)
			console.log(recipeData);
		})
	})
})
function food(recipeData){
	for (i=0; i<recipeData.recipes.length; i++){
		matador(recipeData.recipes[i])
	}
}
function matador(nubs){
	var div = document.createElement('div')
	var h2 = document.createElement('h2')
	var anchor = document.createElement('a')
	var img = document.createElement('img')
	var visualizer = document.getElementsByClassName('pure-menu pure-menu-scrollable custom-restricted')[0]
		h2.innerText = nubs.title
		img.setAttribute('src',nubs.image_url)
		anchor.setAttribute('href', nubs.source_url)
		anchor.setAttribute('target', 'blank')
		anchor.append(img)
		div.append(h2, anchor)
		visualizer.append(div)
}

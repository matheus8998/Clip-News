var titulo = {
	"id": "ClipNews_titulo",
	"title": "Salvar titulo",
	"contexts": ["selection"]
};
chrome.contextMenus.create(titulo);

var imagem = {
	"id": "ClipNews_imagem",
	"title": "Salvar imagem",
	"contexts": ["selection"]
};
chrome.contextMenus.create(imagem);
var paragrafo = {
	"id": "ClipNews_paragrafo",
	"title": "Salvar paragrafo",
	"contexts": ["selection"]
};
chrome.contextMenus.create(paragrafo);

chrome.contextMenus.onClicked.addListener(function(Clique)
{
	if (Clique.menuItemId == "ClipNews_paragrafo") 
	{
		var texto = Clique.selectionText;
		$.ajax({
            url     : 'savejson.php',
            dataType : 'json',
            method  : 'post',
            //data    : { 'paragrafo': $('#word').val() },
            data    : { data: JSON.stringify(texto) },
        success: function () {console.log("Thanks!"); },
        failure: function() {console.log("Error!");}
        });

		console.log(texto);
	}
	else if (Clique.menuItemId == "ClipNews_titulo") 
	{
		console.log("salvando titulo");
	}
	else if (Clique.menuItemId == "ClipNews_imagem") 
	{
		console.log("salvando imagem");
	}

})



/*var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});*/
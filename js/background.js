var $ = jQuery;

// Ne pas afficher le HELPER sur les pages qui ne sont pas de l'env de test
var urlPatternsDev = ["http://localhost:*/*", "https://localhost:*/*"];
var urlPatternsCCLink = ["file:///*/CC3Links-master/*"];

// Affiche le bouton de validation du jeu de données pour accèder à l'écran suivant
chrome.contextMenus.create({
	title: "Afficher bouton DC",
	"documentUrlPatterns": urlPatternsDev,
	onclick: function(object, tab){
		chrome.tabs.executeScript(tab.id, {
			file: "min_scripts/showdcbutton.js"
		});
	} 
});

// Permet de valider le jeu de données et d'accèder automatiquement à l'écran suivant
chrome.contextMenus.create({
	title: "Valider DC",
	"documentUrlPatterns": urlPatternsDev,
	onclick: function(object, tab){
		chrome.tabs.executeScript(tab.id, {
			file: "min_scripts/validerdc.js"
		});
	} 
});



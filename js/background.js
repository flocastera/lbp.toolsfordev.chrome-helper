var $ = jQuery;

// Ne pas afficher le HELPER sur les pages qui ne sont pas de l'env de test
var urlPatternsDev = ["http://localhost:*/*", "https://localhost:*/*", "https://rmoa-stmcv1.sf.intra.laposte.fr:*/*",
	"https://imoe-stmcv1.sf.intra.laposte.fr:*/*"];
var urlPatternsCCLink = ["file:///*/CC3Links-master/*"];
var urlPatternsAnomalies = ["https://clm-prod.sf.intra.laposte.fr:*/*"];

// Affiche le bouton de validation du jeu de données pour accèder à l'écran suivant
chrome.contextMenus.create({
	title: "Afficher bouton DC",
	"documentUrlPatterns": urlPatternsDev,
	"contexts": ["frame", "link"],
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

chrome.contextMenus.create({
    type: 'separator'
});

// Permet de réactiver un bouton désactiver
chrome.contextMenus.create({
	title: "Activer bouton",
	"documentUrlPatterns": urlPatternsDev,
	onclick: function(object, tab){
        chrome.tabs.executeScript(tab.id, {
            file: "min_scripts/activerbouton.js"
        });
	}
});

chrome.contextMenus.create({
	title: "Renommer onglet",
	"documentUrlPatterns": urlPatternsAnomalies,
	onclick: function (object, tab) {
		chrome.tabs.executeScript(tab.id, {
			file: "min_scripts/renommer.js"
		})
    }
});



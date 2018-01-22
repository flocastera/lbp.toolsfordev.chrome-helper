
var t = window.prompt("Nom :", document.title);
var num = document.title.match(/[0-9]{5}/);
if( num !== undefined)
    num = num[0];

if( t !== null && t !== undefined && t.trim() !== "")
    document.title = t.trim() + ' (' + num + ')';

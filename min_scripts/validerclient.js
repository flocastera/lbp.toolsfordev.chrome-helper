var test = document.getElementsByTagName('BUTTON');

for( var i=0; i<test.length; ++i){
	if( Object.keys(test[i].dataset).indexOf("adOnClick") !== -1)
		if( test[i].dataset.adOnClick === "scope.validerClient" ){
			test[i].click();
		}
}
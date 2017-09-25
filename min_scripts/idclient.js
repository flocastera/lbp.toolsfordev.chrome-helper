
var fieldUserId = document.getElementById('vente-idClient');

var clients = localStorage['savedClients'];

clients = {
    '425951952': {
        id: '425951952',
        description: "FRANCAIS",
        products: ["CCP"]
    }
};

fieldUserId.value = clients['425951952'].id;
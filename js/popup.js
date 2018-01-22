var KEY_SAVED_CLIENTS =  'savedClients';
var KEY_SAVED_ERRORS = 'savedErrors';

var clients = localStorage[KEY_SAVED_CLIENTS];
clients = ((clients && clients !== '') ? JSON.parse(clients) : []);

function displayInfo(text, labelClass){
    var mes = $("#messages");
    mes.html("<span>" + text + "</span>");
    mes.removeClass("label-important");
    mes.removeClass("label-success");
    mes.removeClass("label-error");
    mes.removeClass("label-warning");
    mes.addClass(labelClass);
    setTimeout(function(){
        $("#messages span").fadeOut("fast", function(){
            $(this).remove();
        });
    },5000);
}

function getValuesFromLine(tr) {
    var dic = {
        id: tr.find('.id-client').val(),
        description: tr.find('.description-client').val(),
        products: tr.find('.products-client').val().split(";")
    };
    return dic;
}

function saveClients(){
    var clis = [];
    $.each($("tbody tr"), function (k, v) {
        clis.push(getValuesFromLine($(v)));
    });
    displayInfo("Sauvegardé !", "label-success");
    localStorage[KEY_SAVED_CLIENTS] = JSON.stringify(clis);
}

function createClientLine(id, description, produits, edit){
    var elem = $("<tr></tr>");
    var td = $("<td></td>");
    var input = $("<input class='id-client' type='text' />");

    input.val(id);
    input.attr('readonly', !edit);
    input.on('click', function(){
        $(this).select();
        document.execCommand('copy');
        displayInfo("Copié !", "label-success");
    });
    td.append(input);
    elem.append(td);

    td = $("<td></td>");
    input = $("<input class='description-client' type='text' />");
    input.val(description);
    input.attr('readonly', !edit);
    td.append(input);
    elem.append(td);

    td = $("<td></td>");
    input = $("<textarea class='products-client' type='text'></textarea>");
    input.val(produits ? produits.join(';') : "");
    input.attr('readonly', !edit);
    td.append(input);
    elem.append(td);

    td = $("<td></td>");
    a = $("<a href='#'></a>");
    a.html((edit ? '<img src="images/valid.png" />' : '<img src="images/edit.png" />'));
    a.data('state', edit);
    a.on('click', function(){
        var state = $(this).data('state');
        if(state) {
            clients.push(getValuesFromLine($(this).parent().parent()));
            saveClients();
            $(this).data('state', !state);
            $(this).html('<img src="images/edit.png" />');
            $(this).parent().parent().find("input, textarea").attr("readonly", state);
        }
        else{
            $(this).data('state', !state);
            $(this).html('<img src="images/valid.png" />');
            $(this).parent().parent().find("input, textarea").attr("readonly", state);
        }
    });
    td.append(a);
    elem.append(td);

    td = $("<td></td>");
    a = $("<a href='#'><img src='images/croix-blanche_pour-fd-bleu.png' /></a>");
    a.on('click', function(){
        $(this).parent().parent().remove();
        saveClients();
        displayInfo("Supprimé !", "label-warning");
    });
    td.append(a);
    elem.append(td);

    return elem;
}

$(document).ready(function(){
    clients.forEach(function (t) {
        $("#clientsContainer").append(createClientLine(t.id, t.description, t.products, false));
    });
});

$("#addClient").on("click", function (event) {
    $("#clientsContainer").append(createClientLine('', '', '', true));
});
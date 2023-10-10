function myFunction() {
    var resposta = document.getElementById('person').value;



    if (resposta == null || resposta == "") {
        window.alert("Esse campo não pode ficar em branco!");


    }
    else if (resposta == "marie jeanne valet") {
        window.location = "file:///C:/Users/beatr/OneDrive/%C3%81rea%20de%20Trabalho/The%20Riddle%20of%20Rowena/second.html";


    }

    else if (resposta == "jeanne jouve") {
        alert('its the other lady');


    } else {
        window.alert("resposta errada!");

    }
}

function oneFunction() {
    var bat = document.getElementById('valet').value;



    if (bat == null || bat == "") {
        window.alert("Esse campo não pode ficar em branco!");


    }
    else if (bat == "thou art more lovely and more temperate") {
        window.location = "file:///C:/Users/beatr/OneDrive/%C3%81rea%20de%20Trabalho/The%20Riddle%20of%20Rowena/three.html";


    }

    else if (bat == "soneto 18" || bat == "sonnet 18") {
        alert('Você está quase lá, mas ainda não é essa a resposta');


    } else {
        window.alert("resposta errada!");

    }

}
function fastFunction() {
    var enid = document.getElementById('ide').value;

    if (enid == null || enid == "") {
        window.alert("Esse campo não pode ficar em branco!");



    } else if (enid == "6.62607004") {
        window.location = "file:///C:/Users/beatr/OneDrive/%C3%81rea%20de%20Trabalho/The%20Riddle%20of%20Rowena/four.html";

    } else if (enid == "constante de planck") {
        window.alert("Você está quase lá");

    } else if (enid == "max planck") {
        window.alert("Acha mesmo que vai ser tão fácil?")
    } else if (enid == "never ending story") {
        window.alert("Amo essa música, mas essa não é a resposta")
    } else {
        window.alert("resposta errada!")
    }

}
function rodFunction() {

    var rod = document.getElementById('id').value;

    if (rod == null || rod == "") {
        window.alert("Esse campo não pode ficar em branco!")

    } else if (rod == "expecto patronum") {
        window.location = "file:///C:/Users/beatr/OneDrive/%C3%81rea%20de%20Trabalho/The%20Riddle%20of%20Rowena/five.html"

    } else if (rod == "harry potter") {
        window.alert("bom chute, mas ainda não")

    } else if (rod == "feitiços") {
        window.alert("Ok, mas qual deles?")
    }


}
function peaceFunction() {
    var pea = document.getElementById('type').value;
    if (pea == null || pea == "") {
        window.alert("Esse campo não pode ficar em branco!")
    } else if (pea == "h5f7") {
        window.location = "file:///C:/Users/beatr/OneDrive/%C3%81rea%20de%20Trabalho/The%20Riddle%20of%20Rowena/six.html";

    } else { window.alert("Resposta errada!"); }
}
function sinkFunction() {
    var sink = document.getElementById('up').value;
    if (sink == null || sink == "") {
        window.alert("Esse campo não pode ficar em branco!")
    } else if (sink == "macho pichu") {
        window.location = "file:///C:/Users/beatr/OneDrive/%C3%81rea%20de%20Trabalho/The%20Riddle%20of%20Rowena/end.html";

    } else { window.alert("Resposta errada!"); }

}

// Variables des 'input' des dépenses
var ilc = document.getElementById('ilc');
var irc = document.getElementById('irc');
var ieeg = document.getElementById('ieeg');
var iti = document.getElementById('iti');
var iah = document.getElementById('iah');
var ic = document.getElementById('ic');
var ieftc = document.getElementById('ieftc');
var iasc = document.getElementById('iasc');
var is = document.getElementById('is');

// Variable de l'input du total des dépenses
var itd = document.getElementById('itd');

//Bouton pour ajouter un champ depense
var divEspaceChampAjoutDepenses = document.getElementById('espaceChampAjoutDepenses');
var boutonAjouterChamp = document.getElementById('boutonAjouterChamp');


// Boucle pour ajouter un champ dépense
for (var i=0;i<1; i++){
    boutonAjouterChamp.addEventListener('click', function () {
        var newInputIntitule = document.createElement('input');
        var newInputDepenses = document.createElement('input');
        newInputIntitule.className='inputAjout';
        newInputDepenses.id ='input'+i++;
        newInputDepenses.value=0;

        divEspaceChampAjoutDepenses.appendChild(newInputIntitule);
        divEspaceChampAjoutDepenses.appendChild(newInputDepenses);

    });

}

// Bouton dépenses
var boutonDepenses= document.getElementById('boutonDepenses');


boutonDepenses.addEventListener('click', function () {

    itd.value = parseFloat(ilc.value)+parseFloat(irc.value)+parseFloat(ieeg.value)
        +parseFloat(iti.value)+parseFloat(iah.value)+parseFloat(ic.value)
        +parseFloat(ieftc.value)+parseFloat(iasc.value)+parseFloat(is.value);

});

// Bouton dépenses avec ajout d'un champ
boutonDepenses.addEventListener('click', function () {
    var input1 = document.getElementById('input1');
    itd.value = parseFloat(ilc.value)+parseFloat(irc.value)+parseFloat(ieeg.value)
        +parseFloat(iti.value)+parseFloat(iah.value)+parseFloat(ic.value)
        +parseFloat(ieftc.value)+parseFloat(iasc.value)+parseFloat(is.value)
        +parseFloat(input1.value);
});

//Bouton dépenses avec ajout d'un second champ
boutonDepenses.addEventListener('click', function () {
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    itd.value = parseFloat(ilc.value)+parseFloat(irc.value)+parseFloat(ieeg.value)
        +parseFloat(iti.value)+parseFloat(iah.value)+parseFloat(ic.value)
        +parseFloat(ieftc.value)+parseFloat(iasc.value)+parseFloat(is.value)
        +parseFloat(input1.value)+parseFloat(input2.value);
});

// Variable des 'input' des recettes
var isalaire = document.getElementById('isalaire');
var iaides = document.getElementById('iaides');
var irentes = document.getElementById('irentes');
var iautres = document.getElementById('iautres');

// Variable de l'input du total des recettes
var itr = document.getElementById('itr');


//Bouton pour ajouter un champ depense
var divEspaceChampAjoutRecettes = document.getElementById('espaceChampAjoutRecettes');
var boutonAjouterChampRecettes = document.getElementById('boutonAjouterChampRecettes');


// Boucle pour ajouter un champ dépense
for (var i=0;i<1; i++){
    boutonAjouterChampRecettes.addEventListener('click', function () {
        var newInputIntituleR = document.createElement('input');
        var newInputRecettes = document.createElement('input');
        newInputIntituleR.className='inputAjoutR';
        newInputRecettes.id ='inputR'+i++;
        newInputRecettes.value=0;

        divEspaceChampAjoutRecettes.appendChild(newInputIntituleR);
        divEspaceChampAjoutRecettes.appendChild(newInputRecettes);

    });

}


// Bouton recettes
var boutonRecettes = document.getElementById('boutonRecettes');

boutonRecettes.addEventListener('click', function () {

    itr.value = parseFloat(isalaire.value)+parseFloat(iaides.value)+
                parseFloat(irentes.value)+parseFloat(iautres.value);
});


// Bouton recettes avec ajout d'un champ
var boutonRecettes = document.getElementById('boutonRecettes');


boutonRecettes.addEventListener('click', function () {
    var inputR1 = document.getElementById('inputR1');
    itr.value = parseFloat(isalaire.value)+parseFloat(iaides.value)+
        parseFloat(irentes.value)+parseFloat(iautres.value)+
        parseFloat(inputR1.value);
});

// Bouton recettes avec ajout d'un second champ
var boutonRecettes = document.getElementById('boutonRecettes');

boutonRecettes.addEventListener('click', function () {
    var inputR1 = document.getElementById('inputR1');
    var inputR2 = document.getElementById('inputR2');
    itr.value = parseFloat(isalaire.value)+parseFloat(iaides.value)+
        parseFloat(irentes.value)+parseFloat(iautres.value)+
        parseFloat(inputR1.value)+parseFloat(inputR2.value);
});

// Bouton balance et condition pour les suggestions
var inputBalance = document.getElementById('inputBalance');
var boutonBalance = document.getElementById('boutonBalance');

boutonBalance.addEventListener('click', function () {

    inputBalance.value=parseFloat(itr.value)-parseFloat(itd.value);

    var suggestion = document.getElementById('suggestion');

    if (inputBalance.value>0 && inputBalance.value<=10){
        console.log(inputBalance.value);
        suggestion.innerHTML="Vous pouvez acheter du pain";
        suggestion.style.color='green';
        inputBalance.style.background="green";
        inputBalance.style.fontWeight="bold";
    }
    else if (inputBalance.value>10 && inputBalance.value<=50) {
        suggestion.innerHTML='Vous pouvez acheter du vin';
        suggestion.style.color='green';
        inputBalance.style.background="green";
        inputBalance.style.fontWeight="bold";
    }

    else if (inputBalance.value>50 && inputBalance.value<=100) {
        suggestion.innerHTML='Vous pouvez aller au restaurant';
        suggestion.style.color='green';
        inputBalance.style.background="green";
        inputBalance.style.fontWeight="bold";
    }

    else if (inputBalance.value>100 && inputBalance.value<=500) {
        suggestion.innerHTML='Vous pouvez partir en week-end';
        suggestion.style.color='green';
        inputBalance.style.background="green";
        inputBalance.style.fontWeight="bold";
    }

    else if (inputBalance.value>500 && inputBalance.value<=1000) {
        suggestion.innerHTML='Vous pouvez partir en vacances';
        suggestion.style.color='green';
        inputBalance.style.background="green";
        inputBalance.style.fontWeight="bold";
    }

    else if (inputBalance.value<0) {
        suggestion.innerHTML='Attention';
        suggestion.style.color='red';
        inputBalance.style.background="red";
        inputBalance.style.fontWeight="bold";
    }
});
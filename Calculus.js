/**
 * Created by Julien on 31/05/2015.
 */

/* Variables */

var EnfantConnecte;
var reponse;
var nbreAllies = 10;
var nbreAdversaires = 10;

window.addEventListener('load', initEventHandlers, false);

function initEventHandlers()
{
    var url = document.URL;
    var tabUrl = url.split("=");
    recuperation(tabUrl[1]);

    document.getElementById('btnValiderReponse').addEventListener('click', function() { reponse = verificationReponse() }, false);
    document.getElementById('cbxNiveau').addEventListener('change', function() { reponse = genererCalcul(true) }, false);
    reponse = genererCalcul(true);
}

function recuperation(Prenom)
{
    var monEnfantJSON = localStorage.getItem(Prenom);
    EnfantConnecte = JSON.parse(monEnfantJSON);
}

/**
 * La fonction va vérifier si la réponse entrée par l'enfant est correcte ou non
 * @returns La réponse au calcul généré.
 */
function verificationReponse()
{
    var valeurInput = document.getElementById('txtReponse').value;

    if(isNaN(valeurInput))
    {
        alert(valeurInput + " n'est pas un chiffre");
        return;
    }
    else if(valeurInput == reponse) // On élimine un adversaire
    {
        nbreAdversaires--;
        remplirCanvas(false);
        if(nbreAdversaires == 0)
        {
            ecrireGagner();
            //alert('Super ! Tu as gagné ' + document.getElementById('cbxNiveau').value + ' jetons !');
            EnfantConnecte.NombrePiece += parseInt(document.getElementById('cbxNiveau').value);
            sauvegardeEnfantConnecte();
            return;
        }
    }
    else // On élimine un allié
    {
        nbreAllies--;
        remplirCanvas(false);
        if(nbreAllies == 0)
        {
            ecrirePerdu();
            return;
        }
    }

    return genererCalcul(false);
}

/**
 * La fonction va écrire le mot "Gagner" dans le canvas
 */

function ecrireGagner()
{
    var cnvAdverse = document.getElementById('cnvMechants');
    cnvAdverse.style.backgroundColor = "#F3F4F6";
    var ctxAdverse = cnvAdverse.getContext('2d');
    ctxAdverse.fillStyle = "#005B12";
    ctxAdverse.font = "150px monospace";
    ctxAdverse.fillText('Gagné', 200, 150);
    document.getElementById('btnValiderReponse').disabled = true;
}

/**
 * La fonction va écrire le mot "Perdu" dans le canvas
 */
function ecrirePerdu()
{
    var cnvAllie = document.getElementById('cnvGentils');
    cnvAllie.style.backgroundColor = "#F3F4F6";
    var ctxAllie = cnvAllie.getContext('2d');
    ctxAllie.fillStyle = "#F00000";
    ctxAllie.font = "150px monospace";
    ctxAllie.fillText('Perdu', 200, 150);
    document.getElementById('btnValiderReponse').disabled = true;
}

/**
 * La fonction va remplir les canvas avec les images des casques à pointe.
 * @param nouvellePartie Permet de savoir si on démarre une nouvelle partie en remettant le nombre de soldat à 10
 */
function remplirCanvas(nouvellePartie)
{
    if(nouvellePartie == true)
    {
        nbreAdversaires = 10;
        nbreAllies = 10;
    }

    var cnvAllie = document.getElementById('cnvGentils');
    cnvAllie.style.backgroundColor = "#F3F4F6";
    var ctxAllie = cnvAllie.getContext('2d');
    ctxAllie.clearRect(0, 0, cnvAllie.width, cnvAllie.height);

    var soldatAllie = new Image();
    soldatAllie.src = "SoldatAllié.png";

    soldatAllie.onload = function() {
        for (i = 0; i < nbreAllies; i++)
            ctxAllie.drawImage(soldatAllie, soldatAllie.width * i, 0);
    }

    var cnvAdverse = document.getElementById('cnvMechants');
    cnvAdverse.style.backgroundColor = "#F3F4F6";
    var ctxAdverse = cnvAdverse.getContext('2d');
    ctxAdverse.clearRect(0, 0, cnvAdverse.width, cnvAdverse.height);

    var soldatAdverse = new Image();
    soldatAdverse.src = "SoldatAdverse.png";

    soldatAdverse.onload = function() {
        for(i = 0; i < nbreAdversaires; i++)
            ctxAdverse.drawImage(soldatAdverse, soldatAdverse.width * i, 0);
    }
}

function genererCalcul(nouvellePartie)
{
    document.getElementById('btnValiderReponse').disabled = false;
    if(nouvellePartie == true)
        remplirCanvas(nouvellePartie);

    document.getElementById('txtReponse').value = "";
    var u1, u2, reponse;

    switch(document.getElementById('cbxNiveau').value)
    {
        case '1':
            do
            {
                u1 = Math.floor((Math.random() * 9) + 0);
                u2 = Math.floor((Math.random() * 9) + 0);
            }
            while(u1 + u2 > 10);
            reponse = u1 + u2;

            document.getElementById('lblCalcul').innerHTML = u1 + "+" + u2;
            break;

        case '2':
            do
            {
                u1 = Math.floor((Math.random() * 9) + 0);
                u2 = Math.floor((Math.random() * 9) + 0);
            }
            while(u1 + u2 < 10);
            reponse = u1 + u2;

            document.getElementById('lblCalcul').innerHTML = u1 + "+" + u2;
            break;

        case '3':
            do
            {
                u1 = Math.floor((Math.random() * 9) + 0);
                u2 = Math.floor((Math.random() * 9) + 0);
            }
            while(u1 + u2 < 0);
            reponse = u1 - u2;

            document.getElementById('lblCalcul').innerHTML = u1 + "-" + u2;
            break;

        case '4':
            do
            {
                u1 = Math.floor((Math.random() * 9) + 0);
                u2 = Math.floor((Math.random() * 9) + 0);
                d1 = Math.floor((Math.random() * 9) + 1);
            }
            while(u1 + u2 >= 10);
            reponse = u1 + ((d1 * 10) + u2);

            document.getElementById('lblCalcul').innerHTML = u1 + "+" + ((d1 * 10) + u2);
            break;

        case '5':
            do
            {
                u1 = Math.floor((Math.random() * 9) + 0);
                u2 = Math.floor((Math.random() * 9) + 0);
                d1 = Math.floor((Math.random() * 9) + 1);
                d2 = Math.floor((Math.random() * 9) + 1);
            }
            while(u1 + u2 >= 10);
            reponse = ((d1 * 10) + u1) + ((d2 * 10) + u2);

            document.getElementById('lblCalcul').innerHTML = ((d1 * 10) + u1) + "+" + ((d2 * 10) + u2);
            break;

        case '6':
            do
            {
                u1 = Math.floor((Math.random() * 9) + 0);
                u2 = Math.floor((Math.random() * 9) + 0);
                d1 = Math.floor((Math.random() * 9) + 1);
                d2 = Math.floor((Math.random() * 9) + 1);
            }
            while(u1 + u2 <= 10);
            reponse = ((d1 * 10) + u1) + (( d2 * 10) + u2);

            document.getElementById('lblCalcul').innerHTML = ((d1 * 10) + u1) + "+" + ((d2 * 10) + u2);
            break;

        case '7':
            do
            {
                u1 = Math.floor((Math.random() * 9) + 0);
                u2 = Math.floor((Math.random() * 9) + 0);
                d1 = Math.floor((Math.random() * 9) + 1);
            }
            while(u1 - u2 < 0);
            reponse = (((d1 * 10) + u1) - u2);

            document.getElementById('lblCalcul').innerHTML = ((d1 * 10) + u1) + "-" + u2;
            break;

        case '8':
            do
            {
                u1 = Math.floor((Math.random() * 9) + 0);
                u2 = Math.floor((Math.random() * 9) + 0);
                d1 = Math.floor((Math.random() * 9) + 1);
            }
            while(u1 - u2 >= 0);
            reponse = (((d1 * 10) + u1) - u2);

            document.getElementById('lblCalcul').innerHTML = ((d1 * 10) + u1) + "-" + u2;
            break;

        case '9':
            do
            {
                u1 = Math.floor((Math.random() * 9) + 0);
                u2 = Math.floor((Math.random() * 9) + 0);
                d1 = Math.floor((Math.random() * 9) + 1);
                d2 = Math.floor((Math.random() * 9) + 1);
            }
            while(u1-u2 < 0);
            reponse = (((d1 * 10) + u1) - ((d2 * 10) + u2));

            document.getElementById('lblCalcul').innerHTML = ((d1 * 10) + u1) + "-" + ((d2 * 10) + u2);
            break;

        case '10':
            u1 = Math.floor((Math.random() * 9) + 0);
            u2 = Math.floor((Math.random() * 9) + 0);
            d1 = Math.floor((Math.random() * 9) + 1);
            d2 = Math.floor((Math.random() * 9) + 1);

            reponse = (((d1 * 10) + u1) - ((d2 * 10) + u2));

            document.getElementById('lblCalcul').innerHTML = ((d1 * 10) + u1) + "-" + ((d2 * 10) + u2);
            break;
    }

    return reponse;
}

function sauvegardeEnfantConnecte()
{
    var monObjetJSON = JSON.stringify(EnfantConnecte);
    localStorage.setItem(EnfantConnecte.Prenom, monObjetJSON);
    document.getElementById('Jetons').innerHTML = "Jetons : " + EnfantConnecte.NombrePiece;
}
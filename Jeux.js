/**
 * Created by Julien on 12/05/2015.
 */


/* Variables */
var EnfantConnecte;

/* Evenement + fonction chargement de la page */

window.addEventListener('load', initEventHandlers, false);

function initEventHandlers()
{
    document.getElementById('lienDeconnexion').innerHTML = "Se déconnecter";
    var url = document.URL;
    var tabUrl = url.split("=");
    recuperation(tabUrl[1]);

    document.getElementById('infos').style.border = "1px solid black";
    document.getElementById('infos').style.width = "200px";

    document.getElementById('btnPendu').addEventListener('click', pendu, false)
    document.getElementById('btnCalculus').addEventListener('click', calculus, false)
    document.getElementById('btnPong').addEventListener('click', pong, false)
}

/* Fonctions de récupération des infos de l'enfant connecté */

function recuperation(Prenom)
{
    var monEnfantJSON = localStorage.getItem(Prenom);
    EnfantConnecte = JSON.parse(monEnfantJSON);
    couleurFond();
    document.getElementById('Prenom').innerHTML = EnfantConnecte.Prenom;
    var monAvatar = document.getElementById('Avatar');
    monAvatar.src = "Avatars/" + EnfantConnecte.Avatar;

    document.getElementById('Points').innerHTML = "Meilleur score Pong : " + EnfantConnecte.BestPong;
    document.getElementById('Jetons').innerHTML = "Jetons : " + EnfantConnecte.NombrePiece;
}

/* Fonction qui "initialise" le pendu */

function pendu()
{
    document.getElementById('ZoneJeu').innerHTML = '<iframe id="Pendu" width="700px" height="480px"></iframe>';
    document.getElementById('Pendu').src = "Pendulus.html?Prenom=" + EnfantConnecte.Prenom;
}

/* Fonction qui "initialise" le calculus */

function calculus()
{
    document.getElementById('ZoneJeu').innerHTML = '<iframe id="Calculus" width="850px" height="500px"></iframe>';
    document.getElementById('Calculus').src = "Calculus.html?Prenom=" + EnfantConnecte.Prenom;
}

/* Fonction qui "initialise" le pong */

function pong()
{
    document.getElementById('ZoneJeu').innerHTML = '<iframe id="Pong" width="700px" height="510px"></iframe>';
    document.getElementById('Pong').src = "Pongulus.html?Prenom=" + EnfantConnecte.Prenom;
}

function couleurFond()
{
    if (EnfantConnecte.Sexe == "M")
        document.getElementById('divJumbotron').style.backgroundColor = "#5D98F0";
    else
        document.getElementById('divJumbotron').style.backgroundColor = "#F05DEB";
}
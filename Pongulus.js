/**
 * Created by Julien on 27/05/2015.
 */

var EnfantConnecte;
var nbreParties = 5;

window.addEventListener('load', initEventHandlers, false);

function initEventHandlers()
{
    var url = document.URL;
    var tabUrl = url.split("=");

    recuperation(tabUrl[1]);
}

function recuperation(Prenom)
{
    var monEnfantJSON = localStorage.getItem(Prenom);
    EnfantConnecte = JSON.parse(monEnfantJSON);

    if(EnfantConnecte.NombrePiece < 3)
    {
        alert('Il te faut au moins 3 pièces pour jouer au Pong.');
        nbreParties = 0;
        location.href = 'Jeux.html?Prenom=' + EnfantConnecte.Prenom;
    }
    else
    {
        EnfantConnecte.NombrePiece -= 3;
        sauvegardeEnfantConnecte();
        nbreParties = 5;
    }
}

var canvas = document.getElementById('cnvPong');
var context = canvas.getContext('2d');

context.fillStyle = "#FFF";
context.font = "60px monospace";

var Pause = 1;
var DebutPartie = 1;
var VitesseBarreGauche = 0;
var VitesseBarreDroite = 0;
var Score = 0;
var BarreGauche = 190;
var BarreDroite = 190;
var BallX = 300;
var BallY = 235;
var VitesseBallX = -5;
var VitesseBallY = 3;

function Pong()
{
    if(nbreParties != 0)
    {
        if (Pause && !DebutPartie)
            return;

        DebutPartie = 0;

        context.clearRect(0, 0, canvas.width, canvas.height);

        BarreGauche += VitesseBarreGauche;
        BarreDroite += VitesseBarreDroite;

        // Délimitation de la barre gauche en fonction de l'axe des y
        BarreGauche = BarreGauche < 0 ? 0 : BarreGauche;
        BarreGauche = BarreGauche > 380 ? 380 : BarreGauche;

        // Délimitation de la barre droite en fonction de l'axe des y
        BarreDroite = BarreDroite < 0 ? 0 : BarreDroite;
        BarreDroite = BarreDroite > 380 ? 380 : BarreDroite;

        // Lance la balle
        BallX += VitesseBallX;
        BallY += VitesseBallY;

        if (BallY <= 0) // Rebond supérieur
        {
            BallY = 0;
            VitesseBallY = -VitesseBallY;
        }

        if (BallY >= 470) // rebond inférieur
        {
            BallY = 470;
            VitesseBallY = -VitesseBallY;
        }

        /*
        * BallX <= 40 && BallX >= 20 ==> Permet de vérifier si la balle se trouve entre les 2 'x' de la barre
        *
        * BallY < BarreGauche + 110 && BallY > BarreGauche - 10 ==> Permet de vérifier si la balle se trouve """entre""" les 2 'y' de la barre
        * (10 de différences car taille de la balle = 10)
        * */
        if (BallX <= 40 && BallX >= 20 && BallY < BarreGauche + 110 && BallY > BarreGauche - 10)
        {
            Score++;
            VitesseBallX = -VitesseBallX + 0.4; // Ricochet vers la droite
        }

        if (BallX <= 610 && BallX >= 590 && BallY < BarreDroite + 110 && BallY > BarreDroite - 10)
        {
            Score++;
            VitesseBallX = -VitesseBallX - 0.4; // Ricochet vers la gauche
        }

        if (BallX < 0) // Si la balle ne ricoche pas contre la barre gauche
        {
            BallX = 360;
            BallY = 235;
            VitesseBallX = 5; // La barre de droite "lance" la balle
            Pause = 1;
        }

        if (BallX > 640) // Si la balle ne ricoche pas contre la barre droite
        {
            BallX = 280;
            BallY = 235;
            VitesseBallX = -5; // La barre de gauche "lance" la balle
            Pause = 1;
        }

        if (Pause == 1)
        {
            if (Score > EnfantConnecte.BestPong)
            {
                alert('Tu as battu ton meilleur score !');
                EnfantConnecte.BestPong = Score;
                sauvegardeEnfantConnecte();
            }
            Score = 0;
            nbreParties--;
        }

        context.fillText(Score, 300, 60); // On écrit le score
        context.fillRect(20, BarreGauche, 20, 100); // On dessine la barre de gauche
        context.fillRect(600, BarreDroite, 20, 100); // On dessine la barre de droite
        context.fillRect(BallX, BallY, 10, 10); // On dessine la boule
    }
    else
    {
        alert('Tu as joué tes 5 parties. Si tu souhaites recommencer, clique à nouveau sur le bouton "Pong" un peu plus haut !');
        clearInterval(refreshIntervalId);
        return;
    }
}

var refreshIntervalId = setInterval(Pong, 30);

document.onkeydown = function(e) {
    e.preventDefault();
    k = e.keyCode;
    Pause = Pause ? 0 : k == '27' ? 1 : 0;
    VitesseBarreGauche = VitesseBarreDroite = k == '40' ? 5 : k == '38' ? - 5 : VitesseBarreDroite;
}

document.onkeyup = function(e) {
    e.preventDefault();
    k = e.keyCode;
    VitesseBarreGauche = VitesseBarreDroite = k == '38' || k == '40' ? 0 : VitesseBarreDroite;
}

function sauvegardeEnfantConnecte()
{
    var monObjetJSON = JSON.stringify(EnfantConnecte);
    localStorage.setItem(EnfantConnecte.Prenom, monObjetJSON);
    document.getElementById('Jetons').innerHTML = "Jetons : " + EnfantConnecte.NombrePiece;
    document.getElementById('Points').innerHTML = "Meilleur score Pong : " + EnfantConnecte.BestPong;
}
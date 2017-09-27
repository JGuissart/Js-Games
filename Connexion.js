/**
 * Created by Julien on 9/05/2015.
 */

window.addEventListener('load', initEventHandlers, false);

function initEventHandlers()
{
    document.getElementById('btnConnexion').addEventListener('click', verification, false);
}

function verification()
{
    //alert("Je démarre verification");
    var prenom = document.getElementById('txtPrenom').value;

    if (localStorage.getItem(prenom) == null) // Si le prénom n'existe pas dans le localStorage, on redirige vers la page d'inscription
        document.location.href = "Inscription.html?Prenom=" + prenom;
    else // Sinon, on récupère les infos de l'enfant
        document.location.href = "Jeux.html?Prenom=" + prenom;

    //alert("Je termine verification");
}
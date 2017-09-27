/**
 * Created by Julien on 19/04/2015.
 */

var EnfantASauver = new Enfant(null, null, null, null, null);
var AvatarSelectionne = new Image();

window.addEventListener('load', initEventHandlers, false);

function initEventHandlers()
{
    recuperationPrenomUrl();
    document.getElementById('btnConfirmer').addEventListener('click', inscription, false);
    document.getElementById('rdbFille').addEventListener('click', function() { afficherAvatars("F") }, false);
    document.getElementById('rdbGarcon').addEventListener('click', function() { afficherAvatars("M") }, false);
}

function inscription()
{
    //alert("Je démarre inscription");

    var Prenom = document.getElementById('txtPrenom').value;

    EnfantASauver.setPrenom(Prenom);

    if (EnfantASauver.getPrenom() == "") {
        alert("Il faut écrire ton prénom !");
        return;
    }

    if (EnfantASauver.getSexe() == null) {
        alert("Il faut choisir ton sexe !");
        return;
    }

    if(EnfantASauver.getAvatar() == null) {
        alert("Il faut choisir ton avatar !");
        return;
    }

    EnfantASauver.setNombrePiece(10);
    EnfantASauver.setBestPong(0);
    sauvegarde();

    //alert("Je termine inscription");
}

function sauvegarde()
{
    var monobjet  = {
        Prenom : EnfantASauver.getPrenom(),
        Avatar : EnfantASauver.getAvatar(),
        Sexe : EnfantASauver.getSexe(),
        NombrePiece : EnfantASauver.getNombrePiece(),
        BestPong : EnfantASauver.getBestPong()
    };

    var monObjetJSON = JSON.stringify(monobjet);
    localStorage.setItem(EnfantASauver.getPrenom(), monObjetJSON);

    document.location.href = "Jeux.html?Prenom=" + EnfantASauver.getPrenom();
}

function afficherAvatars(sexe)
{
    var divAvatar = document.getElementById("avatar");
    divAvatar.innerHTML = ""; // On vide le div contenant les images

    if(sexe == 'F')
    {
        document.getElementById('rdbGarcon').className = "btn btn-primary";
        for(i = 1; i < 6; i++)
        {
            var monImageFille = new Image();
            monImageFille.addEventListener('mousedown', choixAvatar, false);
            monImageFille.id = "avatar" + i.toString();
            monImageFille.src = "Avatars/TuxFille0" + i.toString() + ".png";
            monImageFille.name = "TuxFille0" + i.toString() + ".png";
            divAvatar.appendChild(monImageFille);
        }
    }
    else
    {
        document.getElementById('rdbFille').className = "btn btn-primary";
        for(i = 1; i < 6; i++)
        {
            var monImageGarcon = new Image();
            monImageGarcon.addEventListener('mousedown', choixAvatar, false);
            monImageGarcon.id = "avatar" + i.toString();
            monImageGarcon.src = "Avatars/TuxGarcon0" + i.toString() + ".png";
            monImageGarcon.name = "TuxGarcon0" + i.toString() + ".png";
            divAvatar.appendChild(monImageGarcon);
        }
    }
    EnfantASauver.setSexe(sexe);
}

function choixAvatar()
{
    if(AvatarSelectionne != null)
        AvatarSelectionne.style.border = "";

    AvatarSelectionne = this;
    EnfantASauver.setAvatar(this.name);

    this.style.border = "3px solid red";
}

function recuperationPrenomUrl()
{
    var url = document.URL;
    var tabUrl = url.split("=");

    document.getElementById('txtPrenom').value = tabUrl[1];
}
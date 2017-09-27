/**
 * Created by Julien on 27/05/2015.
 */

var tabMots = [
    "agneau",       "aider",       "ail",
    "aimer",        "amie",        "ampoule",
    "angle",        "animal",      "appareil",
    "araignée",     "arrière",     "auto",
    "avec",         "avril",       "balance",
    "balançoire",   "baleine",     "banc",
    "bateau",       "beau",        "bec",
    "berceau",      "bizarre",     "blague",
    "blanc",        "bleu",        "blouse",
    "bosse",        "bouteille",   "brouillard",
    "bureau",       "bébé",        "c'est",
    "cadeau",       "cahier",      "caisse",
    "calendrier",   "camarade",    "campagne",
    "canaille",     "casquette",   "cave",
    "ceinture",     "cercle",      "cercueil",
    "cerise",       "cerise",      "chagrin",
    "chambre",      "champignon",  "chandail",
    "chante",       "chapeau",     "Charlène",
    "chatouille",   "chaud",       "chaud",
    "chemin",       "chemin",      "cheminée",
    "chemise",      "cher",        "cher",
    "cheveu",       "chevreuil",   "chez",
    "chose",        "chère",       "ciel",
    "cigogne",      "cinq",        "cinq",
    "cinéma",       "citron",      "citrouille",
    "clair",        "classe",      "classe",
    "clé",          "collier",     "consigne",
    "copain",       "copie",       "copier",
    "corbeille",    "cousin",      "coussin",
    "coussin",      "couteau",     "cravate",
    "croissant",    "crème",       "cuiller",
    "cuisinier",    "dame",        "dans",
    "demain",       "dernier",     "dernier",
    "derrière",     "dessert",     "dessin",
    "dessin",       "deux",        "diable",
    "dictée",       "difficile",   "dimanche",
    "dire",         "dormir",      "douze",
    "décembre",     "déjà",        "désert",
    "détail",       "eau",         "encore",
    "enfant",       "enfin",       "ensemble",
    "entend",       "escargot",    "facile",
    "faire",        "famille",     "farce",
    "faute",        "fauteuil",    "façade",
    "femme",        "fenouil",     "fer",
    "fermier",      "feu",         "feuillage",
    "feuille",      "feuilleton",  "figure",
    "figure",       "file",        "fille",
    "fin",          "fiole",       "flan",
    "fleur",        "fleur",       "fleur",
    "flocon",       "foire",       "forme",
    "formule",      "fou",         "frisson",
    "frère",        "fée",         "fête",
    "gagner",       "garage",      "garde",
    "gare",         "garçon",      "garçon",
    "gauche",       "genou",       "gentil",
    "gentil",       "gilet",       "glace",
    "glace",        "gland",       "glaçon",
    "gomme",        "gorge",       "goutte",
    "grand",        "grand",       "mère",
    "grenadine",    "grenouille",  "groseille",
    "grue",         "guirlande",   "gâteau",
    "haut",         "herbe",       "heure",
    "heureux",      "hier",        "hiver",
    "image",        "impossible",  "industrie",
    "insecte",      "jamais",      "janvier",
    "jaune",        "jaune",       "jeu",
    "jeudi",        "joli",        "jolie",
    "Joshua",       "jouet",       "jour",
    "laid",         "laine",       "lait",
    "lampe",        "langue",      "langue",
    "lapin",        "lapin",       "lecture",
    "leçon",        "ligne",       "limace",
    "lire",         "livre",       "lumière",
    "lune",         "lutin",       "machine",
    "magasin",      "magasin",     "magie",
    "mai",          "maille",      "maillot",
    "main",         "maintenant",  "mais",
    "maison",       "malade",      "maman",
    "manger",       "mardi",       "matin",
    "mer",          "merci",       "mercredi",
    "merle",        "merle",       "merveille",
    "minute",       "montagne",    "moulin",
    "mousse",       "mur",         "musique",
    "musique",      "mère",        "mètre",
    "médecin",      "neige",       "neuf",
    "nouilles",     "novembre",    "nuage",
    "oeuf",         "oeuf",        "offrir",
    "oignon",       "onze",        "orage",
    "orange",       "oreille",     "pain",
    "panier",       "panier",      "parents",
    "patins",       "peinture",    "peluche",
    "perle",        "peu",         "peur",
    "phoque",       "photo",       "piano",
    "pie",          "pièce",       "plage",
    "plaisir",      "plaisir",     "plan",
    "plein",        "pleurer",     "plier",
    "pluie",        "plume",       "pneu",
    "poisson",      "pommier",     "pompier",
    "portefeuille", "poussin",     "premier",
    "printemps",    "prochain",    "pâtissier",
    "père",         "quatorze",    "quinze",
    "quinze",       "radio",       "raisin",
    "raisin",       "ratatouille", "rectangle",
    "reine",        "relier",      "rentrer",
    "rentrée",      "reste",       "reçu",
    "rivière",      "rose",        "règle",
    "règle",        "réunion",     "réveil",
    "sable",        "sac",         "sage",
    "samedi",       "sapin",       "sapin",
    "saute",        "seau",        "sec",
    "seize",        "semaine",     "semaine",
    "sept",         "septembre",   "serpent",
    "service",      "serviette",   "seuil",
    "signal",       "signe",       "singe",
    "six",          "soigner",     "soleil",
    "sommeil",      "sorcier",     "sorcière",
    "souffler",     "souligner",   "souvent",
    "spécial",      "tableau",     "taille",
    "tasse",        "taupe",       "temps",
    "température",  "tempête",     "terre",
    "timbre",       "toujours",    "travail",
    "treize",       "triangle",    "vague",
    "valise",       "veille",      "vendredi",
    "vent",         "ver",         "verre",
    "vert",         "veste",       "vieux",
    "vigne",        "vingt",       "vingt",
    "vélo",         "yeux",        "zéro",
    "école",        "écureuil",    "élève",
    "éléphant",     "émail",       "éponge",
    "grand-père",   "étoile"
];

var EnfantConnecte;

window.addEventListener('load', initEventHandlers, false);

function initEventHandlers()
{
    document.getElementById('cnvPendu').style.backgroundColor = "#999";

    for(i = 0; i < motCache.length; i++)
        document.getElementById("mot1").innerHTML += "<td id=lettre"+i+">_</td>";

    document.getElementById('btnValiderLettre').addEventListener('click', verifLettre, false);

    var url = document.URL;
    var tabUrl = url.split("=");
    recuperation(tabUrl[1]);
}

function recuperation(Prenom)
{
    var monEnfantJSON = localStorage.getItem(Prenom);
    EnfantConnecte = JSON.parse(monEnfantJSON);
}

function sauvegardeEnfantConnecte()
{
    var monObjetJSON = JSON.stringify(EnfantConnecte);
    localStorage.setItem(EnfantConnecte.Prenom, monObjetJSON);
    document.getElementById('Jetons').innerHTML = "Jetons : " + EnfantConnecte.NombrePiece;
}

var random = Math.floor(Math.random() * tabMots.length);
var motCache = tabMots[random];
var trouve = 0;
var nbreEssaisPerdus = 0;
var lettresEntrees = "";

function verifLettre()
{
    var maLettre = document.getElementById('txtLettre').value;

    if(maLettre.length > 1)
        alert("Il faut entrer une seule lettre à la fois.");
    else if(!(/[A-Z]|[a-z]|[é]|[è]|[à]|[]/.test(maLettre)))
        alert("La lettre entrée est invalide.");
    else if(lettresEntrees.indexOf(maLettre) > -1)
        alert("La lettre a déjà été essayée.");
    else
    {
        trouve = 0;
        document.getElementById('txtLettre').value = "";

        for (i = 0; i < motCache.length; i++)
        {
            if(motCache[i] == maLettre)
            {
                document.getElementById("lettre" + i).innerHTML = maLettre;
                trouve = 1;
            }
        }

        if(trouve == 0)
        {
            nbreEssaisPerdus++;
            lettresEntrees += " " + maLettre;
            document.getElementById('lblLettresTentees').innerHTML = lettresEntrees;
            dessinerBonhomme();
        }
        else
        {
            var cpt = 0;
            for(i = 0; i < motCache.length; i++)
                if(document.getElementById("lettre" + i).innerHTML == motCache[i])
                    cpt++;

            if(cpt == motCache.length)
            {
                var canvas = document.getElementById('cnvPendu');
                var ctx = canvas.getContext('2d');
                ctx.fillStyle = "#005B12";
                ctx.font = "150px monospace";
                ctx.fillText("Gagné", 0, canvas.height / 2, canvas.width);
                EnfantConnecte.NombrePiece += 3;
                sauvegardeEnfantConnecte();
            }
        }
    }
}

function dessinerBonhomme()
{
    var canvas = document.getElementById('cnvPendu');
    var ctx = canvas.getContext('2d');

    switch (nbreEssaisPerdus)
    {
        case 1:
            ctx.beginPath();
            ctx.moveTo(50, 42);
            ctx.lineTo(50, 450);
            ctx.stroke();
            break;

        case 2:
            ctx.beginPath();
            ctx.moveTo(50, 42);
            ctx.lineTo(200, 42);
            ctx.stroke();
            break;

        case 3:
            ctx.beginPath();
            ctx.moveTo(50, 90);
            ctx.lineTo(100, 42);
            ctx.stroke();
            break;

        case 4:
            ctx.beginPath();
            ctx.moveTo(200, 42);
            ctx.lineTo(200, 85);
            ctx.stroke();
            break;

        case 5:
            ctx.beginPath();
            ctx.arc(200, 115, 30, 0, Math.PI * 2);
            ctx.moveTo(180, 105);
            ctx.lineTo(190, 105);
            ctx.moveTo(185, 100);
            ctx.lineTo(185, 110);

            ctx.moveTo(220, 105);
            ctx.lineTo(210, 105);
            ctx.moveTo(215, 100);
            ctx.lineTo(215, 110);

            ctx.moveTo(185, 125);
            ctx.lineTo(215, 125);
            ctx.moveTo(195, 125);
            ctx.bezierCurveTo(195, 140, 210, 145, 210, 125);
            ctx.stroke();
            break;

        case 6:
            ctx.beginPath();
            ctx.moveTo(200, 145);
            ctx.lineTo(200, 250);
            ctx.stroke();
            break;

        case 7:
            ctx.beginPath();
            ctx.moveTo(200, 250);
            ctx.lineTo(150, 300);
            ctx.stroke();
            break;

        case 8:
            ctx.beginPath();
            ctx.moveTo(200, 250);
            ctx.lineTo(250, 300);
            ctx.stroke();
            break;

        case 9:
            ctx.beginPath();
            ctx.moveTo(200, 195);
            ctx.lineTo(150, 195);
            ctx.stroke();
            break;

        case 10:
            ctx.beginPath();
            ctx.moveTo(200, 195);
            ctx.lineTo(250, 195);
            ctx.stroke();
            ctx.fillStyle = "#F00000";
            ctx.font = "150px monospace";
            ctx.fillText("Perdu", 0, canvas.height / 2, canvas.width);
            break;
    }
}
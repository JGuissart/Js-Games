/**
 * Created by Julien on 27/05/2015.
 */

var mot = new Array();

mot[0] = "coucou";
mot[1] = "Yoloo";
mot[2] = "Bonjour";

var random = Math.floor(Math.random() * mot.length);

var motATrouver = mot[random];
var motTrouve = "";

for(i=0;i<motATrouver.length;i++)
{
    document.getElementById("mot1").innerHTML += "<td id=lettre"+i+">_</td>"; 
}

document.getElementById('btnValiderLettre').addEventListener('click', verifLettre, false);

function verifLettre()
{
    var maLettre = document.getElementById('txtLettre').value;

    if(maLettre.length > 1 ||!(/[A-Z]|[a-z]/.test(maLettre)))
        alert("T'as fait de la merde petit con.");
    else
    {
        document.getElementById('txtLettre').value = "";

        for (i = 0; i < motATrouver.length; i++)
        {
            if(motATrouver[i] == maLettre)
            {
                document.getElementById("lettre"+i).innerHTML = maLettre;
            }
        }
    }
}
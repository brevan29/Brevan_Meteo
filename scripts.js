function AfficherQuimper(){
    document.getElementById("previentantquetelle").innerHTML='<div id="lieu_previ"><h2>Prévisions météo pour Quimper (29000) ou cartes</h2></div><div id="dmat"><br>demain matin<br></div><div id="dapm"><br>demain après-midi<br><br></div><div id="dsoi"><br>demain soir<br></div><div id="admat"><br>après-demain matin<br></div><div id="adapm"><br>après-demain après-midi<br></div><div id="adsoi"><br>après-demain soir<br><br></div>'
}
function AfficherBretagne(){
    document.getElementById("previentantquetelle").innerHTML='<div id="lieu_previ"><h2>Prévisions météo pour La Bretagne ou cartes</h2></div><div id="carte"><img src="https://neige.meteociel.fr/satellite/anim_ir.gif"></div>'
}
function AfficherFrance(){
    document.getElementById("previentantquetelle").innerHTML='<div id="lieu_previ"><h2>Prévisions météo pour La france ou cartes</h2></div><div id="carte"><img src="https://www.meteociel.fr/cartes_obs/pression.png"</div>'
}

function survolBouton(event){
    event.target.innerHTML="<p>Ciel bleu</p>";
}
function retourBouton(météo,id){
    if (météo=='Éclaircies'){
        document.getElementById(id).innerHTML = '<img src="https://cdn-icons-png.flaticon.com/128/1163/1163661.png" href="éclaircies"> width="100px" height="100px"';
    }
    else if (météo=='Soleil'){
        document.getElementById(id).innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/2698/2698194.png" href="soleil" width="100px" height="100px">';
    }
    else if (météo=='Pluie'){
        document.getElementById(id).innerHTML = '<img src="https://cdn-icons-png.flaticon.com/128/3262/3262912.png" href="pluie" width="100px" height="100px">';
    }
}

function retourDmat(type){
    let prevision = {
        temps : "Soleil",
        température : "14°C",
        vent : "10 km/h"
    }

    if (type=='texte'){
        document.getElementById('dmat').innerHTML='<br>'+ prevision["temps"]+'<br>'+prevision["température"]+'<br>'+prevision["temps"]+'<br>'
    }
    else if (type="retourImage"){
        retourBouton(prevision[temps],'dmat')
    }
}


function retourDapm(type){
    let prevision = {
        temps : "Soleil",
        température : "14°C",
        vent : "10 km/h"
    }

    if (type=='texte'){
        document.getElementById('dapm').innerHTML='<br>'+ prevision["temps"]+'<br>'+prevision["température"]+'<br>'+prevision["temps"]+'<br>'
    }
    else if (type="retourImage"){
        retourBouton(prevision[temps],'dapm')
    }
}


function retourDsoi(type){
    let prevision = {
        temps : "Soleil",
        température : "14°C",
        vent : "10 km/h"
    }

    if (type=='texte'){
        document.getElementById('dsoi').innerHTML='<br>'+ prevision["temps"]+'<br>'+prevision["température"]+'<br>'+prevision["temps"]+'<br>'
    }
    else if (type="retourImage"){
        retourBouton(prevision[temps],'dsoi')
    }
}


function retourADmat(type){
    let prevision = {
        temps : "Soleil",
        température : "14°C",
        vent : "10 km/h"
    }

    if (type=='texte'){
        document.getElementById('admat').innerHTML='<p><br>'+ prevision["temps"]+'<br>'+prevision["température"]+'<br>'+prevision["temps"]+'<br>'
    }
    else if (type="retourImage"){
        retourBouton(prevision[temps],'admat')
    }
}


function retourADapm(type){
    let prevision = {
        temps : "Soleil",
        température : "14°C",
        vent : "10 km/h"
    }

    if (type=='texte'){
        document.getElementById('adapm').innerHTML='<br>'+ prevision["temps"]+'<br>'+prevision["température"]+'<br>'+prevision["temps"]+'<br>'
    }
    else if (type="retourImage"){
        retourBouton(prevision[temps],'adapm')
    }
}


function retourADsoi(type){
    let prevision = {temps : "Soleil",température : "14°C",vent : "10 km/h"}

    if (type=='texte'){
        document.getElementById('adsoi').innerHTML='<br>'+ prevision["temps"]+'<br>'+prevision["température"]+'<br>'+prevision["temps"]+'<br><br><br>';
    }
    else if (type="retourImage"){
        retourBouton(prevision[temps],'adsoi');
    }
}
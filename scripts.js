let Actif=document.getElementById('Quimper')
function changervisibilite(elm){
    const AChanger=document.getElementById(elm)
    if (AChanger.style.visibility==='hidden'){
        Actif.style.visibility='hidden';
        AChanger.style.visibility='visible';}
        Actif=AChanger;
}
let Actif2 = 'Horoscope'
function changervisibiliteTenplus(elm){
    if (document.getElementById(elm).style.visibility==='hidden'){
        document.getElementById(Actif2).style.visibility='hidden';
        document.getElementById(elm).style.visibility='visible';
        // Ajustement de la taille de toutes les pages en + pour rendre plus jouli
        document.getElementById(elm).style.height = 'fit-content';
        const heiyt = document.getElementById(elm).offsetHeight;
        let divs = document.getElementsByClassName("en-plus")
        for (i=0; i<divs.length; i++){
            divs[i].style.height = heiyt.toString()+'px'
        }}
    let divs = ["Automne", "Eté", "Hiver", "Printemps", "QuatreSaisons", "Bouttons"]
    if (elm==='Horoscope'){
            document.getElementById('Horoscope').style.padding = '20px 0px 0px 20px'
            saisonAffichee.style.visibility = 'visible'
            document.getElementById('Bouttons').style.visibility = 'visible'
            let truc = 'truc'
        }
    if (Actif2==='Horoscope'){
        document.getElementById('Horoscope').style.padding = '0px'
        for (i=0; i<6; i++){
            let truc = 'truc'
            document.getElementById(divs[i]).style.visibility = 'hidden'
        }
    }

    Actif2 = elm;
}


function fixNav(){
    if(window.scrollY > nav.offsetHeight + 25){
        nav.classList.add('active')
        titre.style.width='136px'
        mto.style.width=(nav.offsetWidth-140).toString()+'px'
    }
    else{
        nav.classList.remove('active')
        titre.style.width='188px'
        mto.style.width=(nav.offsetWidth-192).toString()+'px'
    }
}
function creerTemps(quand, temps){
    console.log(quand)
let échéance = getElementsById(quand).getElementsByTagName('img')
let extension = ".png"
if (temps === "Soleil"){extension = '.svg'}
échéance.src="Images/"+temps+extension
}

if (window.innerWidth<=500){
    let image = (window.innerWidth-30)/3;
    document.getElementById('Quimper').style.height=(image*3+63).toString()+'px';
    document.getElementById('BZH').style.height=(image*3+63).toString()+'px';
    document.getElementById('France').style.height=(image*3+63).toString()+'px';
    document.getElementById('Quimper').style.overflow="hidden";
    document.getElementById('BZH').style.overflow="hidden";
    document.getElementById('France').style.overflow="hidden";
}

let saisonAffichee = document.getElementById('Eté')
function ChangerDeSaison(elm){
    let saison = document.getElementById(elm)
    saisonAffichee.style.visibility='hidden';
    saison.style.visibility='visible';
    saisonAffichee=saison;
}


const mto = document.querySelector('.meteo_du_jour')
const titre = document.querySelector('#titre')
const nav = document.querySelector('#entete')
window.addEventListener('scroll', fixNav);

const heiyt = document.getElementById('Horoscope').offsetHeight;
let divs = document.getElementsByClassName("en-plus")
for (i=0; i<divs.length; i++){
    divs[i].style.height = heiyt.toString()+'px'
}

const quands = ["dmat", "dapm", "dsoi","admat", "adapm", "adsoi","ddmat", "ddapm", "ddsoi"];
let request = new XMLHttpRequest();
request.open("GET", "./météo.json");
request.responseType = "json";
request.send();
request.onload = function () {
    var previ = request.response;
    Traitement(previ)}

function Traitement(previ){
    let minidiv = document.getElementsByClassName('image');
    let Matin = document.getElementById("ImgMatin");
    let Aprem = document.getElementById("ImgApm");
    let Soir = document.getElementById("ImgSoir");
    for(i=0; i<quands.length; i++){
        //Récupération de la prévision le jour.
        if (i<3){
            let previprécise = previ.demain;
            if (quands[i].slice(1)=== "mat"){
                console.log(Matin)
                let previplusprécise = previprécise.matin;
                const Mto = previplusprécise.Temps
                minidiv[i].src = './Images/'+Mto+'.png'
                Matin.src = './Images/'+Mto+'.png'
            }
            else if (quands[i].slice(1)=== "apm"){
                let previplusprécise = previprécise.aprèsmidi;
                const Mto = previplusprécise.Temps
                minidiv[i].src = './Images/'+Mto+'.png'
                Aprem.src = './Images/'+Mto+'.png'
            }
            else if (quands[i].slice(1)=== "soi"){
                let previplusprécise = previprécise.soir;
                const Mto = previplusprécise.Temps
                minidiv[i].src = './Images/'+Mto+'.png'
                Soir.src = './Images/'+Mto+'.png'
            }
        }
        else if (i>=3 && i<6){
            let previprécise = previ.aprèsdemain;
            if (quands[i].slice(2)=== "mat"){
                let previplusprécise = previprécise.matin;
                minidiv[i].src = './Images/'+previplusprécise.Temps+'.png'
            }
            else if (quands[i].slice(2)=== "apm"){
                let previplusprécise = previprécise.aprèsmidi;
                minidiv[i].src = './Images/'+previplusprécise.Temps+'.png'
            }
            else if (quands[i].slice(2)=== "soi"){
                let previplusprécise = previprécise.soir;
                minidiv[i].src = './Images/'+previplusprécise.Temps+'.png'
            }
        }
        else if (i>=6){
            let previprécise = previ.aprèsaprèsdemain;
            if (quands[i].slice(2)=== "mat"){
                let previplusprécise = previprécise.matin;
                minidiv[i].src = './Images/'+previplusprécise.Temps+'.png'
            }
            else if (quands[i].slice(2)=== "apm"){
                let previplusprécise = previprécise.aprèsmidi;
                minidiv[i].src = './Images/'+previplusprécise.Temps+'.png'
            }
            else if (quands[i].slice(2)=== "soi"){
                let previplusprécise = previprécise.soir;
                minidiv[i].src = './Images/'+previplusprécise.Temps+'.png'
            }
        }
    };}

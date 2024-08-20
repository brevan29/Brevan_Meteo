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
    if (elm==='Horoscope' && Actif2!='Horoscope'){
            document.getElementById('Horoscope').style.padding = '20px 0px 0px 20px'
            saisonAffichee.style.visibility = 'visible'
            document.getElementById('Bouttons').style.visibility = 'visible'
            let truc = 'truc'
        }
    if (Actif2==='Horoscope' && elm!='Horoscope'){
        document.getElementById('Horoscope').style.padding = '0px'
        for (i=0; i<6; i++){
            document.getElementById(divs[i]).style.visibility = 'hidden'
        }
    }

    Actif2 = elm;
}


function fixNav(){
    if(window.scrollY > nav.offsetHeight + 25){
        nav.classList.add('active')
        titre.style.height='90px'
        titre.style.width='90px'
        mto.style.height='90px'
        mto.style.width=(nav.offsetWidth-92).toString()+'px'
        document.getElementById('lieu').innerHTML = ""
        for (i=0; i<3; i++){
            previdujour[i].style.height = '90px'
        }
        previdujour[2].style.borderRadius = '0px 20px 20px 0px'
    }
    else{
        nav.classList.remove('active')
        titre.style.height='188px'
        titre.style.width='188px'
        mto.style.height='190px'
        mto.style.width=(nav.offsetWidth-190).toString()+'px'
        document.getElementById('lieu').innerHTML = "Météo du jour pour Quimper"
        for (i=0; i<3; i++){
            previdujour[i].style.height = 'auto'
        }
        previdujour[2].style.borderRadius = '0px 0px 20px 0px'
    }
}
function creerTemps(quand, temps){
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
const previdujour = document.getElementsByClassName('ajd')
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
    let Txt = document.getElementsByClassName("txt-mto")
    let AEcrire=document.getElementsByClassName('Write')
    for(i=0; i<quands.length; i++){
        //Récupération de la prévision le jour.
        if (i<3){
            let previprécise = previ.demain;
            if (quands[i].slice(1)=== "mat"){
                let previplusprécise = previprécise.matin;
                const Mto = previplusprécise.Temps
                minidiv[i].src = './Images/'+Mto+'.png'
                Matin.src = './Images/'+Mto+'.png'
                AEcrire[0].innerHTML = "<p>"+Mto+'<br>'+previplusprécise.Température.toString()+'°C<br></p>'
                Txt[0].innerHTML = '<p>'+Mto+'<br>'+previplusprécise.Température.toString()+'°C<br></p>'
                if (Number.isInteger(previplusprécise.Vent)) {
                    Txt[0].innerHTML='<p>'+Mto+'<br>'+previplusprécise.Température.toString()+'°C<br>'+previplusprécise.Vent.toString()+'km/h</p>'; 
                    AEcrire[0].innerHTML = '<p>'+Mto+'<br>'+previplusprécise.Température.toString()+'°C<br>'+previplusprécise.Vent.toString()+'km/h</p>'}
            }
            else if (quands[i].slice(1)=== "apm"){
                let previplusprécise = previprécise.aprèsmidi;
                const Mto = previplusprécise.Temps
                minidiv[i].src = './Images/'+Mto+'.png'
                Aprem.src = './Images/'+Mto+'.png'
                Txt[1].innerHTML = '<p>'+Mto+'<br>'+previplusprécise.Température.toString()+'°C</p>'
                AEcrire[1].innerHTML = '<p>'+Mto+'<br>'+previplusprécise.Température.toString()+'°C<br></p>'
                if (Number.isInteger(previplusprécise.Vent)) 
                    {Txt[1].innerHTML='<p>'+Mto+'<br>'+previplusprécise.Température.toString()+'°C<br>'+previplusprécise.Vent.toString()+'km/h</p>';
                    AEcrire[1].innerHTML = '<p>'+Mto+'<br>'+previplusprécise.Température.toString()+'°C<br>'+previplusprécise.Vent.toString()+'km/h</p>'}
            }
            else if (quands[i].slice(1)=== "soi"){
                let previplusprécise = previprécise.soir;
                const Mto = previplusprécise.Temps
                minidiv[i].src = './Images/'+Mto+'.png'
                Soir.src = './Images/'+Mto+'.png'
                Txt[2].innerHTML = '<p>'+Mto+'<br>'+previplusprécise.Température.toString()+'°C<br></p>'
                AEcrire[2].innerHTML = '<p>'+Mto+'<br>'+previplusprécise.Température.toString()+'°C<br></p>'
                if (Number.isInteger(previplusprécise.Vent)) {
                    Txt[2].innerHTML='<p>'+Mto+'<br>'+previplusprécise.Température.toString()+'°C<br>'+previplusprécise.Vent.toString()+'km/h</p>';
                    AEcrire[2].innerHTML = '<p>'+Mto+'<br>'+previplusprécise.Température.toString()+'°C<br>'+previplusprécise.Vent.toString()+'km/h</p>'}
            }
        }
        else if (i>=3 && i<6){
            let previprécise = previ.aprèsdemain;
            if (quands[i].slice(2)=== "mat"){
                let previplusprécise = previprécise.matin;
                const Mto = previplusprécise.Temps
                minidiv[i].src = './Images/'+Mto+'.png'
                AEcrire[i].innerHTML = '<p>'+Mto+'<br>'+previplusprécise.Température.toString()+'°C<br></p>'
                if (Number.isInteger(previplusprécise.Vent)) {AEcrire[i].innerHTML = '<p>'+Mto+'<br>'+previplusprécise.Température.toString()+'°C<br>'+previplusprécise.Vent.toString()+'km/h</p>'}
            }
            else if (quands[i].slice(2)=== "apm"){
                let previplusprécise = previprécise.aprèsmidi;
                const Mto = previplusprécise.Temps
                minidiv[i].src = './Images/'+Mto+'.png'
                AEcrire[i].innerHTML = '<p>'+Mto+'<br>'+previplusprécise.Température.toString()+'°C<br></p>'
                if (Number.isInteger(previplusprécise.Vent)) {AEcrire[i].innerHTML = '<p>'+Mto+'<br>'+previplusprécise.Température.toString()+'°C<br>'+previplusprécise.Vent.toString()+'km/h</p>'}
            }
            else if (quands[i].slice(2)=== "soi"){
                let previplusprécise = previprécise.soir;
                const Mto = previplusprécise.Temps
                minidiv[i].src = './Images/'+Mto+'.png'
                AEcrire[i].innerHTML = '<p>'+Mto+'<br>'+previplusprécise.Température.toString()+'°C<br></p>'
                if (Number.isInteger(previplusprécise.Vent)) {AEcrire[i].innerHTML = '<p>'+Mto+'<br>'+previplusprécise.Température.toString()+'°C<br>'+previplusprécise.Vent.toString()+'km/h</p>'}
            }
        }
        else if (i>=6){
            let previprécise = previ.aprèsaprèsdemain;
            if (quands[i].slice(2)=== "mat"){
                let previplusprécise = previprécise.matin;
                const Mto = previplusprécise.Temps
                minidiv[i].src = './Images/'+Mto+'.png'
                AEcrire[i].innerHTML = '<p>'+Mto+'<br>'+previplusprécise.Température.toString()+'°C<br></p>'
                if (Number.isInteger(previplusprécise.Vent)) {AEcrire[i].innerHTML = '<p>'+Mto+'<br>'+previplusprécise.Température.toString()+'°C<br>'+previplusprécise.Vent.toString()+'km/h</p>'}
            }
            else if (quands[i].slice(2)=== "apm"){
                let previplusprécise = previprécise.aprèsmidi;
                const Mto = previplusprécise.Temps
                minidiv[i].src = './Images/'+Mto+'.png'
                AEcrire[i].innerHTML = '<p>'+Mto+'<br>'+previplusprécise.Température.toString()+'°C<br></p>'
                if (Number.isInteger(previplusprécise.Vent)) {AEcrire[i].innerHTML = '<p>'+Mto+'<br>'+previplusprécise.Température.toString()+'°C<br>'+previplusprécise.Vent.toString()+'km/h</p>'}
            }
            else if (quands[i].slice(2)=== "soi"){
                let previplusprécise = previprécise.soir;
                const Mto = previplusprécise.Temps
                minidiv[i].src = './Images/'+Mto+'.png'
                AEcrire[i].innerHTML = '<p>'+Mto+'<br>'+previplusprécise.Température.toString()+'°C<br></p>'
                if (Number.isInteger(previplusprécise.Vent)) {AEcrire[i].innerHTML = '<p>'+Mto+'<br>'+previplusprécise.Température.toString()+'°C<br>'+previplusprécise.Vent.toString()+'km/h</p>'}
            }
        }
    };}

if (window.innerHeight > window.innerWidth){
    let enplus = document.getElementsByClassName('.enplus')
    for (i=0; i<enplus.length; i++){
        enplus[i].style.fontSize = '27px'
    }
    let ecrire = document.getElementsByClassName('Write')
    for (i=0; i<ecrire.length; i++){
        ecrire[i].style.fontSize = '15px'
        ecrire[i].style.paddingRight = '30px'
    }
    let gauche= document.getElementById('gauche')
    gauche.style.gridArea = "4 / 1 / 4 /span 2"
    let droite = document.getElementById('droite')
    droite.style.gridArea = "5 / 1 / 5 /span 2"
    }

    let Requete = new XMLHttpRequest();
    Requete.open("GET", "./supplementaire.json");
    Requete.responseType = "json";
    Requete.send();
    Requete.onload = function () {
        var donnees = Requete.response;
        Affichage(donnees)}

function Affichage(donnees){
    document.getElementById("Belier").innerHTML = '<span style="font-weight: bold; color: var(--violet-brevan-fonce);">Bélier : </span>'+donnees.Horoscope.Belier
    document.getElementById("Taureau").innerHTML = '<span style="font-weight: bold; color: var(--violet-brevan-fonce);">Taureau : </span>'+donnees.Horoscope.Taureau
    document.getElementById("Gemeaux").innerHTML = '<span style="font-weight: bold; color: var(--violet-brevan-fonce);">Gémeaux : </span>'+donnees.Horoscope.Gemeaux
    document.getElementById("Cancer").innerHTML = '<span style="font-weight: bold; color: var(--violet-brevan-fonce);">Cancer : </span>'+donnees.Horoscope.Cancer
    document.getElementById("Lion").innerHTML = '<span style="font-weight: bold; color: var(--violet-brevan-fonce);">Lion : </span>'+donnees.Horoscope.Lion
    document.getElementById("Vierge").innerHTML = '<span style="font-weight: bold; color: var(--violet-brevan-fonce);">Vierge : </span>'+donnees.Horoscope.Vierge
    document.getElementById("Capricorne").innerHTML = '<span style="font-weight: bold; color: var(--violet-brevan-fonce);">Capricorne : </span>'+donnees.Horoscope.Capricorne
    document.getElementById("Verseau").innerHTML = '<span style="font-weight: bold; color: var(--violet-brevan-fonce);">Verseau : </span>'+donnees.Horoscope.Verseau
    document.getElementById("Poissons").innerHTML = '<span style="font-weight: bold; color: var(--violet-brevan-fonce);">Poissons : </span>'+donnees.Horoscope.Poissons
    document.getElementById("Balance").innerHTML = '<span style="font-weight: bold; color: var(--violet-brevan-fonce);">Balance : </span>'+donnees.Horoscope.Balance
    document.getElementById("Scorpion").innerHTML = '<span style="font-weight: bold; color: var(--violet-brevan-fonce);">Scorpion : </span>'+donnees.Horoscope.Scorpion
    document.getElementById("Sagittaire").innerHTML = '<span style="font-weight: bold; color: var(--violet-brevan-fonce);">Sagittaire : </span>'+donnees.Horoscope.Sagittaire
    document.getElementById("Date").innerHTML = '<span style="font-weight: bold; color: var(--violet-brevan-fonce);">'+donnees.Ephemeride.Date+'</span>'
    document.getElementById("Saint").innerHTML = '<span style="font-weight: bold; color: var(--violet-brevan-fonce);">Saint(e) </span>'+donnees.Ephemeride.Saint
    document.getElementById("Lever").innerHTML = '<span style="font-weight: bold; color: var(--violet-brevan-fonce);">Lever du Soleil : </span>'+donnees.Ephemeride.Lever
    document.getElementById("Coucher").innerHTML = '<span style="font-weight: bold; color: var(--violet-brevan-fonce);">Coucher du Soleil : </span>'+donnees.Ephemeride.Coucher
    document.getElementById("Lune").innerHTML = '<span style="font-weight: bold; color: var(--violet-brevan-fonce);">Phase de la Lune : </span>'+donnees.Ephemeride.Lune
}
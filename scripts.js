var Actif=document.getElementById('Quimper')
function changervisibilite(elm){
    const AChanger=document.getElementById(elm)
    if (AChanger.style.visibility=='hidden'){
        Actif.style.visibility='hidden';
        AChanger.style.visibility='visible';}
        Actif=AChanger;
}
var Actif2=document.getElementById('Horoscope')
function changervisibiliteTenplus(elm){
    const AChanger=document.getElementById(elm)
    if (AChanger.style.visibility=='hidden'){
        AChanger.style.visibility='visible';}
        Actif2.style.visibility='hidden';
        Actif2=AChanger;
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
let ech_soleil = document.getElementsByClassName("Soleil")
for (i=0; i < ech_soleil.length; i++){
    ech_soleil[i].innerHTML('<img src="Images/Soleil.svg">')
}

if (window.innerWidth<=500){
    var image = (window.innerWidth-30)/3;
    document.getElementById('Quimper').style.height=(image*3+63).toString()+'px';
    document.getElementById('BZH').style.height=(image*3+63).toString()+'px';
    document.getElementById('France').style.height=(image*3+63).toString()+'px';
    document.getElementById('Quimper').style.overflow="hidden";
    document.getElementById('BZH').style.overflow="hidden";
    document.getElementById('France').style.overflow="hidden";
}

const mto = document.querySelector('.meteo_du_jour')
const titre = document.querySelector('#titre')
const nav = document.querySelector('#entete')
window.addEventListener('scroll', fixNav);
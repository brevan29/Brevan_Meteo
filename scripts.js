var Actif=document.getElementById('Quimper')
function changervisibilite(elm){
    const AChanger=document.getElementById(elm)
    if (AChanger.style.visibility=='hidden'){
        AChanger.style.visibility='visible';}
        Actif.style.visibility='hidden';
        Actif=AChanger;
}

function fixNav(){
    if(window.scrollY > nav.offsetHeight + 25){
        nav.classList.add('active')
        titre.style.width='136px'
        mto.style.width=(nav.offsetWidth-136).toString()+'px'
        // matin.style.width=((nav.offsetWidth-136)/3).toString()+'px'
        // apm.style.width=((nav.offsetWidth-136)/3).toString()+'px'
        // soir.style.width=(mto.offsetWidth-matin.offsetWidth-apm.offsetWidth).toString()+'px'
    }
    else{
        nav.classList.remove('active')
        titre.style.width='188px'
        mto.style.width=(nav.offsetWidth-190).toString()+'px'
        // matin.style.width=((nav.offsetWidth-136)/3).toString()+'px'
        // apm.style.width=((nav.offsetWidth-136)/3).toString()+'px'
        // soir.style.width=(mto.offsetWidth-matin.offsetWidth-apm.offsetWidth).toString()+'px'
    }
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
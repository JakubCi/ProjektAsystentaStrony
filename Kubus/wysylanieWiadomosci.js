
var lines;
const tekst=document.querySelector("input[name='TekstWpisywany1']")

const przycisk1=document.querySelector("input[name='wyslij']")
przycisk1.addEventListener('click',wysylanie)

const KontenerNaWiadomosciBot=document.querySelector("div[name='OdpowiedzBota1']")

const KontenerNaWiadomosciUz=document.querySelector("div[name='OdpowiedzUz1']")


przycisk1.addEventListener('click',countln)


function countln(){
    let linia;
    var el = document.querySelector("div[name='OdpowiedzUz1']")
    var divHeight = el.offsetHeight
    var lineHeight = parseInt(el.style.lineHeight);
    lines = divHeight / 20;
    linia = lines;
    
}

function wysylanie(){
    Wpisana=tekst.value;
    if(Wpisana=="XD"){
        
        KontenerNaWiadomosciUz.innerHTML+="<br>"+tekst.value;
        alert(lines);
        ostatniaLinia = lines;
        for(let i=0;i<=lines;i++){
            KontenerNaWiadomosciBot.innerHTML+="<br>"+"Arek to debil";

        }
        divHeight=0;
    lines=0;
    }
    else{
        KontenerNaWiadomosciUz.innerHTML+="<br>"+tekst.value;


    }
    
    
    tekst.value="";
    
   
}

//To Odpowiada Za animacje Rozwijania I zwijania
let Opened=false;
let CzyAnimacjaGra = false;
const przyciskWlaczenia=document.querySelector("input[name=przyciskRozwijania1]");
przyciskWlaczenia.addEventListener('click',AnimationController);

function AnimationController(){
    

    const AnimacjaKontenera=document.querySelector("div[name='nameKontener']");
    const AnimacjaRozwiniecia=document.querySelector("input[name='przyciskRozwijania1']");

        if(Opened == false && CzyAnimacjaGra == false){
            Opened = true;
            AnimacjaKontenera.style.animation='animacja 0.2s linear';
            AnimacjaKontenera.style.animationFillMode = "forwards";
            AnimacjaRozwiniecia.style.animation='animacjaRozwijanie1 0.2s linear';
            AnimacjaRozwiniecia.style.animationFillMode = "forwards";
            przyciskWlaczenia.value="Zwin";
            
            
        }else if(Opened == true && CzyAnimacjaGra == false){
            Opened = false;
            AnimacjaKontenera.style.animation='animacja2 0.2s linear';
            AnimacjaKontenera.style.animationFillMode = "forwards";
            AnimacjaRozwiniecia.style.animation='animacjaRozwijanie2 0.2s linear';
            AnimacjaRozwiniecia.style.animationFillMode = "forwards";
            przyciskWlaczenia.value="Rozwin";
        }


}
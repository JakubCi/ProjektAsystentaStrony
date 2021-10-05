//To Odpowiada Za animacje Rozwijania I zwijania
let Opened=false;
let CzyAnimacjaGra = false;
const przyciskWlaczenia=document.querySelector("button[name=przyciskRozwijania1]");
przyciskWlaczenia.addEventListener('click',AnimationController);



function AnimationController(){
    

    const AnimacjaKontenera=document.querySelector("div[name='nameKontener']");
    

        if(Opened == false && CzyAnimacjaGra == false){
            Opened = true;
            AnimacjaKontenera.style.animation='animacja 0.8s linear';
            AnimacjaKontenera.style.animationFillMode = "forwards";
        }else if(Opened == true && CzyAnimacjaGra == false){
            Opened = false;
            AnimacjaKontenera.style.animation='animacja2 0.8s linear';
            AnimacjaKontenera.style.animationFillMode = "forwards";
        }


}
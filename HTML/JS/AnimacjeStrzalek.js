//To Odpowiada Za animacje Rozwijania I zwijania



function AnimationControllerMenu(){
    

    const AnimacjaStrzalkiMenu=document.querySelector("img[name='StrzalMenu']");
   

        
            Opened = true;
            AnimacjaStrzalkiMenu.style.animation='animacjaPojawiania 1s linear';
            AnimacjaStrzalkiMenu.style.animationFillMode = "forwards";
            AnimacjaStrzalkiMenu.style.animation='animacjaZnikania 1s linear';
            AnimacjaStrzalkiMenu.style.animationFillMode = "forwards";
            
        


}



// function AnimationControllerMenu(){
    

//     const AnimacjaStrzalkiMenu=document.querySelector("div[name='nameKontener']");
   

//         if(Opened == false ){
//             Opened = true;
//             AnimacjaKontenera.style.animation='animacja 0.2s linear';
//             AnimacjaKontenera.style.animationFillMode = "forwards";
//             AnimacjaRozwiniecia.style.animation='animacjaRozwijanie1 0.2s linear';
//             AnimacjaRozwiniecia.style.animationFillMode = "forwards";
//             przyciskWlaczenia.value="Zwin";
            
            
//         }else if(Opened == true ){
//             Opened = false;
//             AnimacjaKontenera.style.animation='animacja2 0.2s linear';
//             AnimacjaKontenera.style.animationFillMode = "forwards";
//             AnimacjaRozwiniecia.style.animation='animacjaRozwijanie2 0.2s linear';
//             AnimacjaRozwiniecia.style.animationFillMode = "forwards";
//             przyciskWlaczenia.value="Rozwin";
//         }


// }



// function AnimationControllerMenu(){
    

//     const AnimacjaStrzalkiMenu=document.querySelector("div[name='nameKontener']");
   

//         if(Opened == false ){
//             Opened = true;
//             AnimacjaKontenera.style.animation='animacja 0.2s linear';
//             AnimacjaKontenera.style.animationFillMode = "forwards";
//             AnimacjaRozwiniecia.style.animation='animacjaRozwijanie1 0.2s linear';
//             AnimacjaRozwiniecia.style.animationFillMode = "forwards";
//             przyciskWlaczenia.value="Zwin";
            
            
//         }else if(Opened == true ){
//             Opened = false;
//             AnimacjaKontenera.style.animation='animacja2 0.2s linear';
//             AnimacjaKontenera.style.animationFillMode = "forwards";
//             AnimacjaRozwiniecia.style.animation='animacjaRozwijanie2 0.2s linear';
//             AnimacjaRozwiniecia.style.animationFillMode = "forwards";
//             przyciskWlaczenia.value="Rozwin";
//         }


// }
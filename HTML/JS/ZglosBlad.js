
    let button=document.querySelector("button[id='przyciskBlad']")

    button.addEventListener('click',Zglos);


    let Otwarte = false

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }


    async function Zglos(){
        let DivCont=document.querySelector("div[class='blad']")


        if(Otwarte==false){
            Otwarte = true;
            console.log("XD")
            DivCont.style.animation='animacjaZGLOS 1.5s linear';
            DivCont.style.animationFillMode = "forwards";

            DivCont.style.display = 'block';

        }else if (Otwarte == true){
            Otwarte = false;
            DivCont.style.animation='animacjaZGLOS2 1.5s linear';
            DivCont.style.animationFillMode = "forwards";

            await sleep(1500);
            DivCont.style.display = 'none';

        }


}
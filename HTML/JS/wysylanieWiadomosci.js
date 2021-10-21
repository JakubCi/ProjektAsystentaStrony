let sprawdz=false;
let tekstwpisywany;
let wybranaplec = false;

function Usuwanie(){

  $(".PrzyciskWyslij").remove();  
    guzik();
}
function guzik(){

    let dodaj='<input type="image" src="Zdjecia/Wysyłanie.jpg" class="PrzyciskWyslij"name="wyslij"id="jakiesid"onclick="Usuwanie()">';
    if($("#TekstWpisywany").val().length == 0&&sprawdz==true){
        sprawdz=false;
        $(".PrzyciskWyslij").remove();
        
    }
    else if($("#TekstWpisywany").val().length != null&&sprawdz==false){
        sprawdz=true;
        $("#KontenerNaTekst1").append(dodaj);
        UstawianiePrzycisku();
    }
}


function UstawianiePrzycisku(){

    const przycisk1=document.querySelector("input[name='wyslij']")
    przycisk1.addEventListener('click',Odpowiedz)
    przycisk1.addEventListener('click',Usuwanie)
}

function Odpowiedz1(tekstwpisywany) {

    let OdpowiedzBota  = WiadomosciBota(tekstwpisywany);
    let Odpowiedzbot = '<div class="OdpowiedzBota" name="OdpowiedzBota1"id="OdpowiedzBota2"><p class="WiadomosciBota1"><span>' + OdpowiedzBota + '</span></p></div>';
    $("#KontenerNaWiadomosci2").append(Odpowiedzbot);

    var scrollowanie = document.getElementById("KontenerNaWiadomosci2");
    scrollowanie.scrollTop = scrollowanie.scrollHeight;

}

function Odpowiedz(){
    
    tekstwpisywany=$("#TekstWpisywany").val().toLowerCase();
    if(tekstwpisywany == ""){
        przycisk1.disabled = true;
    }
    

    let Odpowiedzuzytk = '<div class="OdpowiedzUz" name="OdpowiedzUz1"id="OdpowiedzUz2"><p class="tekstwpisywany"><span>'+tekstwpisywany+'</span></p><div>';
    
    $("#TekstWpisywany").val("");
    $("#KontenerNaWiadomosci2").append(Odpowiedzuzytk);

    var scrollowanie = document.getElementById("KontenerNaWiadomosci2");
    scrollowanie.scrollTop = scrollowanie.scrollHeight;
    setTimeout(() => {
        Odpowiedz1(tekstwpisywany)
    },500)

    
}



tekstwpisywany=$("#TekstWpisywany").val();
function WiadomosciBota(tekst) {
   
        
        while(wybranaplec == false && tekst.includes(SzukanieKeyWord(Plcie)) == false){

            return "XD deklu masz takie proste zadanie";

        }
        if(tekst.includes(SzukanieKeyWord(Plcie))==true && wybranaplec==false){
            wybranaplec=true;
            return PrzeszukiwaniePlikuTablica(Plcie);
        }

        if(tekst.includes(SzukanieKeyWord2(Gdzie)) == true){
                    
            return PrzeszukiwaniePlikuWWTablice();

        }else{
            return "XD"
        }
        

   

}


$("#TekstWpisywany").keypress(function (e) {
    if (e.which == 13) {
        Odpowiedz();
        Usuwanie();
    }
});



//TUTAJ BĘDZIE BAZA FRAZ I BAZA ODPOWIEDZI BOTA 
const Gdzie = [

    ["gdzie","menu","kupić","arek"]




];

const Plcie = ["mężczyzna","mezczyzna","kobieta","niezidentyfikowane"];


function SzukanieKeyWord(TablicaZmiennych = []){

    let i;
    for (i = 0; i < TablicaZmiennych.length; i++) {
            if(tekstwpisywany.includes(TablicaZmiennych[i])){
                return TablicaZmiennych[i];
            
            
    }

}
}

function SzukanieKeyWord2(TablicaZmiennych2 = [[]]){
    let i;
    let j;
    for (i = 0; i < TablicaZmiennych2.length; i++) {
        for (j =1; j < TablicaZmiennych2[i].length; j++) {
            if(tekstwpisywany.includes(TablicaZmiennych2[i][0]) == true && tekstwpisywany.includes(TablicaZmiennych2[0][j]) == true){

                return TablicaZmiennych2[i][j];        
            }
                
        }
            

            
    }

}
    

tekstwpisywany=$("#TekstWpisywany").val();
function PrzeszukiwaniePlikuTablica(pattern){
        let value = 0;
        var contains;

           $.ajax({
                url: "XD.txt",
                type: 'get',
                dataType: 'text',
                async: false,
                success: function(Data) {
                    contains = Data.split("\r\n");
                    if(tekstwpisywany.includes(pattern[0])){
                        IndexCon = contains.indexOf("Powitania");
                        contains = contains[IndexCon+1];
                    }else if(tekstwpisywany.includes(pattern[2])){
                        IndexCon = contains.indexOf("Powitania");
                        contains = contains[IndexCon+2];
                    }
                    else if(tekstwpisywany.includes(pattern[1])){
                        IndexCon = contains.indexOf("Powitania");
                        contains = contains[IndexCon+1];
                    }
                } 
            });
            console.log("XD")
            return contains;
                 
                
            
            
         
        
}
tekstwpisywany=$("#TekstWpisywany").val();
function PrzeszukiwaniePlikuWWTablice(){
    var contains;
            $.ajax({
                url: "XD.txt",
                type: 'get',
                dataType: 'text',
                async: false,
                success: function(Data) {
                    contains = Data.split("\r\n");
                    if(tekstwpisywany.includes("menu")){
                        IndexCon = contains.indexOf("gdzie");
                        contains = contains[IndexCon+1];
                        
                            AnimationControllerMenu();
                        
                    }else if(tekstwpisywany.includes("kupić")){
                        IndexCon = contains.indexOf("gdzie");
                        contains = contains[IndexCon+2];
                    }else if(tekstwpisywany.includes("arek")){
                        IndexCon = contains.indexOf("gdzie");
                        contains = contains[IndexCon+3];
                    }            
                } 
             });

             return contains;
             
            
        
        
     
    
}
































// function PrzeszukiwaniePlikuTablica(target,pattern){
//     let value = 0;
//     var contains;
//     var randomNumber;
    
//         pattern.forEach(function(word){
//             value = value+target.includes(word);
//         });
//         if(value == 1){
       
//             $.ajax({
//                 url: "XD.txt",
//                 type: 'get',
//                 dataType: 'text',
//                 async: false,
//                 success: function(Data) {
//                     contains = Data.split("\r\n");
//                     if(pattern == Powitanie ){
//                         IndexCon = contains.indexOf("Powitania");
//                         randomNumber = Math.floor(Math.random() * (2 - 1) + 1);
//                         contains = contains[IndexCon+randomNumber];

//                     }
//                 } 
//              });
//              console.log("XD")
//              return contains;
             
            
        
        
//      }
    
// }




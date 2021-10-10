let sprawdz=false;
let tekstwpisywany;
function Usuwanie(){

  $(".PrzyciskWyslij").remove();  
    guzik();
}
function guzik(){

    let dodaj='<input type="button" value="Wyslij!"class="PrzyciskWyslij"name="wyslij"id="jakiesid"onclick="Usuwanie()">';
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
}

function Odpowiedz1(tekstwpisywany) {
    let OdpowiedzBota  = WiadomosciBota(tekstwpisywany);
    let Odpowiedzbot = '<div class="OdpowiedzBota" name="OdpowiedzBota1"id="OdpowiedzBota2"><p class="WiadomosciBota1"><span>' + OdpowiedzBota + '</span></p></div>';
    $("#KontenerNaWiadomosci2").append(Odpowiedzbot);

    var scrollowanie = document.getElementById("KontenerNaWiadomosci2");
    scrollowanie.scrollTop = scrollowanie.scrollHeight;

}

function Odpowiedz(){
    tekstwpisywany=$("#TekstWpisywany").val();
    if(tekstwpisywany == ""){
        tekstwpisywany = "Nie Lubie Gotować"
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




function WiadomosciBota(tekst) {

    
    if (tekst == "witaj") {
        return "Cześć! W czym mogę pomóc?";
    }
    else if(tekst == SzukanieKeyWord(Powitanie)){
        
        return PrzeszukiwaniePlikuTablica(tekstwpisywany,Powitanie);
    }
    else if(tekst.includes(SzukanieKeyWord2(Gdzie)) == true){
        Gdz = true
        return PrzeszukiwaniePlikuWWTablice();
    }
   

}


$("#TekstWpisywany").keypress(function (e) {
    if (e.which == 13) {
        Odpowiedz();
        Usuwanie();
    }
});



//TUTAJ BĘDZIE BAZA FRAZ I BAZA ODPOWIEDZI BOTA 
const Powitanie = ["Witam","Siema","Dzień Dobry"];
const Gdzie = [

    ["Gdzie","Menu","Kupić","Arek"]




];


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
function PrzeszukiwaniePlikuTablica(target,pattern){
        let value = 0;
        var contains;
        var randomNumber;
        
            pattern.forEach(function(word){
                value = value+target.includes(word);
            });
            if(value == 1){
           
                $.ajax({
                    url: "XD.txt",
                    type: 'get',
                    dataType: 'text',
                    async: false,
                    success: function(Data) {
                        contains = Data.split("\r\n");
                        if(pattern == Powitanie ){
                            IndexCon = contains.indexOf("Powitania");
                            randomNumber = Math.floor(Math.random() * (4 - 1) + 1);
                            contains = contains[IndexCon+randomNumber];
    
                        }
                    } 
                 });
                 console.log("XD")
                 return contains;
                 
                
            
            
         }
        
}

function PrzeszukiwaniePlikuWWTablice(){
    var contains;
            $.ajax({
                url: "XD.txt",
                type: 'get',
                dataType: 'text',
                async: false,
                success: function(Data) {
                    if(tekstwpisywany.includes("Menu")){
                        contains = Data.split("\r\n");
                        IndexCon = contains.indexOf("Gdzie");
                        contains = contains[IndexCon+1];
                    }else if(tekstwpisywany.includes("Kupić")){
                        contains = Data.split("\r\n");
                        IndexCon = contains.indexOf("Gdzie");
                        contains = contains[IndexCon+2];
                    }else if(tekstwpisywany.includes("Arek")){
                        contains = Data.split("\r\n");
                        IndexCon = contains.indexOf("Gdzie");
                        contains = contains[IndexCon+3];
                    }            
                } 
             });
             
             return contains;
             
            
        
        
     
    
}


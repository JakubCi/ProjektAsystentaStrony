let sprawdz=false;
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
    
    let tekstwpisywany=$("#TekstWpisywany").val();
    if(tekstwpisywany=="")
        tekstwpisywany="kocham gotowac";

    let Odpowiedzuzytk = '<div class="OdpowiedzUz" name="OdpowiedzUz1"id="OdpowiedzUz2"><p class="tekstwpisywany"><span>'+tekstwpisywany+'</span></p><div>';

    $("#TekstWpisywany").val("");
    $("#KontenerNaWiadomosci2").append(Odpowiedzuzytk);

    var scrollowanie = document.getElementById("KontenerNaWiadomosci2");
    scrollowanie.scrollTop = scrollowanie.scrollHeight;
    setTimeout(() => {
        Odpowiedz1(tekstwpisywany)
    },1000)
}

function WiadomosciBota(tekst) {

    if (tekst == "witaj") {
        return "Cześć! W czym mogę pomóc?";
    } 
    else if(tekst=="info"||tekst=="Info"){
        return "Twórcy Programu to:<br>Jakub Cierocki<br>Oskar Nierzwicki<br>Wersja: 1.0 BETA";
    }
    else {
        return "Niestety, jeszcze nie potrafię tego zrozumieć";
    }

}

$("#TekstWpisywany").keypress(function (e) {
    if (e.which == 13) {
        Odpowiedz();
        Usuwanie();
    }
});

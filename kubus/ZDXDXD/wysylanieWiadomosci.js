const przycisk1=document.querySelector("input[name='wyslij']")
przycisk1.addEventListener('click',Odpowiedz)

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
        return "Niestety, nie potrafię tego zrozumieć.";
    }

}
$("#TekstWpisywany").keypress(function (e) {
    if (e.which == 13) {
        Odpowiedz();
    }
});

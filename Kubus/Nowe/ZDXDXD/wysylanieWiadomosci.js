
var lines=0;
let linia;
const tekst=document.querySelector("input[name='TekstWpisywany1']")

const przycisk1=document.querySelector("input[name='wyslij']")
przycisk1.addEventListener('click',WysylanieWiadomosci)


const KontenerNaWiadomosciBot=document.querySelector("div[name='OdpowiedzBota1']")

const SpanNaWiadomosciUz=document.querySelector("WiadomosciUz2[name='OdpowiedzUz2']")

function WysylanieWiadomosci(){

    let userHtml = '<p class="WiadomoscUz1"><span>' + tekst + '</span></p>';
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    alert("XDDD")
}

function getBotResponse() {
    //rock paper scissors
    if (tekst == "rock") {
        return "paper";
    } else if (tekst == "paper") {
        
    } else if (tekst == "scissors") {
        return "rock";
    }

    // Simple responses
    if (tekst == "hello") {
        return "Hello there!";
    } else if (tekst == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}

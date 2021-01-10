let form = document.querySelector("form");
let nameInputF = document.querySelector("#nameF");
let nameInputL = document.querySelector("#nameL");
let adresInput = document.querySelector("#adres");
let mailInput = document.querySelector("#mail");
let voorwaardenBox = document.querySelector("#voorwaarden");
let fValidate;
let lValidate;
let aValidate;
let mValidate;
let boxValidate;
let shouldValidate;

form.addEventListener("submit", submitform);

function submitform(event) {

    let nameF = nameInputF.value;
    let nameL = nameInputL.value;
    let adres = adresInput.value;
    let mail = mailInput.value;
    let node = document.createElement("P");
    let textNode = document.createTextNode("Bedankt voor uw bestelling, we nemen nog contact op voor de betaling!");



    if (nameF.length > 0) {
        fValidate = true;
        console.log("name ok");
    } else {
        fValidate = false;
        alert("Gelieve een geldige naam in te vullen");
    }

    if (nameL.length > 0) {
        lValidate = true;
        console.log("last name ok");
    } else {
        lValidate = false;
        alert("Gelieve een geldige achternaam in te vullen");
    }

    if (adres.length > 0) {
        aValidate = true;
        console.log("adres ok");
    } else {
        aValidate = false;
        alert("Geef een geldig adres in");
    }

    if (mail.length > 0 && mail.indexOf("@") > -1 && mail.indexOf(".") > -1) {
        mValidate = true;
        console.log("email ok");
    } else {
        mValidate = false;
        alert("Gelieve een geldig email adres in te geven");
    }

    if (voorwaardenBox.checked){
        boxValidate = true;
        console.log("voorwaarden ok");
    } else {
        boxValidate = false;
        alert("Gelieve onze servicevoorwaarden te accepteren");
    }

    if (fValidate && lValidate && aValidate && mValidate && boxValidate) {
        shouldValidate = true;
    } else {
        shouldValidate = false;
    }

    if (shouldValidate) {
        console.log("submit form")
        form.reset();
        event.preventDefault();
        $("#bedankt").text("Bedankt voor uw bestelling, we zullen u nog contacteren om de betaling af te ronden.");
    } else {
        console.log("could not submit");
        event.preventDefault();
    }
}



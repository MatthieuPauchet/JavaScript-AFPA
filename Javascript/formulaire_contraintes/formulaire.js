var regTexte = new RegExp("^[a-zA-Z0-9_-]{1,}$");
var regMail = new RegExp("^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$");
var regCP = new RegExp("^[0-9]{5}$");
var regTelephone = new RegExp("^[0-9]{10,}$");
var regAdresse = new RegExp("^[a-zA-Z0-9_-]{5,}$");

var societe = document.getElementById("société");

societe.addEventListener("blur", function () {
    if (regTexte.test(societe.value)) {
        societe.classList.remove("KO");
        societe.classList.add("OK");
    }
    else {
        document.getElementById("aideSociete").textContent = "Champs incorect";
        document.getElementById("aideSociete").style.color = "red";
        societe.classList.remove("OK");
        societe.classList.add("KO");
    }
});

var contact = document.getElementById("nom");

contact.addEventListener("change", function () {
    if (regTexte.test(contact.value)) {
        contact.classList.remove("KO");
        contact.classList.add("OK");
    }
    else {
        contact.classList.remove("OK");
        contact.classList.add("KO");
    }
});

var ville = document.getElementById("ville");

ville.addEventListener("blur", function () {
    if (regTexte.test(ville.value)) {
        ville.classList.remove("KO");
        ville.classList.add("OK");
    }
    else {
        ville.classList.remove("OK");
        ville.classList.add("KO");
    }
});

var CP = document.getElementById("code_postal");

CP.addEventListener("blur", function () {
    if (regCP.test(CP.value)) {
        CP.classList.remove("KO");
        CP.classList.add("OK");
        document.getElementById("aideCP").textContent = "";
    }
    else {
        CP.classList.remove("OK");
        CP.classList.add("KO");
        document.getElementById("aideCP").textContent = "Entrez le code postal sur 5 chiffres SVP!!!";
        document.getElementById("aideCP").style.color = "red";
    }
});

var mail = document.getElementById("email");

mail.addEventListener("change", function () {
    console.log('change mail');
    
    if (regMail.test(mail.value)) {
        mail.classList.remove("KO");
        mail.classList.add("OK");
        document.getElementById("aideMail").textContent = "";
        console.log('change mail2');

    }
    else {
        document.getElementById("aideMail").textContent = "Votre adresse mail est incorrect";
        document.getElementById("aideMail").style.color = "red";
        mail.classList.remove("OK");
        mail.classList.add("KO");
    }
});

var phone = document.getElementById("telephone");

phone.addEventListener("blur", function () {
    if (regTelephone.test(phone.value)) {
        phone.classList.remove("KO");
        phone.classList.add("OK");
        document.getElementById("aidePhone").textContent = "";
    }
    else {
        document.getElementById("aidePhone").textContent = "Le numéro doit comporter uniquement 10 chiffres";
        document.getElementById("aidePhone").style.color = "red";
        phone.classList.remove("OK");
        phone.classList.add("KO");
    }
});

phone.addEventListener("mouseover", function () {
    document.getElementById("aidePhone").textContent = "Le numéro doit comporter uniquement 10 chiffres";
    document.getElementById("aidePhone").style.color = "grey";
});

phone.addEventListener("mouseout", function () {
    document.getElementById("aidePhone").textContent = "";
});

var adress = document.getElementById("adresse");

adress.addEventListener("blur", function () {
    if (regAdresse.test(adress.value)) {
        adress.classList.remove("KO");
        adress.classList.add("OK");
    }
    else {
        adress.classList.remove("OK");
        adress.classList.add("KO");
    }
});

var langage = document.getElementById("choix");

langage.addEventListener("change", function () {
    if (langage.value != "Choisissez") {
        if (document.getElementById("area").value.indexOf(langage.value)==-1){
            document.getElementById("area").textContent += (langage.value) + "\n";
        }
    }
});


document.getElementById("submit").addEventListener("click", function (e) {
    console.log("test")
    if (regTexte.test(societe.value) && regTexte.test(contact.value) && regCP.test(CP.value) && regTexte.test(ville.value) && regMail.test(mail.value) && regTelephone.test(phone.value)) {
        window.alert("Votre formulaire a bien été envoyé!!!");
    }
    else{        
    e.preventDefault();
    window.alert("veuillez vérifier votre formulaire avant envoi");
    }
});

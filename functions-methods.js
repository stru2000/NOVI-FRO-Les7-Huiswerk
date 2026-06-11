// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com


function getEmailDomain(email) {
    return email.substring(email.indexOf("@")+1);           //gewoon om te testen of dit ook werkt
}
console.log(getEmailDomain("n.eeken@novi-education"));
console.log(getEmailDomain("t.mellink@novi.nl"));
console.log(getEmailDomain("a.wiersma@outlook.com"));


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(email) {
    const domain = email.split("@")[1];
    let role = "";
    switch (domain) {
        case "novi-education.nl":
            role = "Student";
            break;
        case "novi.nl":
            role = "Medwerker";
            break;
        default:
            role = "Extern";
    }
    return role;
}
console.log(typeOfEmail("s.test@gmail.com"));
console.log(typeOfEmail("n.eeken@novi-education.nl"));
console.log(typeOfEmail("t.mellink@novi.nl"));
console.log(typeOfEmail("novi.nlaapjesk@outlook.com"));
console.log(typeOfEmail("a.wiersma@outlook.com"));

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

// TEST
// const email = "n.eeken@novi.nl";
// const includesAt = email.includes ("@");
// console.log(includesAt);
// const doesNotIncludeComma = !email.includes(",");
// console.log(doesNotIncludeComma);
// const lastChar = email.slice(-1);
// console.log(lastChar);
// const lastCharIsNotDot = email.slice(-1) !== ".";
// console.log(lastCharIsNotDot);


function checkEmailValidity(email) {
    const includesAt = email.includes ("@");
    const doesNotIncludeComma = !email.includes(",");
    const lastCharIsNotDot = email.slice(-1) !== ".";
    const isValid  = includesAt && doesNotIncludeComma && lastCharIsNotDot;

    let reason = "";
    if (!includesAt) {
        reason = "want geen @"
    } else if (!doesNotIncludeComma) {
        reason = "want er staat een komma in"
    } else if (!lastCharIsNotDot) {
        reason = "want de punt mag niet als laatst"
    } else {
        reason = "want @ en punt op de juiste plek"
    }
    return `geeft ${isValid} - ${reason}`;
}

console.log(checkEmailValidity("n.eeken@novi.nl"));
console.log(checkEmailValidity("tessmellink@novi.nl"));
console.log(checkEmailValidity("n.eekenanovi.nl"));
console.log(checkEmailValidity("n.eeken@novinl."));
console.log(checkEmailValidity("tessmellink@novi,nl"));

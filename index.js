function validate() {
    
    let ilmoitus = "";

    let kayttaja = document.forms['lomake']['kayttaja'].value;
    if(kayttaja.length > 5) {
        ilmoitus += "Käyttäjätunnus ok." +"<br>"
    }else {
        ilmoitus += "Käyttäjätunnuksen pituus pitää olla vähintään 6 merkkiä." +"<br>";
    }

    let salasana = document.forms['lomake']['salasana'].value;
    if(salasana.length > 5 && salasana.match(/[a-z]/) && salasana.match(/[A-Z]/) && salasana.match(/\d/) && salasana.match(/[^a-zA-Z\d]/)) {
        ilmoitus += "Salasana ok." +"<br>"
    } else {
        ilmoitus += "Salasanan pituus pitää olla vähintään 6 merkkiä, ja siinä pitää olla vähintään yksi numero ja erikoismerkki." +"<br>";
    }

    let nimi = document.forms['lomake']['nimi'].value;
    if(nimi.length > 0) {
        ilmoitus += "Nimi ok." +"<br>"
    }else {
        ilmoitus += "Nimitieto on pakollinen." +"<br>";
    }

    let osoite = document.forms['lomake']['osoite'].value;
    if (osoite.length > 0) {
        ilmoitus += "Osoite ok." +"<br>"
    } else {
        ilmoitus += "Osoitetieto on pakollinen." +"<br>";
    }

    let maa = document.forms['lomake']['maa'].value;
    if (maa !== "tyhja") {
        ilmoitus += "Maa ok." +"<br>"
    } else {
        ilmoitus += "Maatieto on pakollinen." +"<br>";
    }

    let postinumero = document.forms['lomake']['postinumero'].value;
    if (postinumero.length === 5 && postinumero.match(/\d/)) {
        ilmoitus += "Postinumero ok." +"<br>"
    }else {
        ilmoitus += "Postinumerossa pitää olla 5 numeroa." +"<br>";
    }

    let sposti = document.forms['lomake']['sposti'].value;
    atpos = sposti.indexOf("@");
    dotpos = sposti.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        ilmoitus += "Anna kelvollinen sähköposti." +"<br>"
    } else {
        ilmoitus += "Sähköposti ok." +"<br>";
    }

    let sukupuoli = "";
    if(document.getElementById("mies").checked == true) {
        ilmoitus += "Sukupuoli ok." +"<br>"
    } else if(document.getElementById("nainen").checked == true) {
        ilmoitus += "Sukupuoli ok." +"<br>"
    } else {
        ilmoitus += "Valitse sukupuoli." +"<br>";
    }

    let kieli = "";
    if(document.getElementById("suomi").checked == true) {
        ilmoitus += "Kieli ok." +"<br>"
    } else if(document.getElementById("muu").checked == true) {
        ilmoitus += "Kieli ok." +"<br>"
    } else {
        ilmoitus += "Valitse kieli." +"<br>";
    }





    document.getElementById("print").innerHTML = ilmoitus;
}

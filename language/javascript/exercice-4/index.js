function checkFirstChar() {
    var premier_parag = document.querySelector('body > div:first-child > p:nth-child(2)'); //nth-child(2) car first-child est h2
    var str = '';
    if (premier_parag) {
        str = premier_parag.textContent;
        var regex = /^[a-d]/i; // les expressions régulières
        var isOk = regex.test(str); // pas comme match: str.match(regex)

        var p = document.getElementById("q1");
        if (isOk) {
            p.innerHTML = str + ' chaine valide qui commence par une lettre entre a et d';
        } else {
            p.innerHTML = 'chaine invalide!';
        }
    }
}
function checkArobase() {
    var premier_parag = document.querySelector('body > div:nth-child(2) > p:nth-child(2)'); //nth-child(2) car first-child est h2
    var str = '';
    if (premier_parag) {
        str = premier_parag.textContent;
        var isOk = str.indexOf('@') !== -1;

        var p = document.getElementById("q2");
        if (isOk) {
            p.innerHTML = str + ' chaine valide qui contient: @';
        } else {
            p.innerHTML = 'chaine invalide!';
        }
    }
}

function checkNumber() {
    var premier_parag = document.querySelector('body > div:nth-child(3) > p:nth-child(2)'); //nth-child(2) car first-child est h2
    var str = '';
    if (premier_parag) {
        str = premier_parag.textContent;
        var regex = /[0-9]/i; // les expressions régulières
        var isOk = regex.test(str); // pas comme match: str.match(regex)

        var p = document.getElementById("q3");
        if (isOk) {
            p.innerHTML = str + ' chaine valide qui contient un nombre';
        } else {
            p.innerHTML = 'chaine invalide!';
        }
    }
}

function replaceNumber() {
    var premier_parag = document.querySelector('body > div:nth-child(4) > p:nth-child(2)'); //nth-child(2) car first-child est h2
    var str = '';
    if (premier_parag) {
        str = premier_parag.textContent;
        var regex = /[0-9]/g; // les expressions régulières
        var result = str.replace(regex, '*');

        var p = document.getElementById("q4");
        p.innerHTML = result;
        
    }
}
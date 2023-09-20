function checkFirstChar() {
    var premier_parag = document.querySelector('body > div:first-child > p:nth-child(2)'); //nth-child(2) car first-child est h2
    var str = '';
    if (premier_parag) {
        str = premier_parag.textContent;
        var regex = /^[a-d]/i; // les expressions régulières
        var isOk = regex.test(str); // pas comme match: str.match(regex)

        var p = document.getElementById("q1");
        if (isOk) {
            p.innerHTML = 'top';
        } else {
            p.innerHTML = 'invalide';
        }
    }
}
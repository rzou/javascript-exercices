var liste = new Array();
function add_nom() {
    liste.push(prompt("saisir nom"));
}
function tirage() {
    if(liste.length > 0) {
        var rand = Math.floor(Math.random() * liste.length);
        alert("le gagnant est : "+liste[rand]);
    } else {
        alert("veuillez ajouter des noms");
    }
    
}
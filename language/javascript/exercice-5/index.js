var liste = [];
function add_name() {
    var nom = document.getElementById("nom").value;
    liste.push(nom);
    display();
}
function clean() {
    var ul = document.getElementById("liste");
    ul.innerHTML = "";
    return ul;
}
function display() {
    var ul = clean();
    for(var i = 0; i<liste.length; i++) {
        var li = document.createElement("li");
        var text = document.createTextNode(liste[i]);
        li.appendChild(text);

        ul.appendChild(li);
    }  
}

function rand() {
    var taille = liste.length;
    console.log(taille);
    var winnerId = Math.floor(Math.random() * taille);
    var winnerDiv = document.getElementById("winner");
    winnerDiv.innerHTML = "";
    var winnerName = document.createTextNode(liste[winnerId]);
    winnerDiv.appendChild(winnerName);
}
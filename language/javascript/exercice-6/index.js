var n = 0;
function begin() {
    n = prompt("veuillez saisir un entier");
}
function calculerfactorielle()
{
    var res = factorielle(n);
    alert(n+"! = "+res);
}
function factorielle(nbr) {
    var facto = 1;
    var i = nbr;
    while(i>0) {
        facto *= i;
        i--;
    }
    return facto;
}
function sommeFactorielle() {
    var result = 0;
    var str = '';
    for(var i=1; i<=n; i++) {
        result += factorielle(i);

        str += i+'!';
        if(i !== n) {
            str += '+';
        }
    }
    str += ' = '+result;
    alert(str);
}
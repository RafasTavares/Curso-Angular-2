var minhaVar = 'minha variavel';
//ES 6 ES 2015
var num = 2;
var PI = 3.14;
//JS
var numeros = [1, 2, 3];
numeros.map(function (valor) { return valor * 2; });
//Arrow functions
var numeros = [1, 2, 3];
numeros.map(function (valor) { return valor * 2; });


var Matematica = (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());

/*jslint devel:true */
function Pokemon(n, v, a) {
    "use strict";
    this.grito = "";
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.gritar = function () {
        alert(this.grito);
    };
}

function inicio() {
    "use strict";
    var pikachu = new Pokemon("Pikachu", 100, 55);
    pikachu.grito = "pikaaaa!!!";
    var bulbasaur = new Pokemon("Bulbasaur", 90, 50);
    bulbasaur.grito = "bulbaaa!!!";
    var rattata = new Pokemon("Rattata", 40, 2);
    rattata.grito = "rataa!!";
    var numpok = prompt("1 = pika\n2 = bulba\n3 = rata");
    var poke;
    if (numpok == "1") {
        poke = pikachu;
    } else if (numpok == "2") {
        poke = bulbasaur;
    } else if (numpok == "3") {
        poke = rattata;
    } else {
        alert("Elegiste mal a tu poke");
        inicio();
    }
    nombrePokemon.innerText = poke.nombre;
    datosPokemon.innerText = "los atributos de este pokemon son:\nvida = " + poke.vida + "\nataque = " + poke.ataque;
    //me dio hueva buscar imagenes pero es con el img src
    document.write(poke.nombre + ".jpg");
    poke.gritar();
}
/*jslint devel:true */
function puntosmascotas() {
    "use strict";
  //  alert("si sirvo");
    var perro, gato, i, mascota;
    perro = {
        fuerza: 100,
        peso: 18,
        tipo: "aventurero",
        agilidad: 65,
        higiene: false,
        amor: true,
        edad: 2,
        salud: "vacunado",
        nombre: "Growlith",
        puntos: 0
    };

    gato = {
        fuerza: 40,
        peso: 4,
        tipo: "casero",
        agilidad: 40,
        higiene: true,
        amor: false,
        edad: 0,
        salud: "inmune",
        nombre: "Gatomon",
        puntos: 0
    };

    for (i = 0; i <= 1; i += 1) {
        alert("entra al for");
        if (i === 0) {
            mascota = gato;
        } else {
            mascota = perro;
        }

        if (mascota.fuerza > 90) {
            mascota.puntos += 1;
        }

        if (mascota.peso > 10) {
            mascota.puntos += 1;
        }

        if (mascota.tipo === "aventurero") {
            mascota.puntos = mascota.puntos + 2;
        }

        if (mascota.agilidad >= 70) {
            mascota.puntos += 1;
        }

        if (mascota.higiene !== true) {
            mascota.puntos += 1;
        }

        if (mascota.amor === true) {
            mascota.puntos += 1;
        }

        if (mascota.edad > 1 && mascota.edad < 4) {
            mascota.puntos += 2;
        } else if (mascota.edad === 0) {
            mascota.puntos += 1;
        } else {
            mascota.puntos -= 1;
        }

        if (mascota.salud === "vacunado" || mascota.salud === "inmune") {
            mascota.puntos += 1;
        }

        alert("Tu mascota " + mascota.nombre + " tiene " + mascota.puntos + " puntos.");
    }
}

function piedrapap() {
    "use strict";
    
    var piedra = 0, papel, tijera, opcionUsuario, opcionMaquina, opciones, resultados;
    papel = 1;
    tijera = 2;
    opciones = ["Piedra", "Papel", "Tijera"];
    resultados = ["Ganaste", "Perdiste", "Empate"];
   
    opcionUsuario = prompt("¿Qué eliges? \nPiedra: 0\nPapel: 1\nTijera: 2", 0);
    
    opcionMaquina = aleatorio(0, 2);
    
    alert("Elegiste: " + opciones[opcionUsuario]);
    
    alert("Javascript eligió: " + opciones[opcionMaquina]);
    
    alert(resultados[combate(opcionUsuario, opcionMaquina)]);

    /*
    
    if (opcionUsuario == piedra) {
        if (opcionMaquina == piedra) {
            alert("Empate");
        } else if (opcionMaquina == tijera) {
            alert("Perdiste!");
        } else {
            alert("Ganaste!");
        }
    } else if (opcionUsuario == papel) {
        if (opcionMaquina == piedra) {
            alert("Ganaste!");
        } else if (opcionMaquina == tijera) {
            alert("Perdiste!");
        } else {
            alert("Empate");
        }
    } else if (opcionUsuario == tijera) {
        if (opcionMaquina == piedra) {
            alert("Perdiste!");
        } else if (opcionMaquina == tijera) {
            alert("Empate");
        } else {
            alert("Ganaste!");
        }
    } else {
        alert("Pues que chingaos");
    }*/
}

function aleatorio(minimo, maximo) {
    "use strict";
    var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
}
function combate(usuario, maquina) {
    "use strict";
    var resultado;
    if (usuario == 2 && maquina == 0) {
        maquina = 3;
    }
    if (maquina == 2 && usuario == 0) {
        usuario = 3;
    }
    if (usuario == maquina) {
        resultado = 2;
    } else if (usuario > maquina) {
        resultado = 0;
    } else if (usuario < maquina) {
        resultado = 1;
    } else {
        alert("Pues que chingaos");
    }
    return resultado;
}

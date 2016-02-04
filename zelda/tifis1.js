/*jslint devel:true */
var tablero;
var fondo = {
    imagenURL: "fondo.png",
    imagenOK: false
};

var tifis = {
    x: 150,
    y: 100,
    frenteURL: "diana-frente.png",
    frenteOK: false,
    velicidad: 25,
    atrasURL: "diana-atras.png",
    atrasOK: false,
    derechaURL: "diana-der.png",
    derechaOK: false,
    izquierdaURL: "diana-izq.png",
    izquierdaOK: false
};

var liz = {
    lizURL: "liz.png",
    lizOK: false,
    x: 400,
    y: 200
};

var teclas = {
    up: 38,
    down: 40,
    left: 37,
    right: 39
};

var direccion;

var bloqueo = {
    up: false,
    down: false,
    left: false,
    right: false
};

function dibujar() {
    "use strict";

    // Capa 1: fondo
    if (fondo.imagenOK === true) {
        tablero.drawImage(fondo.imagen, 0, 0);
    }

    //Capa 2: Liz
    if (liz.lizOK) {
        tablero.drawImage(liz.lizy, liz.x, liz.y);
    }

    // Capa 3: Tifis
    var tifiDibujo = tifis.frente;
    if (tifis.frenteOK && tifis.atrasOK && tifis.derechaOK && tifis.izquierdaOK) {
        if (direccion === teclas.up) {
            tifiDibujo = tifis.atras;
        }
        if (direccion === teclas.down) {
            tifiDibujo = tifis.frente;
        }
        if (direccion === teclas.right) {
            tifiDibujo = tifis.derecha;
        }
        if (direccion === teclas.left) {
            tifiDibujo = tifis.izquierda;
        }

        tablero.drawImage(tifiDibujo, tifis.x, tifis.y);
    }

}

function confirmarFondo() {
    "use strict";
    fondo.imagenOK = true;
    dibujar();
}

function confirmarLiz() {
    "use strict";
    liz.lizOK = true;
    dibujar();
}

function confirmarFrente() {
    "use strict";
    tifis.frenteOK = true;
    dibujar();
}

function confirmarAtras() {
    "use strict";
    tifis.atrasOK = true;
    dibujar();
}

function confirmarDerecha() {
    "use strict";
    tifis.derechaOK = true;
    dibujar();
}

function confirmarIzquierda() {
    "use strict";
    tifis.izquierdaOK = true;
    dibujar();
}

function bloqueos() {
    "use strict";
    if (tifis.x <= 0) {
        bloqueo.left = true;
    } else {
        bloqueo.left = false;
    }
    if (tifis.x >= 450) {
        bloqueo.right = true;
    } else {
        bloqueo.right = false;
    }
    if (tifis.y <= 0) {
        bloqueo.up = true;
    } else {
        bloqueo.up = false;
    }
    if (tifis.y >= 450) {
        bloqueo.down = true;
    } else {
        bloqueo.down = false;
    }
    if (tifis.x === 150 && tifis.y <= 200) {
        bloqueo.right = true;
        if (tifis.y === 200 || tifis.y === 175) {
            bloqueo.left = true;
        }
    }
    if (tifis.x === 250 && tifis.y <= 200) {
        bloqueo.left = true;
    }
    if (tifis.y === 150 && tifis.x <= 125) {
        bloqueo.down = true;
    }
    if (tifis.y === 225 && (tifis.x <= 125 || (tifis.x >= 175 && tifis.x <= 225))) {
        bloqueo.up = true;
    }
    if (tifis.x === 100 && (tifis.y >= 325 && tifis.y <= 350)) {
        bloqueo.right = true;
    }
    if (tifis.y === 300 && tifis.x >= 125) {
        bloqueo.down = true;
    }
    if (tifis.y === 375 && tifis.x >= 125) {
        bloqueo.up = true;
    }
    if (tifis.x === 400 && tifis.y === 200) {
        dibujar();
        alert("Muere, bitch!!!");
    }
}

function teclado(datos) {
    "use strict";
    var codigo = datos.keyCode;
    bloqueos();
    if ((codigo === teclas.up) && (bloqueo.up === false)) {
        tifis.y -= tifis.velicidad;
    }

    if ((codigo === teclas.down) && (bloqueo.down === false)) {
        tifis.y += tifis.velicidad;
    }
    if ((codigo === teclas.right) && (bloqueo.right === false)) {
        tifis.x += tifis.velicidad;
    }
    if ((codigo === teclas.left) && (bloqueo.left === false)) {
        tifis.x -= tifis.velicidad;
    }

    direccion = codigo;
    dibujar();
}


function inicio() {
    "use strict";
    tablero = document.getElementById("campo").getContext("2d");

    fondo.imagen = new Image();
    fondo.imagen.src = fondo.imagenURL;
    fondo.imagen.onload = confirmarFondo;

    tifis.frente = new Image();
    tifis.frente.src = tifis.frenteURL;
    tifis.frente.onload = confirmarFrente;

    tifis.atras = new Image();
    tifis.atras.src = tifis.atrasURL;
    tifis.atras.onload = confirmarAtras;

    tifis.derecha = new Image();
    tifis.derecha.src = tifis.derechaURL;
    tifis.derecha.onload = confirmarDerecha;

    tifis.izquierda = new Image();
    tifis.izquierda.src = tifis.izquierdaURL;
    tifis.izquierda.onload = confirmarIzquierda;

    liz.lizy = new Image();
    liz.lizy.src = liz.lizURL;
    liz.lizy.onload = confirmarLiz;

    /*  var m = document.getElementById("mover");
      m.addEventListener("click", movimiento);*/

    document.addEventListener("keydown", teclado);
}

/*jslint devel:true */
var lienzo, t, b, n, sizeX, sizeY, l, limiteX, limiteY, i;

function inicio() {
    "use strict";
    sizeX = document.getElementById("dibujito").getAttribute("width");
    sizeY = document.getElementById("dibujito").getAttribute("height");

    lienzo = document.getElementById("dibujito").getContext("2d");
    t = document.getElementById("usuario");
    b = document.getElementById("boton");

    function circulo() {
        lienzo.beginPath();
        lienzo.strokeStyle = "#00f";
        lienzo.arc(150, 150, 100, (Math.PI * 2), false);
        lienzo.closePath();
        lienzo.stroke();
    }

    function dibujarGrilla() {
        lienzo.clearRect(0, 0, sizeX, sizeY);
        n = parseInt(t.value, 10);
        limiteX = sizeX / n;
        limiteY = sizeY / n;
        
        l = lienzo;


        l.strokeStyle = "#999";

        for (i = 0; i <= n; i += 1) {
            l.beginPath();
            l.moveTo(i * limiteX, 0);
            l.lineTo(i * limiteX, sizeY);
            l.stroke();
            l.closePath();

        }
        for (i = 0; i <= n; i += 1) {
            l.beginPath();
            l.moveTo(0, i * limiteY);
            l.lineTo(sizeX, i * limiteY);
            l.stroke();
            l.closePath();
        }
        circulo();
    }

    b.addEventListener("click", dibujarGrilla);
}

/*jslint devel:true */
var palabra = "Accesibilidad",
	hombre,
	l,
	espacio;
//Declaracion de la clase Ahorcado
var Ahorcado = function (con) {
	"use strict";
	this.contexto = con;
	this.maximo = 5;
	this.intentos = 0;
	this.vivo = true;
};

Ahorcado.prototype.dibujar = function () {
	"use strict";
	var dibujo = this.contexto;
	if (this.intentos > 0) {
		dibujo.beginPath();
		dibujo.arc(150, 130, 30, 0, Math.PI * 2, false);
		dibujo.strokeStyle = "#0000EE";
		dibujo.lineWidth = 4;
		dibujo.stroke();
		dibujo.closePath();
	}
	if (this.intentos > 1) {
		dibujo.beginPath();
		dibujo.moveTo(150, 160);
		dibujo.lineTo(150, 230);
		dibujo.strokeStyle = "#0000EE";
		dibujo.lineWidth = 4;
		dibujo.stroke();
		dibujo.closePath();
	}
	if (this.intentos > 2) {
		dibujo.beginPath();
		dibujo.moveTo(120, 180);
		dibujo.lineTo(150, 170);
		dibujo.lineTo(180, 180);
		dibujo.strokeStyle = "#0000EE";
		dibujo.lineWidth = 4;
		dibujo.stroke();
		dibujo.closePath();
	}
	if (this.intentos > 3) {
		dibujo.beginPath();
		dibujo.moveTo(130, 260);
		dibujo.lineTo(150, 230);
		dibujo.lineTo(170, 260);
		dibujo.strokeStyle = "#0000EE";
		dibujo.lineWidth = 4;
		dibujo.stroke();
		dibujo.closePath();
	}
	if (this.intentos > 4) {
		dibujo.beginPath();
		dibujo.moveTo(140, 125);
		dibujo.lineTo(142, 125);
		dibujo.strokeStyle = "#0000EE";
		dibujo.lineWidth = 6;
		dibujo.stroke();
		dibujo.closePath();
		dibujo.beginPath();
		dibujo.moveTo(160, 125);
		dibujo.lineTo(158, 125);
		dibujo.strokeStyle = "#0000EE";
		dibujo.lineWidth = 6;
		dibujo.stroke();
		dibujo.closePath();
		dibujo.beginPath();
		dibujo.arc(150, 160, 20, Math.PI * 1.3, Math.PI * 1.7, false);
		dibujo.strokeStyle = "#0000EE";
		dibujo.lineWidth = 2;
		dibujo.stroke();
		dibujo.closePath();
	}
};

Ahorcado.prototype.palo = function () {
	"use strict";
	var dibujo = this.contexto;
	dibujo.beginPath();
	dibujo.moveTo(150, 100);
	dibujo.lineTo(150, 50);
	dibujo.lineTo(400, 50);
	dibujo.lineTo(400, 350);
	dibujo.lineWidth = 12;
	dibujo.strokeStyle = "#000";
	dibujo.stroke();
	dibujo.closePath();
	dibujo.beginPath();
	dibujo.moveTo(350, 350);
	dibujo.lineTo(450, 350);
	dibujo.lineWidth = 12;
	dibujo.strokeStyle = "#000";
	dibujo.stroke();
	dibujo.closePath();

};

Ahorcado.prototype.trazar = function () {
	"use strict";
	this.intentos += 1;
	if (this.intentos >= this.maximo) {
		this.vivo = false;
		alert("¡Estás muerto!");
	}
	this.dibujar();
};

function underscores(espacio) {
	"use strict";
	var i, texto, pista;
	pista = document.getElementById("pista");
	texto = "";
	for (i = 0; i < palabra.length; i += 1) {
		if (espacio[i] === undefined) {
			texto += "_ ";
		} else {
			texto += espacio[i] + " ";
		}
	}
	pista.innerHTML = texto;
}

function mostrarPalabra(palabra, hombre, letra) {
	"use strict";
	var encontrado = false,
		p;
	letra = letra.toUpperCase();
	for (p in palabra) {
		if (letra === palabra[p]) {
			espacio[p] = letra;
			encontrado = true;
		}
	}
	underscores(espacio);

	if (!encontrado) {
		hombre.trazar();
	}
	if (!hombre.vivo) {
		alert(palabra);
	}
}

function agregarLetra() {
	"use strict";

	var letra = l.value;
	l.value = "";
	l.focus();
	mostrarPalabra(palabra, hombre, letra);
}

function iniciar() {
	"use strict";
	var canvas = document.getElementById("c"),
		contexto = canvas.getContext("2d"),
		b = document.getElementById("boton");
	l = document.getElementById("letra");
	canvas.width = 500;
	canvas.height = 400;

	l.addEventListener("keypress", function (event) {
		if (event.keyCode === 13) {
			b.click();
		}
	});
	hombre = new Ahorcado(contexto);
	palabra = palabra.toUpperCase();
	espacio = new Array(palabra.length);
	hombre.palo();
	b.addEventListener("click", agregarLetra);
	underscores(espacio);
}

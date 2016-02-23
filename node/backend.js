console.log("Arrancando servidor de Node");

var express = require("express");
var web = express();
var servidor;

servidor = web.listen(8080, function () {
    console.log("Servidor arrancado :D");
});
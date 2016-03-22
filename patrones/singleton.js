/*jslint devel:true*/
var aSingleton = (function () {
    "use strict";
    var instance;

    function init() {
        function privateMethod() {
            console.log("Soy un metodo privado");
        }
        var privateNumber = Math.round(Math.random() * 1000);
        return {
            publicMethod: function () {
                console.log("entrando a metodo publico");
                privateMethod();
                console.log("saliendo de metodo publico");
            },
            getRandomNumber: function () {
                return privateNumber;
            }
        };
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
}());
var testOne = aSingleton.getInstance();
testOne.publicMethod();
var testTwo = aSingleton.getInstance();
testTwo.publicMethod();
//True
console.log(testOne.getRandomNumber());
console.log(testTwo.getRandomNumber());
console.log(testOne.getRandomNumber() === testTwo.getRandomNumber());

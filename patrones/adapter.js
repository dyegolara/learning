/*jslint devel: true, vars: true*/
function AdapteeShipping() {
    "use strict";
    this.request = function (origen, destino, peso) {
        this.origen = origen;
        this.destino = destino;
        this.peso = peso;
        this.total = peso * 100; //Math.round(Math.random() * 12345);
        return this.total;
    };
}

function TargetShipping() {
    "use strict";
    this.login = function (credential) {
        //ToDo
    };
    this.setOrigen = function (origen) {
        // this.origen = origen;
    };

    this.setDestino = function (destino) {
        //this.destino = destino;
    };
    this.calculate = function (peso) {
        //this.peso = peso;
        var total = peso * 100; //Math.round(Math.random() * 4321);
        return total;
    };
}

function ShippingAdapter(credentials) {
    "use strict";
    var targetShipping = new TargetShipping();
    targetShipping.login();

    return {
        request: function (origen, destino, peso) {
            targetShipping.setOrigen(origen);
            targetShipping.setDestino(destino);
            return targetShipping.calculate(peso);
        }
    };
}

function Client() {
    "use strict";
    this.run = function () {
        var oldInterface = new AdapteeShipping(),
            cost = oldInterface.request("1234", "321", 123.45);
        console.log(cost);

        var mycreds = "user/pass",
            adapter = new ShippingAdapter(mycreds),
            newCost = adapter.request("1234", "321", 123.45);
        console.log(newCost);

    };
}

var cliente = new Client();
cliente.run();

/*jslint devel: true*/
function Director() {
    "use strict";
    this.construct = function (builder) {
        builder.step1();
        builder.step2();
        return builder.getResult();
    };
}

function Car() {
    "use strict";
    this.doors = 0;
    this.addParts = function () {
        this.doors = 4;
    };
    this.doSomething = function () {
        console.log("tengo " + this.doors + " puertas");
    };
}

function CarBuilder() {
    "use strict";
    this.car = null;
    this.step1 = function () {
        this.car = new Car();
    };
    this.step2 = function () {
        this.car.addParts();
    };
    this.getResult = function () {
        return this.car;
    };
}

function testBuildPattern() {
    "use strict";
    var shop = new Director(),
        carBuilder = new CarBuilder(),
        car = shop.construct(carBuilder);
    car.doSomething();
}

testBuildPattern();

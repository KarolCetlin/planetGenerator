"use strict";
exports.__esModule = true;
require("../../sass/main.scss");
var Generator_js_1 = require("./Modules/Generator.js");
var ShowDOM_1 = require("./View/ShowDOM");
require("../../public/images/planets/planets2.jpg");
require("../../public/images/population/colony.jpg");
require("../../public/images/stars/star.jpg");
require("../../public/images/world/savanna.jpg");
require("../../public/images/background/wallpaper.jpg");
exports.currentPlanetNumber = 0;
exports.planetsCollection = [];
var Method;
(function (Method) {
    Method["Auto"] = "auto";
    Method["Parameter"] = "parameter";
    Method["Custom"] = "custom";
})(Method || (Method = {}));
var Init = /** @class */ (function () {
    function Init($element, chosenMethod) {
        this.click($element, chosenMethod);
    }
    Init.prototype.checkMethod = function (chosenMethod) {
        switch (chosenMethod) {
            case Method.Auto:
                this.initGenerator();
                new ShowDOM_1["default"]();
                break;
            case Method.Parameter:
                console.log("change one parameter");
                break;
            case Method.Custom:
                console.log("custom planet");
                break;
        }
    };
    Init.prototype.initGenerator = function () {
        var newPlanet = Generator_js_1.generatePlanet();
        exports.planetsCollection.push(newPlanet);
        console.log(exports.planetsCollection);
    };
    Init.prototype.click = function ($element, chosenMethod) {
        var _this = this;
        var clickedElement = document.getElementById($element);
        clickedElement.onclick = function () {
            _this.checkMethod(chosenMethod);
            exports.currentPlanetNumber++;
        };
    };
    return Init;
}());
new Init("active", Method.Auto);

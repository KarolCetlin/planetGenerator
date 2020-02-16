"use strict";
var _this = this;
exports.__esModule = true;
var Tools_1 = require("../Logic/Tools");
var Data_1 = require("../Data/Data");
var planetNameGenerator_1 = require("./generators/planetNameGenerator");
var planetTypeGenerator_1 = require("./generators/planetTypeGenerator");
var AddOutpost_1 = require("./AddOutpost");
var starGenerator_1 = require("./generators/starGenerator");
var Environment_1 = require("./Environment");
var generatePlanetName = function () {
    return planetNameGenerator_1["default"]();
};
var generateHasOutpost = function () {
    return Tools_1.checkChance(Data_1.outpostPossibility);
};
var generateHasEcosferic = function () {
    return Tools_1.checkChance(Data_1.ecosfericPossibility);
};
var generateHasMinerals = function () {
    return Tools_1.checkChance(Data_1.mineralsPossibility);
};
var generateHasAnomaly = function () {
    return Tools_1.checkChance(Data_1.anomalyPossibility);
};
var generatePlanetOutpost = function (hasOutpost) {
    return null;
    // if (hasOutpost === true) {
    //
    //     return generateOutpost();
    //
    //     } else {
    //         console.log('Niestety nie ma żadnego posterunku na tej planecie');
    //     }
};
console.log(generatePlanetOutpost);
var generateEnvirnonment = function () {
    if (exports.generatePlanet[_this.hasEcosferic] === true) {
        _this.environment = Environment_1.environmentGenerete();
    }
    else {
        console.log('planeta poza ekosferą, istenienie środowiska jest niemożliwe');
        return Environment_1.environmentGenerete();
    }
};
exports.generatePlanet = function () {
    var hasEcosferic = generateHasEcosferic();
    var hasOutpost = generateHasOutpost();
    return {
        name: generatePlanetName(),
        size: planetTypeGenerator_1.generatePlanetSize(),
        star: starGenerator_1.generateStar(),
        hasOutpost: generateHasOutpost(),
        hasEcosferic: generateHasEcosferic(),
        hasMinerals: generateHasMinerals(),
        hasAnomaly: generateHasAnomaly(),
        outpost: AddOutpost_1.generateOutpost(),
        environment: generateEnvirnonment()
    };
};

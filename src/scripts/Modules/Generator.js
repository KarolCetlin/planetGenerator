"use strict";
var _this = this;
exports.__esModule = true;
var Tools_1 = require("../Logic/Tools");
var Data_1 = require("../Data/Data");
var Environment_js_1 = require("./Environment.js");
var planetNameGenerator_1 = require("./generators/planetNameGenerator");
var planetNameGenerator_2 = require("./generators/planetNameGenerator");
var planetTypeGenerator_1 = require("./generators/planetTypeGenerator");
// import { generateOutpost } from './AddOutpost';
var starNameGenerator_1 = require("./generators/starNameGenerator");
var generatePlanetName = function () {
    return planetNameGenerator_1["default"]();
};
var generatePlanetSizeName = function () {
    return planetTypeGenerator_1.planetSizeNameGenerator();
};
var generatePlanetRadius = function () {
    return planetTypeGenerator_1.planetRadiusGenerator();
};
var generateStarName = function () {
    return planetNameGenerator_2["default"]();
};
var generatePlanetSizeDescription = function () {
    return planetTypeGenerator_1.planetSizeDescriptionGenerator();
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
    if (_this.hasEcosferic == true) {
        _this.environment = new Environment_js_1["default"]();
    }
    else {
        console.log('planeta poza ekosferą, istenienie środowiska jest niemożliwe');
        return null;
    }
};
exports.generatePlanet = function () {
    var hasEcosferic = generateHasEcosferic();
    var hasOutpost = generateHasOutpost();
    return {
        name: generatePlanetName(),
        size: planetTypeGenerator_1.generatePlanetSize(),
        star: starNameGenerator_1.generateStar(),
        hasOutpost: generateHasOutpost(),
        hasEcosferic: generateHasEcosferic(),
        hasMinerals: generateHasMinerals(),
        hasAnomaly: generateHasAnomaly(),
        outpost: generatePlanetOutpost(hasOutpost),
        environment: generateEnvirnonment()
    };
};

"use strict";
exports.__esModule = true;
var planetName_1 = require("./generators/planetName");
var planetType_1 = require("./generators/planetType");
var outpost_1 = require("./generators/outpost");
var star_1 = require("./generators/star");
var environment_1 = require("./generators/environment");
var events_1 = require("./generators/events");
var generatePlanetName = function () {
    return planetName_1["default"]();
};
exports.generatePlanet = function () {
    return {
        name: generatePlanetName(),
        size: planetType_1.generatePlanetSize(),
        star: star_1.generateStar(),
        event: events_1.checkEvents(),
        outpost: outpost_1.generateOutpost(),
        environment: environment_1.environmentGenerate()
    };
};

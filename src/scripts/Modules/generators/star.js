"use strict";
exports.__esModule = true;
var starType_1 = require("./starType");
exports.generateStar = function () {
    return {
        name: StarNameGenerator(),
        lifeCycle: starType_1.generateStarType(),
        spectral: starType_1.generateSpectralType()
    };
};
var availableStarNames = ['Polaris',
    'Syriusz',
    'Rigiel',
    'Vega',
    'Antares',
    'Canopus',
    'Kudo',
    'Oniga',
    'Kassimian',
    'Harravos',
    'Basusen',
    'Marev',
    'Elari',
    'Wrenn',
    'Jusurvo',
    'Soleko'];
var StarNameGenerator = function () {
    var availableStarCount = availableStarNames.length;
    var randomIndex = Math.floor(Math.random() * availableStarCount - 1);
    return availableStarNames[randomIndex];
};

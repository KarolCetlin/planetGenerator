"use strict";
exports.__esModule = true;
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
exports["default"] = StarNameGenerator;

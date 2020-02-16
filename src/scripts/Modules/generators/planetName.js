"use strict";
exports.__esModule = true;
var availablePlanetNames = ['Helara',
    'Kitrarth',
    'Zeceitera',
    'Chemion',
    '51 Pegasi b',
    'PSR 1257+12 C',
    'OGLE-TR-56b',
    'Fomalhaut',
    '2M1207b',
];
var generatePlanetName = function () {
    var availablePlanetsCount = availablePlanetNames.length;
    var randomIndex = Math.floor(Math.random() * availablePlanetsCount - 1);
    return availablePlanetNames[randomIndex];
};
exports["default"] = generatePlanetName;

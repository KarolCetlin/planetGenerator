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
    var availablePlanetsCount = availablePlanetNames.length - 1;
    var randomIndex = Math.floor(Math.random() * availablePlanetsCount);
    return availablePlanetNames[randomIndex];
};
exports["default"] = generatePlanetName;

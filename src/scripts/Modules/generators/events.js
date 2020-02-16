"use strict";
exports.__esModule = true;
;
exports.checkEvents = function () {
    var outpostPossibility = 50;
    var ecosfericPossibility = 50;
    var mineralsPossibility = 15;
    var anomalyPossibility = 25;
    exports.planetHasOutpost = checkChance(outpostPossibility);
    exports.planetHasEcosferic = checkChance(ecosfericPossibility);
    return {
        hasOutpost: exports.planetHasOutpost,
        hasEcosferic: exports.planetHasEcosferic,
        hasMinerals: checkChance(mineralsPossibility),
        hasAnomaly: checkChance(anomalyPossibility)
    };
};
var checkChance = function (requiredValue) {
    var maxChanceToSuccess = 100;
    var drawnValue = Math.floor(Math.random() * Math.floor(maxChanceToSuccess));
    return drawnValue < requiredValue;
};

"use strict";
exports.__esModule = true;
var availablePlanetSizes = [
    {
        planetSizeName: 'Asteroida',
        description: 'W tym miejscu będzie opis dotyczący wielkości tej planety, na razie jest to całkowicie puste' +
            'pole, czekające nW tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
            'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
        minSizeRadius: 0.01,
        maxSizeRadius: 0.03,
        typeSize: 'Małe planety, księżyce, czy komety'
    },
    {
        planetSizeName: 'planeta Merkuriańska',
        description: 'W tym miejscu będzie opis dotyczący wielkości tej planety, na razie jest to całkowicie puste' +
            'pole, czekające na to, aż je uzupełnisz',
        minSizeRadius: 0.03,
        maxSizeRadius: 0.7,
        typeSize: 'Planeta skalista'
    },
    {
        planetSizeName: 'pod Ziemia',
        description: 'W tym miejscu będzie opis dotyczący wielkości tej planety, na razie jest to całkowicie puste' +
            'pole, czekające na to, aż je uzupełnisz',
        minSizeRadius: 0.5,
        maxSizeRadius: 1.2,
        typeSize: 'Planeta skalista'
    },
    {
        planetSizeName: 'typ Ziemski',
        description: 'W tym miejscu będzie opis dotyczący wielkości tej planety, na razie jest to całkowicie puste' +
            'pole, czekające na to, aż je uzupełnisz',
        minSizeRadius: 0.8,
        maxSizeRadius: 1.9,
        typeSize: 'Planeta skalista'
    },
    {
        planetSizeName: 'super Ziemia',
        description: 'W tym miejscu będzie opis dotyczący wielkości tej planety, na razie jest to całkowicie puste' +
            'pole, czekające na to, aż je uzupełnisz',
        minSizeRadius: 1.3,
        maxSizeRadius: 3.3,
        typeSize: 'Planeta skalista'
    },
    {
        planetSizeName: 'planeta Neptuniczna',
        description: 'W tym miejscu będzie opis dotyczący wielkości tej planety, na razie jest to całkowicie puste' +
            'pole, czekające na to, aż je uzupełnisz',
        minSizeRadius: 0.8,
        maxSizeRadius: 1.9,
        typeSize: 'Gazowy olbrzym'
    },
    {
        planetSizeName: 'planeta Jowiszowa',
        description: 'W tym miejscu będzie opis dotyczący wielkości tej planety, na razie jest to całkowicie puste' +
            'pole, czekające na to, aż je uzupełnisz',
        minSizeRadius: 3.5,
        maxSizeRadius: 100,
        typeSize: 'Gazowy olbrzym'
    },
];
var currentTypeNumber = 0;
var generatePlanetSizeRadius = function (planetSizeParameters) {
    var minValue = planetSizeParameters.minSizeRadius;
    var maxValue = planetSizeParameters.maxSizeRadius;
    return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
};
exports.generatePlanetSize = function () {
    var countOfAvailableSizes = availablePlanetSizes.length;
    var randomAvailableSizeIndex = Math.floor(Math.random() * countOfAvailableSizes);
    var planetSizeParameters = availablePlanetSizes[randomAvailableSizeIndex];
    return {
        description: planetSizeParameters.description,
        name: planetSizeParameters.planetSizeName,
        radius: generatePlanetSizeRadius(planetSizeParameters)
    };
};
exports.numberTypeGenerator = function () {
    currentTypeNumber = Math.floor(Math.random() * availablePlanetSizes.length);
};
exports.planetSizeDescriptionGenerator = function () {
    exports.numberTypeGenerator();
    return availablePlanetSizes[currentTypeNumber]['description'];
};
exports.planetSizeNameGenerator = function () {
    exports.numberTypeGenerator();
    return availablePlanetSizes[currentTypeNumber]['planetSizeName'];
};
exports.planetTypeSizeGenerator = function () {
    return availablePlanetSizes[currentTypeNumber]['typeSize'];
};
exports.planetRadiusGenerator = function () {
    var minNumber = availablePlanetSizes[currentTypeNumber]['minSizeRadius'];
    var maxNumber = availablePlanetSizes[currentTypeNumber]['maxSizeRadius'];
    return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
};

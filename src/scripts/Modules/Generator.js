"use strict";
var _this = this;
exports.__esModule = true;
var Tools_1 = require("../Logic/Tools");
var Data_js_1 = require("../Data/Data.js");
var AddOutpost_js_1 = require("./AddOutpost.js");
var Environment_js_1 = require("./Environment.js");
var generatePlanetName = function () {
    // return getName(setPlanetNames)
};
var generateIndexSize = function () {
    return Tools_1.getNameFromArray(Data_js_1.planetSizesSet);
};
var generateSizeName = function () {
    return Tools_1.getNameFromObject(Data_js_1.planetSizesSet, _this.indexSize, "planetSizeName");
};
var generatePlanetRadius = function () {
    return Tools_1.randomNumberFromArrayInRange(Data_js_1.planetSizesSet, _this.indexSize, "minSizeRadius", "maxSizeRadius");
};
var generateStarName = function () {
    // return getName(starNamesSet);
};
var generateSizeDesctiption = function () {
    return Tools_1.getNameFromObject(Data_js_1.planetSizesSet, _this.indexSize, "description");
};
var generateStarTypeIndex = function () {
    return Tools_1.getNameFromArray(Data_js_1.setLifeCycleStars);
};
var generateStarType = function () {
    return Tools_1.getNameFromObject(Data_js_1.setLifeCycleStars, _this.starTypeIndex, "name");
};
var generateStarTypeDescription = function () {
    return Tools_1.getNameFromObject(Data_js_1.setLifeCycleStars, _this.starTypeIndex, "description");
};
var generateIndexSpectralType = function () {
    return Tools_1.randomNumberFromArrayInRange(Data_js_1.setLifeCycleStars, _this.starTypeIndex, "minSpectralType", "maxSpectralType");
};
var generateNameSpectralType = function () {
    return Tools_1.getNameFromObject(Data_js_1.setSpectralTypes, _this.indexSpectralType, "name");
};
var generateDescriptionSpectralType = function () {
    return Tools_1.getNameFromObject(Data_js_1.setSpectralTypes, _this.indexSpectralType, "description");
};
var generateHasOutpost = function () {
    return Tools_1.checkChance(Data_js_1.ecosfericPossibility);
};
var generateHasEcosferic = function () {
    return Tools_1.checkChance(Data_js_1.outpostPossibility);
};
var generateHasMinerals = function () {
    return Tools_1.checkChance(Data_js_1.mineralsPossibility);
};
var generateHasAnomaly = function () {
    return Tools_1.checkChance(Data_js_1.anomalyPossibility);
};
var generateOutpost = function (hasOutpost) {
    if (hasOutpost === true) {
        return _this.outpost = new AddOutpost_js_1["default"]();
    }
    else {
        console.log('Niestety nie ma żadnego posterunku na tej planecie');
    }
};
var generateEnvirnonment = function (hasEcosferic) {
    if (hasEcosferic) {
        _this.envirnonment = new Environment_js_1["default"]();
    }
    else {
        console.log('planeta poza ekosferą, istenienie środowiska jest niemożliwe');
        return null;
    }
};
exports.generatePlanet = function () {
    var hasEcosferic = generateHasEcosferic();
    return {
        planetName: generatePlanetName(),
        indexSize: generateIndexSize(),
        sizeName: generateSizeName(),
        planetRadius: generatePlanetRadius(),
        starName: generateStarName(),
        sizeDesctiption: generateSizeDesctiption(),
        starTypeIndex: generateStarTypeIndex(),
        starType: generateStarType(),
        starTypeDescription: generateStarTypeDescription(),
        indexSpectralType: generateIndexSpectralType(),
        nameSpectralType: generateNameSpectralType(),
        descriptionSpectralType: generateDescriptionSpectralType(),
        hasOutpost: generateHasOutpost(),
        hasEcosferic: hasEcosferic,
        hasMinerals: generateHasMinerals(),
        hasAnomaly: generateHasAnomaly(),
        outpost: generateOutpost(hasEcosferic),
        environment: generateEnvirnonment(hasEcosferic)
    };
};
// class Generator {
//     constructor(planetData = {}) {
//         this.planetName = planetData.planetName;
//
//         this.indexSize = planetData.indexSize;
//         this.sizeName = planetData.sizeName;
//         this.planetRadius = planetData.planetRadius;
//
//         this.starName = planetData.starName;
//         this.sizeDesctiption = planetData.sizeDesctiption;
//
//         this.starTypeIndex = planetData.starTypeIndex;
//         this.starType = planetData.starType;
//         this.starTypeDescription = planetData.starTypeDescription;
//
//         this.indexSpectralType = planetData.indexSpectralType;
//         this.nameSpectralType = planetData.nameSpectralType;
//         this.descriptionSpectralType = planetData.descriptionSpectralType;
//
//         this.hasOutpost = planetData.hasOutpost;
//         this.hasEcosferic = planetData.hasEcosferic;
//         this.hasMinerals = planetData.hasMinerals;
//         this.hasAnomaly = planetData.hasAnomaly;
//
//         this.outpost = planetData.outpost;
//         this.envirnonment = planetData.envirnonment;
//
//
//         this.createPlanetCard();
//         this.createStarCard();
//
//         this.checkKeyConditions();
//         this.createOutpostCard();
//         this.createEnvironmentCard();
//     }
//
//     createPlanetCard() {
//
//         this.planetName = getName(setPlanetNames);
//
//         this.indexSize = getNameFromArray(planetSizesSet);
//         this.sizeName = getNameFromObject(
//             planetSizesSet,
//             this.indexSize,
//             "planetSizeName"
//         );
//         this.planetRadius = randomNumberFromArrayInRange(
//             planetSizesSet,
//             this.indexSize,
//             "minSizeRadius",
//             "maxSizeRadius"
//         );
//
//         this.sizeDesctiption = getNameFromObject(
//             planetSizesSet,
//             this.indexSize,
//             "description"
//         );
//
//     }
//
//     createStarCard() {
//
//         this.starName = getName(starNamesSet);
//
//         this.starTypeIndex = getNameFromArray(setLifeCycleStars);
//         this.starType = getNameFromObject(
//             setLifeCycleStars,
//             this.starTypeIndex,
//             "name"
//         );
//         this.starTypeDescription = getNameFromObject(
//             setLifeCycleStars,
//             this.starTypeIndex,
//             "description"
//         );
//         this.indexSpectralType = randomNumberFromArrayInRange(
//             setLifeCycleStars,
//             this.starTypeIndex,
//             "minSpectralType",
//             "maxSpectralType"
//         );
//         this.nameSpectralType = getNameFromObject(
//             setSpectralTypes,
//             this.indexSpectralType,
//             "name"
//         );
//         this.descriptionSpectralType = getNameFromObject(
//             setSpectralTypes,
//             this.indexSpectralType,
//             "description"
//         );
//
//     }
//
//     checkKeyConditions() {
//         this.hasEcosferic = checkChance(ecosfericPossibility);
//         this.hasOutpost = checkChance(outpostPossibility);
//         this.hasMinerals = checkChance(mineralsPossibility);
//         this.hasAnomaly = checkChance(anomalyPossibility);
//     }
//
//     createOutpostCard() {
//
//         if (this.hasOutpost === true) {
//
//             this.outpost = new AddOutpost();
//
//         } else {
//             console.log('Niestety nie ma żadnego posterunku na tej planecie');
//         }
//     }
//
//     createEnvironmentCard() {
//
//         if (this.hasEcosferic === true) {
//
//             this.envirnonment = new Environment();
//
//         } else {
//             console.log('planeta poza ekosferą, istenienie środowiska jest niemożliwe');
//         }
//
//
//     }
//
// }

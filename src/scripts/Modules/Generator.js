"use strict";
var _this = this;
exports.__esModule = true;
var Tools_1 = require("../Logic/Tools");
var Data_1 = require("../Data/Data");
var Environment_js_1 = require("./Environment.js");
var planetNameGenerator_1 = require("./generators/planetNameGenerator");
var planetNameGenerator_2 = require("./generators/planetNameGenerator");
var planetTypeGenerator_1 = require("./generators/planetTypeGenerator");
var starTypeGenerator_1 = require("./generators/starTypeGenerator");
var AddOutpost_1 = require("./AddOutpost");
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
var generateStarType = function () {
    return starTypeGenerator_1.starTypeName();
};
var generateStarTypeDescription = function () {
    return starTypeGenerator_1.starDescription();
};
var generateIndexSpectralType = function () {
    return starTypeGenerator_1.starSpectralType();
};
var generateNameSpectralType = function () {
    return Tools_1.getNameFromObject(Data_1.setSpectralTypes, _this.indexSpectralType, "name");
};
var generateDescriptionSpectralType = function () {
    return Tools_1.getNameFromObject(Data_1.setSpectralTypes, _this.indexSpectralType, "description");
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
    return AddOutpost_1.generateOutpost();
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
        size: generatePlanetSizeName(),
        radius: generatePlanetRadius(),
        description: generatePlanetSizeDescription(),
        hasOutpost: generateHasOutpost(),
        hasEcosferic: generateHasEcosferic(),
        hasMinerals: generateHasMinerals(),
        hasAnomaly: generateHasAnomaly(),
        outpost: generatePlanetOutpost(hasOutpost),
        environment: generateEnvirnonment()
    };
};
exports.generateStar = function () {
    return {
        name: generateStarName(),
        starType: generateStarType(),
        starTypeDescription: generateStarTypeDescription(),
        indexSpectralType: generateIndexSpectralType(),
        nameSpectralType: generateNameSpectralType(),
        descriptionSpectralType: generateDescriptionSpectralType()
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

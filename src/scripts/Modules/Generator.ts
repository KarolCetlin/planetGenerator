import {getName, getNameFromArray, getNameFromObject, randomNumberFromArrayInRange, checkChance} from "../Logic/Tools";
import {planetSizesSet, setPlanetNames, starNamesSet, setLifeCycleStars, setSpectralTypes, ecosfericPossibility, outpostPossibility, mineralsPossibility, anomalyPossibility, } from "../Data/Data";
import Environment from "./Environment.js";
import planetNameGenerator  from './generators/planetNameGenerator'
import starNameGenerator from './generators/planetNameGenerator'
import { planetSizeDescriptionGenerator, numberTypeGenerator, planetSizeNameGenerator, planetTypeSizeGenerator, planetRadiusGenerator } from './generators/planetTypeGenerator'
import { starTypeName, starDescription, starSpectralType } from './generators/starTypeGenerator';
import { generateOutpost } from './AddOutpost';

interface Planet {
    name: string;
    size: string;
    description: string;
    radius: number;

    hasOutpost: boolean;
    hasEcosferic: boolean;
    hasMinerals: boolean;
    hasAnomaly: boolean;
    outpost: any;
    environment: string | null;
}

interface Star {
    name: string;
    starType: string;
    starTypeDescription: string;
    indexSpectralType: number;
    nameSpectralType: string;
    descriptionSpectralType: string;

}


const generatePlanetName = (): string => {
    return planetNameGenerator();
};

const generatePlanetSizeName = (): string => {
    return planetSizeNameGenerator()
};

const generatePlanetRadius = (): number => {
    return planetRadiusGenerator()
};

const generateStarName = (): string => {
    return starNameGenerator();
};

const generatePlanetSizeDescription = (): string => {

    return planetSizeDescriptionGenerator()

};

const generateStarType = (): string => {
    return starTypeName();
};

const generateStarTypeDescription = (): string => {
    return starDescription()
};

const generateIndexSpectralType = (): number => {
    return starSpectralType ()
};

const generateNameSpectralType = (): string => {
    return getNameFromObject(
            setSpectralTypes,
            this.indexSpectralType,
            "name"
        );
};

const generateDescriptionSpectralType = (): string => {
    return getNameFromObject(
            setSpectralTypes,
            this.indexSpectralType,
            "description"
        );
};

const generateHasOutpost = (): boolean => {
    return checkChance(outpostPossibility);
};

const generateHasEcosferic = (): boolean => {
    return checkChance(ecosfericPossibility);
};

const generateHasMinerals = (): boolean => {
    return checkChance(mineralsPossibility);
};

const generateHasAnomaly = (): boolean => {
    return checkChance(anomalyPossibility);
};

const generatePlanetOutpost = (hasOutpost): any => {

    return generateOutpost();


    // if (hasOutpost === true) {
    //
    //     return generateOutpost();
    //
    //     } else {
    //         console.log('Niestety nie ma żadnego posterunku na tej planecie');
    //     }
};

console.log(generatePlanetOutpost);

const generateEnvirnonment = (): string => {
    if (this.hasEcosferic == true) {
        this.environment = new Environment();
    } else {
        console.log('planeta poza ekosferą, istenienie środowiska jest niemożliwe');
        return null;
    }

};

export const generatePlanet = (): Planet => {
    const hasEcosferic = generateHasEcosferic();
    const hasOutpost = generateHasOutpost();

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
        environment: generateEnvirnonment(),

    };

};

export const generateStar = (): Star => {

    return {

        name: generateStarName(),
        starType: generateStarType(),
        starTypeDescription: generateStarTypeDescription(),
        indexSpectralType: generateIndexSpectralType(),
        nameSpectralType: generateNameSpectralType(),
        descriptionSpectralType: generateDescriptionSpectralType(),


    }

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


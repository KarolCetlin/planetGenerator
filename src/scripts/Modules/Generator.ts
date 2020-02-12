import {getName, getNameFromArray, getNameFromObject, randomNumberFromArrayInRange, checkChance} from "../Logic/Tools";
import {planetSizesSet, setPlanetNames, starNamesSet, setLifeCycleStars, setSpectralTypes, ecosfericPossibility, outpostPossibility, mineralsPossibility, anomalyPossibility, } from "../Data/Data";
import AddOutpost from "./AddOutpost.js";
import Environment from "./Environment.js";

interface Planet {
    planetName: string;
    indexSize: string;
    sizeName: string;
    planetRadius: number;
    starName: string;
    sizeDesctiption: string;
    starTypeIndex: number;
    starType: string;
    starTypeDescription: string;
    indexSpectralType: number;
    nameSpectralType: string;
    descriptionSpectralType: string;
    hasOutpost: boolean;
    hasEcosferic: boolean;
    hasMinerals: boolean;
    hasAnomaly: boolean;
    outpost: any;
    environment: string | null;
}

const generatePlanetName = (): any => {
    return getName(setPlanetNames)
};

const generateIndexSize = (): string => {
    return getNameFromArray(planetSizesSet);
};

const generateSizeName = (): string => {
    return getNameFromObject(
        planetSizesSet,
        this.indexSize,
        "planetSizeName");
};

const generatePlanetRadius = (): number => {
    return randomNumberFromArrayInRange(
        planetSizesSet,
        this.indexSize,
        "minSizeRadius",
        "maxSizeRadius"
    );
};

const generateStarName = (): any => {
    return getName(starNamesSet);
};

const generateSizeDesctiption = (): string => {
    return getNameFromObject(
        planetSizesSet,
        this.indexSize,
        "description"
    );

};

const generateStarTypeIndex = (): number => {
    return getNameFromArray(setLifeCycleStars);
};

const generateStarType = (): string => {
    return getNameFromObject(
        setLifeCycleStars,
        this.starTypeIndex,
        "name"
    );
};

const generateStarTypeDescription = (): string => {
    return getNameFromObject(
        setLifeCycleStars,
        this.starTypeIndex,
        "description"
    );
};

const generateIndexSpectralType = (): number => {
    return randomNumberFromArrayInRange(
            setLifeCycleStars,
            this.starTypeIndex,
            "minSpectralType",
            "maxSpectralType"
        );
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
    return checkChance(ecosfericPossibility);
};

const generateHasEcosferic = (): boolean => {
    return checkChance(outpostPossibility);
};

const generateHasMinerals = (): boolean => {
    return checkChance(mineralsPossibility);
};

const generateHasAnomaly = (): boolean => {
    return checkChance(anomalyPossibility);
};

const generateOutpost = (hasOutpost): any => {
    if (hasOutpost === true) {

        return this.outpost = new AddOutpost();

        } else {
            console.log('Niestety nie ma żadnego posterunku na tej planecie');
        }
};

const generateEnvirnonment = (hasEcosferic): string => {
    if (hasEcosferic) {
        this.envirnonment = new Environment();
    } else {
        console.log('planeta poza ekosferą, istenienie środowiska jest niemożliwe');
        return null;
    }

};

export const generatePlanet = (): Planet => {
    const hasEcosferic = generateHasEcosferic();

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
        hasEcosferic,
        hasMinerals: generateHasMinerals(),
        hasAnomaly: generateHasAnomaly(),
        outpost: generateOutpost(hasEcosferic),
        environment: generateEnvirnonment(hasEcosferic),
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


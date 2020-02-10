import {checkChance, getName, getNameFromArray, getNameFromObject, randomNumberFromArrayInRange} from "../Logic/Tools";
import {
    anomalyPossibility,
    ecosfericPossibility,
    mineralsPossibility,
    outpostPossibility,
    planetSizesSet,
    setLifeCycleStars,
    setPlanetNames,
    setSpectralTypes,
    starNamesSet
} from "../Data/Data.js";
import Environment from "./Environment.js";
import AddOutpost from "./AddOutpost.js";

class Generator {
    constructor(planetData = {}) {
        this.planetName = planetData.planetName;

        this.indexSize = planetData.indexSize;
        this.sizeName = planetData.sizeName;
        this.planetRadius = planetData.planetRadius;

        this.starName = planetData.starName;
        this.sizeDesctiption = planetData.sizeDesctiption;

        this.starTypeIndex = planetData.starTypeIndex;
        this.starType = planetData.starType;
        this.starTypeDescription = planetData.starTypeDescription;

        this.indexSpectralType = planetData.indexSpectralType;
        this.nameSpectralType = planetData.nameSpectralType;
        this.descriptionSpectralType = planetData.descriptionSpectralType;

        this.hasOutpost = planetData.hasOutpost;
        this.hasEcosferic = planetData.hasEcosferic;
        this.hasMinerals = planetData.hasMinerals;
        this.hasAnomaly = planetData.hasAnomaly;

        this.outpost = planetData.outpost;
        this.envirnonment = planetData.envirnonment;


        this.createPlanetCard();
        this.createStarCard();

        this.checkKeyConditions();
        this.createOutpostCard();
        this.createEnvironmentCard();
    }

    createPlanetCard() {

        this.planetName = getName(setPlanetNames);

        this.indexSize = getNameFromArray(planetSizesSet);
        this.sizeName = getNameFromObject(
            planetSizesSet,
            this.indexSize,
            "planetSizeName"
        );
        this.planetRadius = randomNumberFromArrayInRange(
            planetSizesSet,
            this.indexSize,
            "minSizeRadius",
            "maxSizeRadius"
        );

        this.sizeDesctiption = getNameFromObject(
            planetSizesSet,
            this.indexSize,
            "description"
        );

    }

    createStarCard() {

        this.starName = getName(starNamesSet);

        this.starTypeIndex = getNameFromArray(setLifeCycleStars);
        this.starType = getNameFromObject(
            setLifeCycleStars,
            this.starTypeIndex,
            "name"
        );
        this.starTypeDescription = getNameFromObject(
            setLifeCycleStars,
            this.starTypeIndex,
            "description"
        );
        this.indexSpectralType = randomNumberFromArrayInRange(
            setLifeCycleStars,
            this.starTypeIndex,
            "minSpectralType",
            "maxSpectralType"
        );
        this.nameSpectralType = getNameFromObject(
            setSpectralTypes,
            this.indexSpectralType,
            "name"
        );
        this.descriptionSpectralType = getNameFromObject(
            setSpectralTypes,
            this.indexSpectralType,
            "description"
        );

    }

    checkKeyConditions() {
        this.hasEcosferic = checkChance(ecosfericPossibility);
        this.hasOutpost = checkChance(outpostPossibility);
        this.hasMinerals = checkChance(mineralsPossibility);
        this.hasAnomaly = checkChance(anomalyPossibility);
    }

    createOutpostCard() {

        if (this.hasOutpost === true) {

            this.outpost = new AddOutpost();

        } else {
            console.log('Niestety nie ma żadnego posterunku na tej planecie');
        }
    }

    createEnvironmentCard() {

        if (this.hasEcosferic === true) {

            this.envirnonment = new Environment();

        } else {
            console.log('planeta poza ekosferą, istenienie środowiska jest niemożliwe');
        }


    }

}

export default Generator;

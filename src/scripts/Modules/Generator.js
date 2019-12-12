import {
  getRandomNumber,
  getName,
  getNameFromArray,
  getNameFromObject,
  randomNumberFromArrayInRange,
  checkChance,
  sortObjectInArray,
  findNumberFromTotal,
  randomNumberInRange
} from "../Logic/Tools";
import {
  outpostPossibility,
  ecosfericPossibility,
  setSpectralTypes,
  mineralsPossibility,
  anomalyPossibility,
  planetID,
  hasLife,
  planetTypeConfiguration,
  amountPopulation,
  hasEcosferic,
  setPlanetNames,
  starNamesSet,
  planetSizesSet,
  setLifeCycleStars
} from "../Data/Data.js";
import Show from "../View/Tools/Show.js";
import Switch from "../View/Tools/Switch.js";
import AddEnvironment from "./AddEnvironment.js";
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

  createPlanetCard(){

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

  createStarCard(){

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
     this.outpost = new AddOutpost(this.hasOutpost);
  }

  createEnvironmentCard(){
    this.envirnonment = new AddEnvironment(this.hasEcosferic);
  }

}

export default Generator;

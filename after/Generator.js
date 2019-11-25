
import {getRandomNumber, getNameFromArray, getNameFromObject, randomNumberFromArrayInRange, checkChance, sortObjectInArray, findNumberFromTotal, randomNumberInRange} from './Tools';
import {outpostPossibility, ecosfericPossibility, mineralsPossibility, anomalyPossibility, hasLife, planetTypeConfiguration, amountPopulation, hasEcosferic, setPlanetNames, starNamesSet, planetSizesSet, setLifeCycleStars} from './Data';



class Generator {
    constructor(planetData = {}) {
                // this.outpost = new AddOutpost();

        // this.indexName = planetData.indexName;
        this.planetName = planetData.planetName;

        // this.indexSize = planetData.indexSize;
        this.sizeName = planetData.sizeName;

        this.indexStarName = planetData.indexStarName;
        this.starName = planetData.starName;
        this.sizeDesctiption = planetData.sizeDesctiption;

        this.starTypeIndex = planetData.starTypeIndex;
        this.starType = planetData.starType;
        this.starTypeDescription = planetData.starTypeDescription;

        this.hasOutpost = planetData.hasOutpost;
        this.hasEcosferic = planetData.hasEcosferic;
        this.hasMinerals = planetData.hasMinerals;
        this.hasAnomaly = planetData.hasAnomaly;

        this.outpostName = planetData.outpostName;
        this.envirnonment = planetData.envirnonment;

        this.addKeyParametrs();
        // this.checkKeyConditions();
        // this.addDependentParametrs();


    }

    addKeyParametrs() {

        this.indexName = getNameFromArray(setPlanetNames);
        this.planetName = getNameFromArray(setPlanetNames, this.indexName);

        this.indexSize = getNameFromArray(planetSizesSet);
        this.sizeName = getNameFromObject(planetSizesSet, this.indexSize, 'planetSizeName');
        this.sizeDesctiption = getNameFromObject(planetSizesSet, this.indexSize, 'description');

        this.indexStarName = getNameFromArray(starNamesSet);
        this.starName = getNameFromArray(starNamesSet, this.indexStarName);

        this.starTypeIndex = getNameFromArray(setLifeCycleStars);
        this.starType = getNameFromObject(setLifeCycleStars, this.starTypeIndex, 'name');
        this.starTypeDescription = getNameFromObject(setLifeCycleStars, this.starTypeIndex, 'description');

        

    }
    //
    // checkKeyConditions() {
    //
    //     this.hasEcosferic = Tools.checkChance(Data.ecosfericPossibility);
    //     this.hasOutpost = Tools.checkChance(Data.outpostPossibility);
    //     this.hasMinerals = Tools.checkChance(Data.mineralsPossibility);
    //     this.hasAnomaly = Tools.checkChance(Data.anomalyPossibility);
    // }
    //
    // addDependentParametrs() {
    //     this.envirnonment = new AddEnvironment(this.hasEcosferic);
    //     this.outpostName =  new AddOutpost(this.hasOutpost);
    //
    // }
}

export {Generator}

const init = new Generator();
console.log(init);

class Generator {
    constructor(planetData = {}) {
        this.tools = new Tools();
        this.data = new Data();

        this.indexName = planetData.indexName;
        this.planetName = planetData.planetName;

        this.indexSize = planetData.indexSize;
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

        this.addKeyParametrs();
        this.checkKeyConditions();
        this.addDependentParametrs();
    }

    addKeyParametrs() {

        this.indexName = this.tools.getNameFromArray(this.data.setPlanetNames);
        this.planetName = this.tools.getNameFromArray(this.data.setPlanetNames, this.indexName);

        this.indexSize = this.tools.getNameFromArray(this.data.planetSizesSet);
        this.sizeName = this.tools.getNameFromObject(this.data.planetSizesSet, this.indexSize, 'planetSizeName');
        this.sizeDesctiption = this.tools.getNameFromObject(this.data.planetSizesSet, this.indexSize, 'description');

        this.indexStarName = this.tools.getNameFromArray(this.data.starNamesSet);
        this.starName = this.tools.getNameFromArray(this.data.starNamesSet, this.indexStarName);

        this.starTypeIndex = this.tools.getNameFromArray(this.data.setLifeCycleStars);
        this.starType = this.tools.getNameFromObject(this.data.setLifeCycleStars, this.starTypeIndex, 'name');
        this.starTypeDescription = this.tools.getNameFromObject(this.data.setLifeCycleStars, this.starTypeIndex, 'description');


    }

    checkKeyConditions() {
        this.hasOutpost = this.tools.checkChance(this.data.outpostPossibility);
        this.hasEcosferic = this.tools.checkChance(this.data.ecosfericPossibility);
        this.hasMinerals = this.tools.checkChance(this.data.mineralsPossibility);
        this.hasAnomaly = this.tools.checkChance(this.data.anomalyPossibility);
    }

    addDependentParametrs() {

        this.tools.addAllSociety()



    }


}

//
// const init = new Generator();

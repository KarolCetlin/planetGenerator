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

        this.colonyChance = planetData.colonyChance;

        this.addParametrs();
    }

    addParametrs() {

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

    checkConditions() {




    }


}

//
// const init = new Generator();

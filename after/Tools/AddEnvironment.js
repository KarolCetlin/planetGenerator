
class AddEnvironment {
    constructor(condition) {

        if (condition === true) {

            this.data = new Data();
            this.tools = new Tools();

            this.drawnTemperature = '';
            this.drawnHumidity = '';
            this.indexTemperature = '';
            this.indexHumidity = '';
            this.worldTypeName = '';
            this.worldTypeDescription = '';

            this.initEnvironment()
        } else {
            console.log('planeta poza ekosferą, istenienie środowiska jest niemożliwe');
        }


    }

    initEnvironment() {
        this.addHumidity();
        this.addTemperature();
        this.matchTypeWorld();

    }

    matchTypeWorld() {
        for (let checkPlanet = 0; checkPlanet < this.data.worldTypesSet.length; checkPlanet++) {

            let requiredTemperature = this.data.worldTypesSet[checkPlanet].Temperature;
            let requiredHumidity = this.data.worldTypesSet[checkPlanet].Humidity;

            if (this.indexTemperature === requiredTemperature && this.indexHumidity === requiredHumidity) {

                this.worldTypeName = this.data.worldTypesSet[checkPlanet].Name;
                this.worldTypeDescription = this.data.worldTypesSet[checkPlanet].Description
            }
        }

    }


    addTemperature() {
        this.indexTemperature = this.tools.getNameFromArray(this.data.temperaturesSet);
        this.drawnTemperature = this.tools.getNameFromObject(this.data.temperaturesSet, this.indexTemperature, 'Name');

        console.log(this.drawnTemperature);
    }

    addHumidity() {
        this.indexHumidity = this.tools.getNameFromArray(this.data.humiditiesSet);
        this.drawnHumidity = this.tools.getNameFromObject(this.data.humiditiesSet, this.indexHumidity, 'Name');
    }

}
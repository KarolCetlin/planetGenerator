'use strict';


class World {
    constructor(collection = {}) {
        this.data = new Data();
        this.calc = new Calc();

        this.$humidityTitle = document.getElementById('humidityName');
        this.$humidityDescription = document.getElementById('humidityDescription');
        this.$temperatureTitle = document.getElementById('temperatureName');
        this.$temperatureDescription = document.getElementById('temperatureDescription');
        this.$worldTitle = document.getElementById('planetTypeName');
        this.$worldDescription = document.getElementById('planetTypeDescription');

        this.drawnTemperature = collection.drawnTemperature;
        this.drawnHumidity = '';
        this.indexTemperature = '';
        this.indexHumidity = '';


    }

    checkConditionsForLifeWorld(conditions){
        if(conditions === true) {
            this.addHumidity();
            this.addTemperature();
            this.matchTypeWorld();
        } else {

        }

    }

    matchTypeWorld() {

        this.indexTemperature = this.data.temperaturesSet.indexOf(this.drawnTemperature);
        this.indexHumidity = this.data.humiditiesSet.indexOf(this.drawnHumidity);

        for(let checkPlanet = 0; checkPlanet < this.data.worldTypesSet.length; checkPlanet++) {

            let requiredTemperature = this.data.worldTypesSet[checkPlanet].Temperature;
            let requiredHumidity = this.data.worldTypesSet[checkPlanet].Humidity;

            if (this.indexTemperature === requiredTemperature && this.indexHumidity === requiredHumidity) {

                this.$worldTitle.innerHTML = `<span>Typ planety: </span> ${this.data.worldTypesSet[checkPlanet].Name}`;
                this.$worldDescription.innerHTML = ` ${this.data.worldTypesSet[checkPlanet].Description}`;

            }
        }


    }

        addTemperature(){
            this.drawnTemperature = this.data.temperaturesSet[this.calc.getRandomIndexFromArray(this.data.temperaturesSet)];

            this.$temperatureTitle.innerHTML = `<span>Globalna temperatura: </span> ${this.drawnTemperature.Name}`;
            this.$temperatureDescription.innerHTML = `${this.drawnTemperature.Description}`;

        }

        addHumidity(){
            this.drawnHumidity = this.data.humiditiesSet[this.calc.getRandomIndexFromArray(this.data.humiditiesSet)];

            this.$humidityTitle.innerHTML = `<span>Klimat: </span> ${this.drawnHumidity.Name}`;
            this.$humidityDescription.innerHTML = `${this.drawnHumidity.Description}`;
        }

}
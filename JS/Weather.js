'use strict';


class Weather {
    constructor() {

        this.data = new DataPlanets();
        this.calc = new Calculations();

        this.humName = document.getElementById('humidityName');
        this.humDescription = document.getElementById('humidityDescription');
        this.tempName = document.getElementById('temperatureName');
        this.tempDescription = document.getElementById('temperatureDescription');
        this.planetTypeName = document.getElementById('planetTypeName');
        this.planetTypeDescription = document.getElementById('planetTypeDescription');

    }

    *generator(number) {
       const showPlanet = yield this.data.planetType[number].Name;
        console.log(`Chyba działa ${showPlanet}`);

    }

    keyParametersForMakePlanet() {

        let temperature = this.data.temperature[this.calc.drawPropertyFromArray(this.data.temperature)];
        let temp = this.data.temperature.indexOf(temperature);

        let humidity = this.data.humidity[this.calc.drawPropertyFromArray(this.data.humidity)];
        let hum = this.data.humidity.indexOf(humidity);

        // HTML //
        this.tempName.innerHTML = `<span>Globalna temperatura: </span> ${temperature.Name}`;
        this.tempDescription.innerHTML = `${temperature.Description}`;
        this.humName.innerHTML = `<span>Klimat: </span> ${humidity.Name}`;
        this.humDescription.innerHTML = `${humidity.Description}`;

        for(let selectedPlanet = 0; selectedPlanet < this.data.planetType.length; selectedPlanet++) {

            let desiredTemperature = this.data.planetType[selectedPlanet].Temperature;
            let desiredHumidity = this.data.planetType[selectedPlanet].Humidity;

            if (temp === desiredTemperature && hum === desiredHumidity) {

                this.planetTypeName.innerHTML = `<span>Typ planety: </span> ${this.data.planetType[selectedPlanet].Name}`;
                this.planetTypeDescription.textContent = ` ${this.data.planetType[selectedPlanet].Description}`;

            }
        }
        }


}
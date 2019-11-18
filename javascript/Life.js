'use strict';

class Life {
    constructor() {

        this.calc = new Calc();
        this.data = new DataPlanets();

        this.$lifeSwitch = document.getElementById('isLifeOnPlanet');
        this.$raceLog = document.getElementById('colonyStructure');
        this.$societySpace = document.getElementById('colonyPopulation');
        this.$checkbox = document.getElementById('radioTest1');

    }

    isLifeOnPlanet() {

        if(this.calc.getRandomProperty() < this.data.changeOnLife){
            this.$lifeSwitch.innerHTML = `<span> Czy planeta posiada kolonie? </span> ${this.data.planetPeople[0]}`;
            this.hasLife = true;
            this.addSociety();

        } else {
            this.$lifeSwitch.innerHTML = `<span> Czy planeta posiada kolonie? </span> ${this.data.planetPeople[1]}`;
            this.calc.clearDate(this.$societySpace);
            this.calc.clearDate(this.$raceLog);

            this.data.changeOnMinerals = 30;
            this.hasLife = false;

            this.$checkbox.checked = true;

        }
    }

    populationStructure() {
        let selectedColonyType = this.calc.getRandomItemFromArray(this.data.collonyType);
        this.populationQuantity = Math.floor(Math.random() * (this.data.collonyType[selectedColonyType].maxSize -
            this.data.collonyType[selectedColonyType].minSize + 1)) + this.data.collonyType[selectedColonyType].minSize;

        this.$raceLog.innerHTML = `<span> Typ: </span> ${this.data.collonyType[selectedColonyType].name}`;
    }


    addSociety() {

        if (this.hasLife === true) {
            this.populationStructure();

            let wholePopulation = 101;
            this.$societySpace.innerHTML = '';
            this.$societySpace.innerHTML += `<span>Populacja:</span> ${this.populationQuantity} mieszkańców </br>`;

            this.data.collectionRaceToDraw = [...this.data.collectionAllRaces];

            while (wholePopulation > 1) {
                let percentDrawRace = Math.floor(Math.random() * wholePopulation);

                if (percentDrawRace === 0 ) {
                    continue;

                }

                this.data.drawnRace = this.calc.getRandomItemFromArray(this.data.collectionRaceToDraw);

                if(this.data.collectionRaceToDraw[this.data.drawnRace] === undefined){
                    this.data.collectionRaceToDraw.push('Brak szczegółowych danych, błędy w raportach');
                }

                let amountDrawRace = Math.round(this.populationQuantity / 100 * percentDrawRace);

                this.$societySpace.innerHTML += `${this.data.collectionRaceToDraw[this.data.drawnRace]} ${percentDrawRace}% </br>`;

                if(percentDrawRace > 51){
                    console.log('Ma większe')

                    this.$societySpace.innerHTML += `Planeta należaca do ${this.data.drawnRace}`;

                }

                wholePopulation -= percentDrawRace;
                this.data.collectionRaceToDraw.splice(this.data.drawnRace, 1);
            }


        }
    }
    checkSocialLaw() {

    }

}
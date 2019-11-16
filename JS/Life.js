'use strict';

class Life {
    constructor() {

        this.calc = new Calculations();
        this.data = new DataPlanets();

        this.life = document.getElementById('isLifeOnPlanet');
        this.structure = document.getElementById('colonyStructure');
        this.race = document.getElementById('colonyPopulation');

    }

    isLifeOnPlanet() {

        if(this.calc.drawProperty() < this.data.changeOnLife){
            this.life.innerHTML = `<span> Czy planeta posiada kolonie? </span> ${this.data.planetPeople[0]}`;
            this.hasLife = true;
            this.population();
        } else {
            this.life.innerHTML = `<span> Czy planeta posiada kolonie? </span> ${this.data.planetPeople[1]}`;
            this.race.innerHTML = '';
            this.structure.innerHTML = '';
            this.data.changeOnMinerals = 30;
            this.hasLife = false;
        }
    }

    populationStructure() {
        let selectedColonyType = this.calc.drawPropertyFromArray(this.data.collonyType);
        this.amountPopulation = Math.floor(Math.random() * (this.data.collonyType[selectedColonyType].maxSize - this.data.collonyType[selectedColonyType].minSize + 1)) + this.data.collonyType[selectedColonyType].minSize;

        this.structure.innerHTML = `<span> Typ: </span> ${this.data.collonyType[selectedColonyType].name}`;
    }


    population() {

        if (this.hasLife === true) {
            this.populationStructure();

            let wholePopulation = 101;
            this.race.innerHTML = '';
            this.race.innerHTML += `<span>Populacja:</span> ${this.amountPopulation} mieszkańców </br>`;

            this.data.collectionRaceToDraw = [...this.data.collectionAllRaces];

            while (wholePopulation > 1) {
                let percentDrawRace = Math.floor(Math.random() * wholePopulation);

                if (percentDrawRace === 0 ) {
                    continue;

                }

                this.data.drawnRace = this.calc.drawPropertyFromArray(this.data.collectionRaceToDraw);

                if(this.data.collectionRaceToDraw[this.data.drawnRace] === undefined){
                    this.data.collectionRaceToDraw.push('Brak szczegółowych danych, błędy w raportach');
                }

                let amountDrawRace = Math.round(this.amountPopulation / 100 * percentDrawRace);

                this.race.innerHTML += `${this.data.collectionRaceToDraw[this.data.drawnRace]} ${percentDrawRace}% </br>`;

                if(percentDrawRace > 51){
                    console.log('Ma większe')
                }

                wholePopulation -= percentDrawRace;
                this.data.collectionRaceToDraw.splice(this.data.drawnRace, 1);
            }


        }
    }
    checkSocialLaw() {

    }

}
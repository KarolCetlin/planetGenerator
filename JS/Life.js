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
            this.life.textContent = `Czy planeta posiada kolonie ras rozumnych? ${this.data.planetPeople[0]}`;
            this.hasLife = true;
            this.population();
        } else {
            this.life.textContent = `Czy planeta posiada kolonie ras rozumnych? ${this.data.planetPeople[1]}`;
            this.hasLife = false;
            this.data.changeOnMinerals = 30;
        }
    }

    populationStructure() {
        let selectedColonyType = this.calc.drawPropertyFromArray(this.data.collonyType);
        this.amountPopulation = Math.floor(Math.random() * (this.data.collonyType[selectedColonyType].maxSize - this.data.collonyType[selectedColonyType].minSize + 1)) + this.data.collonyType[selectedColonyType].minSize;

        this.structure.textContent = `Typ osady: ${this.data.collonyType[selectedColonyType].name}`;
    }


    population() {

        if (this.hasLife === true) {
            this.populationStructure();

            let wholePopulation = 101;
            this.race.innerHTML = '';
            this.race.innerHTML += `Populuacja ma: ${this.amountPopulation} mieszkańców </br>`;

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

                this.race.innerHTML += `Rasa ${this.data.collectionRaceToDraw[this.data.drawnRace]} to ${percentDrawRace}% populacji tej planety, czyli ${amountDrawRace} osób </br>`;

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
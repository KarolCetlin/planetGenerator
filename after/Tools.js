'use strict';

class Tools{
    constructor(){
        this.data = new Data();

        this.raceArray = [];
        console.log(this.raceArray);
    }



    getRandomNumber(maxNumber){
        maxNumber = Math.floor(maxNumber);
        return Math.floor(Math.random() * maxNumber);
    }

    getNameFromArray(array, index) {

        if(typeof array === 'object' && typeof index === 'number'){

            return array[index]

        } else if(typeof array === 'object' &&  typeof index !== 'number'){

            return this.getRandomNumber(array.length)
        }
    }

    getNameFromObject(object, index, parametr){
        return object[index][parametr]
    }


    randomNumberFromArrayInRange(array, insertIndex, minKeyName, maxKeyName) {
        this.collection = array;

        this.minKeyToString = minKeyName.toString();
        this.maxKeyToString = maxKeyName.toString();

        let minNumber = this.collection[insertIndex][this.minKeyToString];
        let maxNumber = this.collection[insertIndex][this.maxKeyToString];

        return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
    }


    checkChance(requiredValue){
        let chanceValue = this.getRandomNumber(100);

        if(chanceValue > requiredValue) {
            return true;
        } else {
            return false;
        }
    }

    addAllSociety() {

            this.addRaceToSociety();

            let wholePopulation = 101;


            this.data.copyRaceSet = [...this.data.mainRacesCollection];

            while (wholePopulation > 1) {

                let percentDrawnRace = this.getRandomNumber(wholePopulation);

                if (percentDrawnRace === 0) {
                    continue;
                }

                this.data.indexDrawnRace = this.getNameFromArray(
                    this.data.copyRaceSet
                );




                // if (this.data.copyRaceSet[this.data.indexDrawnRace] === undefined) {
                //     this.data.copyRaceSet.push(
                //         "Brak szczegółowych danych, błędy w raportach"
                //     );
                // }

                let quantityDrawnRace = Math.round(
                    (this.populationQuantity / 100) * percentDrawnRace
                );

                const objRace = {};
                objRace['name'] = this.data.copyRaceSet[this.data.indexDrawnRace];
                objRace['percent'] = percentDrawnRace;

                this.raceArray.push(objRace);
                // this.raceArray.percent.push(percentDrawnRace);




               wholePopulation -= percentDrawnRace;
                this.data.copyRaceSet.splice(this.data.indexDrawnRace, 1);



            }

            this.sortObjectInArray(this.raceArray, 'percent');

    }

    sortObjectInArray(array, parameter){

        array.sort(function(a, b) {
            return b[parameter] - a[parameter];
        });

    }

    addRaceToSociety(conditionIsRight,) {


        let a = this.getNameFromArray(this.data.setPlanetNames);
        console.log(a);


        this.populationQuantity = this.randomNumberFromArrayInRange(this.data.outpostsSet, 1, 'minSize', 'maxSize' );

        console.log(this.populationQuantity);




        // this.populationQuantity =
        //     Math.floor(
        //         Math.random() *
        //         (this.data.outpostsSet[indexDrawnOutpost].maxSize -
        //             this.data.outpostsSet[indexDrawnOutpost].minSize +
        //             1)
        //     ) + this.data.outpostsSet[indexDrawnOutpost].minSize;


    }






}
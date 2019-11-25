import {Tools} from './Tools';
import {Data} from './Data';


export class AddOutpost {
    constructor(condition) {

        if (condition === true) {

            this.raceArray = [];
            this.populationQuantity = '';
            this.outpostIndex = '';
            this.outpostName = '';


            this.addAllSociety();

            console.log(this.raceArray);
        } else {
            console.log('Niestety nie ma żadnego posterunku na tej planecie');
        }


    }


    addAllSociety() {

        this.addRaceToSociety();

        let percentTotalPopulation = 100;


        data.copyRaceSet = [...data.mainRacesCollection];

        while (percentTotalPopulation >= 1) {

            let percentDrawnRace = tools.randomNumberInRange(1, percentTotalPopulation);


            data.indexDrawnRace = tools.getNameFromArray(
                data.copyRaceSet
            );


            // if (this.data.copyRaceSet[this.data.indexDrawnRace] === undefined) {
            //     this.data.copyRaceSet.push(
            //         "Brak szczegółowych danych, błędy w raportach"
            //     );
            // }

            let quantityDrawnRace = tools.findNumberFromTotal(this.populationQuantity, percentDrawnRace);

            const raceOnOutpost = {};
            raceOnOutpost['name'] = data.copyRaceSet[data.indexDrawnRace];
            raceOnOutpost['quantity'] = quantityDrawnRace;
            raceOnOutpost['percent'] = percentDrawnRace;

            this.raceArray.push(raceOnOutpost);

            percentTotalPopulation -= percentDrawnRace;
            data.copyRaceSet.splice(data.indexDrawnRace, 1);

        }

        tools.sortObjectInArray(this.raceArray, 'percent');
        return this.raceArray
    }


    addRaceToSociety(conditionIsRight) {

        this.outpostIndex = tools.getNameFromArray(data.outpostsSet);
        this.outpostName = tools.getNameFromObject(data.outpostsSet, this.outpostIndex, 'name');

        this.populationQuantity = tools.randomNumberFromArrayInRange(data.outpostsSet, this.outpostIndex, 'minSize', 'maxSize');


    }


}

// module.exports = new AddOutpost();



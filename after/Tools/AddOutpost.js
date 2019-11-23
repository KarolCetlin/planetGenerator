class AddOutpost {
    constructor(condition) {

        if (condition === true) {


            this.data = new Data();
            this.tools = new Tools();

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


        this.data.copyRaceSet = [...this.data.mainRacesCollection];

        while (percentTotalPopulation >= 1) {

            let percentDrawnRace = this.tools.randomNumberInRange(1, percentTotalPopulation);


            this.data.indexDrawnRace = this.tools.getNameFromArray(
                this.data.copyRaceSet
            );


            // if (this.data.copyRaceSet[this.data.indexDrawnRace] === undefined) {
            //     this.data.copyRaceSet.push(
            //         "Brak szczegółowych danych, błędy w raportach"
            //     );
            // }

            let quantityDrawnRace = this.tools.findNumberFromTotal(this.populationQuantity, percentDrawnRace);

            const raceOnOutpost = {};
            raceOnOutpost['name'] = this.data.copyRaceSet[this.data.indexDrawnRace];
            raceOnOutpost['quantity'] = quantityDrawnRace;
            raceOnOutpost['percent'] = percentDrawnRace;

            this.raceArray.push(raceOnOutpost);

            percentTotalPopulation -= percentDrawnRace;
            this.data.copyRaceSet.splice(this.data.indexDrawnRace, 1);

        }

        this.tools.sortObjectInArray(this.raceArray, 'percent');
        return this.raceArray
    }


    addRaceToSociety(conditionIsRight) {

        this.outpostIndex = this.tools.getNameFromArray(this.data.outpostsSet);
        this.outpostName = this.tools.getNameFromObject(this.data.outpostsSet, this.outpostIndex, 'name');

        this.populationQuantity = this.tools.randomNumberFromArrayInRange(this.data.outpostsSet, this.outpostIndex, 'minSize', 'maxSize');


    }


}

// module.exports = new AddOutpost();



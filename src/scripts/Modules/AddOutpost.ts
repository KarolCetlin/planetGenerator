import {
    getNameFromArray,
    randomNumberInRange,
} from '../Logic/Tools';

import { generatePlanet } from './Generator';

interface OutpostsParameters {
    name: string,
    minSize: number,
    maxSize: number,
    description: string,
}


export interface Outpost {
    name: string,
    population: number,
    description: string,
    raceInOutpost: any,
}

const availableOutpostsTypes: OutpostsParameters[] = [
    {
        name: 'Kolonia Górnicza',
        minSize: 100,
        maxSize: 300,
        description: 'Kompleks dzieli się na dwie kategorie. Port kosmiczny wraz ze strefą mieszkalną oraz ' +
            'kompleks górniczy. Gdzie docelowo pracuje personel górniczy obslugujące liczne kopalnie wydobywające' +
            'złoża dostępne na planecie.'
    },

    {
        name: 'Wysunięty posterunek',
        minSize: 200,
        maxSize: 500,
        description: 'Jest to placówka obserwacyjno-badawcza. Obserwuje pobliskie układy gwiezdne, oraz działania ' +
            'organizacji przestrzępoczych. Placówki tego typu prowadzone są zazwyczaj pod ścisłym rygorem. Z poszanowaniem' +
            'wszelkich zasad bezpieczeństwa',
    },

    {
        name: 'Punkt handlowy',
        minSize: 500,
        maxSize: 1500,
        description: 'Niewielka odległość dzieląca placówke od bramy gwiezdnej jest świetnym miejscem na sprzedaż oraz przeładunek' +
            'towarów przez konsorcja handlowe oraz niezleżnych kupców. Każdy próbuje jak najkorzystniej sprzedać, czy wymienić towar' +
            'wiedząc na czym w danym momencie można najwięcej zarobić. ',
    },

    {
        name: 'Stara Kolonia',
        minSize: 10000,
        maxSize: 30000,
        description: 'Ta kolonia istnieje w tym układzie od wielu pokoleń, lecz z jakiegoś powodu jej rozwój dość mocno wyhamował przez ' +
            'ostatnie lata. Być może to brak przydatnych zasobów, kiepskie położenia na mapie gwiezdnej, a być może jeszcze coś bardziej' +
            'niokiełznanego',
    },

    {
        name: 'Odległa kolonia',
        minSize: 30,
        maxSize: 100,
        description: 'Nowa założona kolonia w odległym rejonie kosmosu. W taką podróż wyruszają najczęściej najodważniejsi mieszkańcy Andry,' +
            'naukowcy głodni nowych zjawisk do zbadania, czy istoty nie mające już nic od stracenia. To także świetne miejsce na kryjówkę, ' +
            'ponieważ w nowo założonej kolonii nowych rąk do pracy nigdy nie jest za wiele ',
    },

    {
        name: 'Stolica regionu',
        minSize: 300000,
        maxSize: 1000000,
        description: 'Największa lub najbardziej istotna planeta w tej części kosmosu. To tutaj skupia się główne życie kulturalne oraz społęczne.' +
            'podejmowane są kluczowe decyzje polityczne oraz dyplomatyczne obejmujące swym wpływem najbliższe układy gwiezdne. Dzięki dostępności' +
            'wielu usług to właśnie do planet tego typu ludzie tłumnie przybywają, aby się osiedlić',
    },
];

const mainRacesCollection: Array<string> = ['Altar-yan', 'Wulkanów', 'Silian', 'Flerów', 'Ludzi', 'Syntetyków', "Giag", 'Miridu'];


export const generateOutpost = (): Outpost => {
const countOfAvailableOutpostsTypes = availableOutpostsTypes.length;
const randomvailableOutpostsIndex = Math.floor(Math.random() * countOfAvailableOutpostsTypes);

const outpostTypeParameters = availableOutpostsTypes[randomvailableOutpostsIndex];

    return {
        name: outpostTypeParameters.name,
        population: generatePopulation(outpostTypeParameters),
        description: outpostTypeParameters.description,
        raceInOutpost: null,
    }

};

const generatePopulation = (outpostTypeParameters: OutpostsParameters):number => {
    const minValue = outpostTypeParameters.minSize;
    const maxValue = outpostTypeParameters.maxSize;

    return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
}

const generateNewPopulation = () => {

    const population = generatePlanet['outpost']['population'];
    console.log(population);


}














const findNumberFromTotal = (totalNumber: number, percent: number): number => {
    let maxChanceToSuccess: number = 100;
    return Math.round((totalNumber / maxChanceToSuccess) * percent);
};

const sortObjectInArray = (array: any, sortProperty: string): void => {

    array.sort((a: string, b: string) => b[sortProperty] - a[sortProperty]
    )

};



const addRaceToSociety = (number2): any => {



    const population2  = number2;
    console.log(population2)


    let initialPercentPopulation: number = 100;
    const lastPercentPopulation: number = 1;
    const amountRacesToRemove: number = 1;
    let raceArray: Object[] = [];

    let copyRacesCollection: string[] = [...mainRacesCollection];


    while (initialPercentPopulation >= lastPercentPopulation) {

        let percentDrawnRace = randomNumberInRange(lastPercentPopulation, initialPercentPopulation);
        let indexDrawnRace = getNameFromArray(copyRacesCollection);
        let quantityDrawnRace = findNumberFromTotal(population2, percentDrawnRace);

        //
        // if (copyRacesCollection[indexDrawnRace] === undefined) {
        //     copyRacesCollection.push(
        //         "Brak szczegółowych danych, błędy w raportach"
        //     );
        // }

        const raceOnOutpost: Array<object> = [];
        raceOnOutpost['name'] = copyRacesCollection[indexDrawnRace];
        raceOnOutpost['quantity'] = quantityDrawnRace;
        raceOnOutpost['percent'] = percentDrawnRace;

        raceArray.push(raceOnOutpost);

        initialPercentPopulation -= percentDrawnRace;
        copyRacesCollection.splice(indexDrawnRace, amountRacesToRemove);

    }
    sortObjectInArray(raceArray, 'percent');
    return raceArray;
};



// class AddOutpost {
//     raceArray: any;
//     outpostPopulation: number;
//     outpostIndex: number;
//     outpostName: string;
//     outpostDescription: any;
//
//     public constructor() {
//
//         this.raceArray = [];
//         this.outpostPopulation = null;
//         this.outpostIndex = null;
//         this.outpostName = '';
//
//         this.addAllSociety();
//
//         console.log(this.raceArray);
//     }


//     addAllSociety() {
//
//         // this.addRaceToSociety();
//
//         let initialPercentPopulation: number = 100;
//         const lastPercentPopulation: number = 1;
//         const amountRacesToRemove: number = 1;
//         let hasPopulationToDraw: boolean;
//
//         let copyRacesCollection: string[] = [...mainRacesCollection];
//
//         // function checkState(checkedArgument: boolean) {
//         //
//         //     checkedArgument = true;
//         //
//         //     if (initialPercentPopulation <= lastPercentPopulation) {
//         //         checkedArgument = false
//         //     }
//         // }
//
//
//         while (hasPopulationToDraw === true) {
//
//             checkState(hasPopulationToDraw);
//
//             let percentDrawnRace = randomNumberInRange(lastPercentPopulation, initialPercentPopulation);
//             let indexDrawnRace = getNameFromArray(copyRacesCollection);
//             let quantityDrawnRace = findNumberFromTotal(this.outpostPopulation, percentDrawnRace);
//
//             //
//             // if (copyRacesCollection[indexDrawnRace] === undefined) {
//             //     copyRacesCollection.push(
//             //         "Brak szczegółowych danych, błędy w raportach"
//             //     );
//             // }
//
//             const raceOnOutpost: Array<object> = [];
//             raceOnOutpost['name'] = copyRacesCollection[indexDrawnRace];
//             raceOnOutpost['quantity'] = quantityDrawnRace;
//             raceOnOutpost['percent'] = percentDrawnRace;
//
//             this.raceArray.push(raceOnOutpost);
//
//             initialPercentPopulation -= percentDrawnRace;
//             copyRacesCollection.splice(indexDrawnRace, amountRacesToRemove);
//
//         }
//
//         sortObjectInArray(this.raceArray, 'percent');
//         return this.raceArray
//     }
//
//     // addRaceToSociety() {
//     //
//     //     this.outpostIndex = getNameFromArray(outpostsSet);
//     //     this.outpostName = getNameFromObject(outpostsSet, this.outpostIndex, 'name');
//     //     this.outpostDescription = getNameFromObject(outpostsSet, this.outpostIndex, 'description');
//     //
//     //     this.outpostPopulation = randomNumberFromArrayInRange(outpostsSet, this.outpostIndex, 'minSize', 'maxSize');
//     }
//
//
// }

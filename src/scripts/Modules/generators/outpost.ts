import {planetHasOutpost} from './events';

interface OutpostsParameters {
    name: string,
    minSize: number,
    maxSize: number,
    description: string,
}

export interface Outpost {
    name: string,
    population?: number,
    description: string,
    society?: Object[],
}

interface Society {
    raceName: string,
    populationPercent: number,
    quantity: number,
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

    if (planetHasOutpost === true) {

        const countOfAvailableOutpostsTypes = availableOutpostsTypes.length;
        const randomAvailableOutpostsIndex = Math.floor(Math.random() * countOfAvailableOutpostsTypes);

        const outpostTypeParameters = availableOutpostsTypes[randomAvailableOutpostsIndex];
        let currentPopulation: number = Math.floor(Math.random() * (outpostTypeParameters.maxSize - outpostTypeParameters.minSize)) + outpostTypeParameters.minSize;

        console.log('jest kolonia')

        return {
            name: outpostTypeParameters.name,
            population: currentPopulation,
            description: outpostTypeParameters.description,
            society: addRaceToSociety(currentPopulation),
        }

    } else {

console.log('brak koloni')
        return {
            name: 'Brak',
            description: 'Ta planeta nie posiada żadnej kolonii',
        }

    }


};


const getRaceQuantityFromPercent = (totalNumber: number, percent: number): number => {
    let maxChanceToSuccess: number = 100;

    return Math.round((totalNumber / maxChanceToSuccess) * percent);
};

const sortRacesByPercents = (array: Object[], sortProperty: string): void => {

    array.sort((a: string, b: string) => b[sortProperty] - a[sortProperty]
    )

};

const getPercentOfRaceInPopulation = (minNumber: number, maxNumber: number): number => {
    return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
};

const getRaceNameIndex = (array: String[]): number => {
    return Math.floor(Math.random() * array.length);
};

enum Race {

    Name = 'name',
    Quantity = 'quantity',
    Percent = 'percent',

}

const addRaceToSociety = (currentPopulation: number): Object[] => {

    let initialPercentPopulation: number = 100;
    const lastPercentPopulation: number = 1;
    const amountRacesToRemove: number = 1;
    let raceCollection: Object[] = [];
    let copyRacesCollection: string[] = [...mainRacesCollection];

    while (initialPercentPopulation >= lastPercentPopulation) {

        let percentDrawnRace = getPercentOfRaceInPopulation(lastPercentPopulation, initialPercentPopulation);
        let indexDrawnRace = getRaceNameIndex(copyRacesCollection);
        let quantityDrawnRace = getRaceQuantityFromPercent(currentPopulation, percentDrawnRace);

        if (copyRacesCollection[indexDrawnRace] === undefined) {
            copyRacesCollection.push(
                "Dane uszkodzone"
            );
        }

        const Society: Array<object> = [];

        Society[Race.Name] = copyRacesCollection[indexDrawnRace];
        Society[Race.Quantity] = quantityDrawnRace;
        Society[Race.Percent] = percentDrawnRace;
        raceCollection.push(Society);

        initialPercentPopulation -= percentDrawnRace;
        copyRacesCollection.splice(indexDrawnRace, amountRacesToRemove);
    }

    sortRacesByPercents(raceCollection, Race.Percent);
    return raceCollection;

};

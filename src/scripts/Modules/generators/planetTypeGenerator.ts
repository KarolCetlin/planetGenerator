interface AvailablePlanetSizeParameters {
    planetSizeName:string,
    description:string,
    minSizeRadius:number,
    maxSizeRadius:number,
    typeSize:string
}

interface PlanetSize {
    name:string,
    description:string,
    radius:number,
}

const availablePlanetSizes: AvailablePlanetSizeParameters[] = [

    {
        planetSizeName: 'Asteroida',
        description: 'W tym miejscu będzie opis dotyczący wielkości tej planety, na razie jest to całkowicie puste' +
            'pole, czekające nW tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
            'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
        minSizeRadius: 0.01,
        maxSizeRadius: 0.03,
        typeSize: 'Małe planety, księżyce, czy komety'
    },

    {
        planetSizeName: 'planeta Merkuriańska',
        description: 'W tym miejscu będzie opis dotyczący wielkości tej planety, na razie jest to całkowicie puste' +
            'pole, czekające na to, aż je uzupełnisz',
        minSizeRadius: 0.03,
        maxSizeRadius: 0.7,
        typeSize: 'Planeta skalista'
    },

    {
        planetSizeName: 'pod Ziemia',
        description: 'W tym miejscu będzie opis dotyczący wielkości tej planety, na razie jest to całkowicie puste' +
            'pole, czekające na to, aż je uzupełnisz',
        minSizeRadius: 0.5,
        maxSizeRadius: 1.2,
        typeSize: 'Planeta skalista'
    },

    {
        planetSizeName: 'typ Ziemski',
        description: 'W tym miejscu będzie opis dotyczący wielkości tej planety, na razie jest to całkowicie puste' +
            'pole, czekające na to, aż je uzupełnisz',
        minSizeRadius: 0.8,
        maxSizeRadius: 1.9,
        typeSize: 'Planeta skalista'
    },

    {
        planetSizeName: 'super Ziemia',
        description: 'W tym miejscu będzie opis dotyczący wielkości tej planety, na razie jest to całkowicie puste' +
            'pole, czekające na to, aż je uzupełnisz',
        minSizeRadius: 1.3,
        maxSizeRadius: 3.3,
        typeSize: 'Planeta skalista'
    },

    {
        planetSizeName: 'planeta Neptuniczna',
        description: 'W tym miejscu będzie opis dotyczący wielkości tej planety, na razie jest to całkowicie puste' +
            'pole, czekające na to, aż je uzupełnisz',
        minSizeRadius: 0.8,
        maxSizeRadius: 1.9,
        typeSize: 'Gazowy olbrzym'
    },

    {
        planetSizeName: 'planeta Jowiszowa',
        description: 'W tym miejscu będzie opis dotyczący wielkości tej planety, na razie jest to całkowicie puste' +
            'pole, czekające na to, aż je uzupełnisz',
        minSizeRadius: 3.5,
        maxSizeRadius: 100,
        typeSize: 'Gazowy olbrzym',
    },
];

let currentTypeNumber : number = 0;

export const generatePlanetSize = (): PlanetSize => {
    return {
        description:'',
        name:'',
        radius:0
    }
}

export const numberTypeGenerator = (): void => {

    currentTypeNumber = Math.floor(Math.random() * availablePlanetSizes.length);

};

export const planetSizeDescriptionGenerator = (): string => {
        numberTypeGenerator();
       return availablePlanetSizes[currentTypeNumber]['description'];

};

export const planetSizeNameGenerator = (): string => {
    numberTypeGenerator();

    return availablePlanetSizes[currentTypeNumber]['planetSizeName'];

};

export const planetTypeSizeGenerator = (): string => {

    return availablePlanetSizes[currentTypeNumber]['typeSize'];

};

export const planetRadiusGenerator = (): number => {

    let minNumber = availablePlanetSizes[currentTypeNumber]['minSizeRadius'];
    let maxNumber = availablePlanetSizes[currentTypeNumber]['maxSizeRadius'];

    return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
};

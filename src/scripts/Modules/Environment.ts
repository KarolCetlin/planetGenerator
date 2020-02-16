
interface RequirementsCreationEnvironment {
    name: string,
    description: string,
    temperature?: number,
    humidity?: number,
}

export interface Environment {
    temperatureName: string
    temperatureDescription: string,
    humidityName: string,
    humidityDescription: string,
    worldName: any,
    worldDescription: string,
}

const availableTemperatures: RequirementsCreationEnvironment[] = [
    {
        name: 'Gorąca',
        description: 'Średnia globalna temperatura to około 35°C',
    },
    {
        name: 'Ciepła',
        description: 'Średnia globalna temperatura to około 25°C',
    },
    {
        name: 'Umiarkowana',
        description: 'Średnia globalna temperatura to około 15°C',
    },
    {
        name: 'Chłodna',
        description: 'Średnia globalna temperatura to około 5°C',
    },
    {
        name: 'Zimna',
        description: 'Średnia globalna temperatura to około -5°C',
    },
];


const availableHumidities: RequirementsCreationEnvironment[] = [
    {
        name: 'Wyschnięty',
        description: 'Wody powierzchniowe są niezwykle rzadkie. Opady atmosferyczne praktycznie nie istnieją',
    },
    {
        name: 'Suchy',
        description: 'Wody powierzchniowe występują rzadko, z wyjątkiem łagodniejszych rejonów. Opady są ograniczone.',
    }, {
        name: 'Sezonowa',
        description: 'Wody powierzchniowe są powszechne. Opady różnią się znacznie w zależności od szerokości, wysokości geograficynej oraz pory roku',
    }, {
        name: 'Mokro',
        description: 'Wody powierzchniowe są obfite, pokrywając ponad 60% planety. Opady umiarkowane',
    }, {
        name: 'Wieczne opady',
        description: 'Wody powierzchniowe pokrywają ponad 90% planety. Opady są powszechnym zjawiskiem',
    },
];

const availableWorlds: RequirementsCreationEnvironment[] = [
    {
        name: 'Morze piasku',
        description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
            'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
        temperature: 0,
        humidity: 0,
    },
    {
        name: 'Pustynna',
        description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
            'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
        temperature: 0,
        humidity: 1,
    }, {
        name: 'Sawanna',
        description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
            'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
        temperature: 0,
        humidity: 2,
    }, {
        name: 'Tropikalna',
        description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
            'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
        temperature: 0,
        humidity: 3,
    }, {
        name: 'Atoll. Pustynne wyspy',
        description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
            'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
        temperature: 0,
        humidity: 4,
    },
    {
        name: 'Jałowy',
        description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
            'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
        temperature: 1,
        humidity: 0,
    },

    {
        name: 'Arroyo. (Mesa)',
        description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
            'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
        temperature: 1,
        humidity: 1,
    },

    {
        name: 'Podniebne lasy',
        description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
            'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
        temperature: 1,
        humidity: 2,
    },

    {
        name: 'Bagnista',
        description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
            'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
        temperature: 1,
        humidity: 3,
    },

    {
        name: 'Świat lasów mangrowych',
        description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
            'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
        temperature: 1,
        humidity: 4,
    },

    {
        name: 'Świat nieurodzajny (pustynie na dużej wysokości)',
        description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
            'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
        temperature: 2,
        humidity: 0,
    },

    {
        name: 'Oaza',
        description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
            'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
        temperature: 2,
        humidity: 1,
    },

    {
        name: 'Świat Gajański',
        description: 'Idealne warunki do powstania życia.',
        temperature: 2,
        humidity: 3,
    },

    {
        name: 'Oceaniczny',
        description: 'Planeta to praktycznie jeden wielki ocean',
        temperature: 2,
        humidity: 4,
    },

    {
        name: 'Mroźne pustkowia',
        description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
            'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
        temperature: 3,
        humidity: 0,
    },

    {
        name: 'Step',
        description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
            'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
        temperature: 3,
        humidity: 1,
    },

    {
        name: 'alpejski - (górzysty)',
        description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
            'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
        temperature: 3,
        humidity: 2,
    },

    {
        name: 'Kaskadowy',
        description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
            'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
        temperature: 3,
        humidity: 3,
    },

    {
        name: 'Kra lodowa',
        description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
            'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
        temperature: 3,
        humidity: 4,
    },

    {
        name: 'Antarktyda',
        description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
            'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
        temperature: 4,
        humidity: 0,
    },

    {
        name: 'Tundra',
        description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
            'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
        temperature: 4,
        humidity: 1,
    },

    {
        name: 'Arktyczna',
        description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
            'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
        temperature: 4,
        humidity: 2,
    },

    {
        name: 'Miedzylodowcowa. (Geotermalna arktyka)',
        description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
            'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
        temperature: 4,
        humidity: 3,
    },

    {
        name: 'Glacjalny',
        description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
            'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
        temperature: 4,
        humidity: 4,
    },
];


export const environmentGenerete = (): Environment => {

    const countOfAvailableTemperatures = availableTemperatures.length;
    const countOfAvailableHumidities = availableHumidities.length;
    const randomAvailableTemperatureIndex = Math.floor(Math.random() * countOfAvailableTemperatures);
    const randomAvailableHumidityIndex = Math.floor(Math.random() * countOfAvailableHumidities);

    const temperatureParameters = availableTemperatures[randomAvailableTemperatureIndex];
    const humidityParameters = availableHumidities[randomAvailableHumidityIndex];

    return {
        temperatureName: temperatureParameters.name,
        temperatureDescription: temperatureParameters.description,
        humidityName: humidityParameters.name,
        humidityDescription: humidityParameters.description,
        worldName: matchWorld(randomAvailableTemperatureIndex, randomAvailableHumidityIndex).name,
        worldDescription: matchWorld(randomAvailableTemperatureIndex, randomAvailableHumidityIndex).description,
    }

};

const matchWorld = (temperatureIndex: number, humidityIndex: number) => {

    const countOfAvailableWorlds = availableWorlds.length;

    for (let availableWorldIndex = 0; availableWorldIndex < countOfAvailableWorlds; availableWorldIndex++) {

        let requiredTemperature = availableWorlds[availableWorldIndex].temperature;
        let requiredHumidity = availableWorlds[availableWorldIndex].humidity;

        if (temperatureIndex === requiredTemperature && humidityIndex === requiredHumidity) {

            return {
               name: availableWorlds[availableWorldIndex].name,
               description: availableWorlds[availableWorldIndex].description,
            }
        }
    }

};
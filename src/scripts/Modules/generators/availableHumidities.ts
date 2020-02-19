import {RequirementsCreationEnvironment} from "../Types";

export const availableHumidities: RequirementsCreationEnvironment[] = [
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
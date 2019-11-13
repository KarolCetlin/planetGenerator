class DataPlanets{
    constructor() {

        this.changeOnLife = 20;
        this.hasLife = "";
        this.planetTypeConfiguration = "";
        this.amountPopulation = 0;
        this.hasEcosferic = "";
        this.changeOnMinerals = 15;
        this.drawChanceToLife = 0;
        this.hasEcosferic = '';
        this.collectionRaceToDraw = [];
        this.drawnRace = [];

        this.uniquePlanetName = ['Helara', 'Kitrarth', 'Zeceitera', 'Chemion', "51 Pegasi b", "PSR 1257+12 C", 'OGLE-TR-56b', 'Fomalhaut', '2M1207b'];

        this.starType = [
            {
                name: 'Brązowy karzeł',
            },
            {
                name: 'Czerwony karzeł',
            },
            {
                name: 'Biały karzeł',
            },
            {
                name: 'Podkarły',
            },
            {
                name: 'Podolbrzymy',
            },
            {
                name: 'Ciag główny(karły)',
            },
            {
                name: 'Olbrzymy',
            },
            {
                name: 'Jasne olbrzymy',
            },
            {
                name: 'Nadolbrzymy',
            },
            {
                name: 'Hiperolbrzymy',
            }
        ];

        this.starVidmoType = [
            {
                name: 'typ widmowy O',
                description: '',
                minTemperature: 25000,
                maxTemperature: 50000,
            },
            {
                name: 'typ widmowy B',
                description: '',
                minTemperature: 10000,
                maxTemperature: 30000,
            },
            {
                name: 'typ widmowy F',
                description: '',
                minTemperature: 6000,
                maxTemperature: 7500,
            },
            {
                name: 'typ widmowy G',
                description: '',
                minTemperature: 5000,
                maxTemperature: 6000,
            },
            {
                name: 'typ widmowy K',
                description: '',
                minTemperature: 3900,
                maxTemperature: 5200,
            },
            {
                name: 'typ widmowy M',
                description: '',
                minTemperature: 3800,
                maxTemperature: 2200,
            },
            {
                name: 'typ widmowy L',
                description: '',
                minTemperature: 2200,
                maxTemperature: 1400,
            },
            {
                name: 'typ widmowy T',
                description: '',
                minTemperature: 1300,
                maxTemperature: 700,
            },
        ]

        this.starName = ['Polaris', 'Syriusz', 'Rigiel', 'Vega', 'Antares', 'Canopus'];

        this.collonyType = [
            {
                name: 'Kolonia Górnicza',
                minSize: 100,
                maxSize: 300,
            },

            {
                name: 'Stara Kolonia',
                minSize: 10000,
                maxSize: 30000,
            },

            {
                name: 'Nowo powstała kolonia',
                minSize: 30,
                maxSize: 100,
            },

            {
                name: 'Większe miasto planetarne',
                minSize: 300000,
                maxSize: 1000000,
            },
        ]

        this.planetSize2 = [

            {
                planetsizeName: 'Asteroida',
                description: 'Asteroidy to małe nieruglarne ciała, które nie są w stanie utrzymać stabilnej atmosfery. ' +
                    'Nazywane również planetoidam, oraz planetkami.',
                minSizeRadius: 0.01,
                maxSizeRadius: 0.03,
                typeSize: 'Małe planety, księżyce, czy komety'
            },

            {
                planetsizeName: 'typ merkuriański',
                description: '',
                minSizeRadius: 0.03,
                maxSizeRadius: 0.7,
                typeSize: 'Planeta skalista'
            },

            {
                planetsizeName: 'Pod ziemski',
                description: '',
                minSizeRadius: 0.5,
                maxSizeRadius: 1.2,
                typeSize: 'Planeta skalista'
            },

            {
                planetsizeName: 'Ziemski',
                description: '',
                minSizeRadius: 0.8,
                maxSizeRadius: 1.9,
                typeSize: 'Planeta skalista'
            },

            {
                planetsizeName: 'Super ziemia',
                description: '',
                minSizeRadius: 1.3,
                maxSizeRadius: 3.3,
                typeSize: 'Planeta skalista'
            },

            {
                planetsizeName: 'Neptuniczny',
                description: '',
                minSizeRadius: 0.8,
                maxSizeRadius: 1.9,
                typeSize: 'Gazowy olbrzym'
            },

            {
                planetsizeName: 'Jowiszowy',
                description: '',
                minSizeRadius: 3.5,
                maxSizeRadius: 27,
                typeSize: 'Gazowy olbrzym',
            },
        ]



        this.planetSize = [
            {
                planetSizeName: 'Ogromna planeta',
                description: 'Jest w chuj wielka',

            },

            {
                planetSizeName: 'Mezo planeta',
                description: "mniejsza niż merkury, ale większa niż planeta karłowata ceres. Posiada średnice od 1000km do 5000km",
            },

            {
                planetSizeName: 'Mini Neptun',
                description: 'Mini-Neptun (czasami znany jako gazowy karzeł lub planeta przejściowa) to planeta mniejsza niż ' +
                    'Uran i Neptun, do 10 mas Ziemi. Planety te mają gęstą atmosferę wodór-hel, prawdopodobnie z głębokimi ' +
                    'warstwami lodu, skały lub płynnych oceanów (wykonanych z wody, amoniaku, mieszaniny obu lub cięższych ' +
                    'substancji lotnych)'
            },

            {
                planetSizeName: 'Planemo',
                description: 'Obiekt o masie planetarne. biekt astronomiczny o masie wystarczającej, aby mieć kształt zbliżony ' +
                    'do kulistego (będący w równowadze hydrostatycznej), ale mniejszej niż masa potrzebna do uruchomienia procesów fuzji jądrowej.'
            },

            {
                planetSizeName: "Planetar",
                description: 'Planetarny albo brązowy karzeł: - obiekt o rozmiarze większym niż planeta, ale mniejszym niż ' +
                    'gwiazda - który powstał w wyniku procesów, które zwykle dają planety;'
            },

            {
                planetSizeName: 'Super Ziemia',
                description: "Super Ziemia to planeta pozasłoneczna o masie wyższej niż Ziemia, ale znacznie poniżej masy mniejszych gazowych " +
                    "gigantów Układu Słonecznego Urana i Neptuna, które wynoszą odpowiednio 13 i 17 mas Ziemi."
            },

            {
                planetSizeName: 'Super Jowisz',
                description: 'Super Jowisz: Super Jowisz to obiekt astronomiczny, który jest bardziej masywny niż planeta Jowisz.',
            },

            {
                planetSizeName: 'Sub-Ziemia',
                description: 'Sub-Earth: - Sub-Earth to klasyfikacja planet „znacznie mniej masywnych” niż Ziemia i Wenus',
            },

        ];


        this.temperature = [
            {
                Name: 'Gorący',
                Description: 'Średnia globalna temperatura około 35°C',
            },
            {
                Name: 'Ciepły',
                Description: 'Średnia globalna temperatura około 25°C',
            },
            {
                Name: 'Umiarkowany',
                Description: 'Średnia globalna temperatura około 15°C',
            },
            {
                Name: 'Chłodny',
                Description: 'Średnia globalna temperatura około 5°C',
            },
            {
                Name: 'Zimny',
                Description: 'Średnia globalna temperatura około  -5°C',
            },
        ];


        this.humidity = [
            {
                Name: 'Spieczone',
                Description: 'Wody powierzchniowe są niezwykle rzadkie; opady atmosferyczne praktycznie nie istnieją',
            },
            {
                Name: 'Sucha',
                Description: 'Wody powierzchniowe występują rzadko, z wyjątkiem łagodniejszych klimatów; opady są ograniczone.',
            },    {
                Name: 'Występuje sezonowo',
                Description: 'Wody powierzchniowe są powszechne; opady różnią się znacznie w zależności od szerokości, wysokości geograficynej i pory roku',
            },    {
                Name: 'Mokro',
                Description: 'Wody powierzchniowe są obfite, pokrywając ponad 60% planety; opady są umiarkowane',
            },    {
                Name: 'Utopione',
                Description: 'Wody powierzchniowe pokrywają ponad 90% planety; opady są powszechne',
            },
        ];

        this.planetType = [
            {
                Name: 'Morze piasku',
                Description: ' Gorąca i Spieczona',
                Temperature: 0,
                Humidity: 0,
            },
            {
                Name: 'Pustynna',
                Description: 'Gorąco i sucho',
                Temperature: 0,
                Humidity: 1,
            },    {
                Name: 'Sawanna',
                Description: 'Gorąca i sezonowa',
                Temperature: 0,
                Humidity: 2,
            },    {
                Name: 'Tropikalna',
                Description: 'Gorąco i mokro',
                Temperature: 0,
                Humidity: 3,
            },    {
                Name: 'Atoll. Pustynne wyspy',
                Description: 'Gorące i utopione',
                Temperature: 0,
                Humidity: 4,
            },
            {
                Name: 'Jałowy',
                Description: 'Ciepłe i spieczone',
                Temperature: 1,
                Humidity: 0,
            },

            {
                Name: 'Arroyo. (Mesa)',
                Description: 'Gorące i utopione',
                Temperature: 1,
                Humidity: 1,
            },

            {
                Name: 'Podniebne lasy',
                Description: 'Ciepłe i sezonowe',
                Temperature: 1,
                Humidity: 2,
            },

            {
                Name: 'Bagnista',
                Description: 'Ciepłe i mokre',
                Temperature: 1,
                Humidity: 3,
            },

            {
                Name: 'Świat lasów mangrowych',
                Description: 'Ciepłe i utonął',
                Temperature: 1,
                Humidity: 4,
            },

            {
                Name: 'Świat nieurodzajny (pustynie na dużej wysokości)',
                Description: 'Umiarkowane i spieczone',
                Temperature: 2,
                Humidity: 0,
            },

            {
                Name: 'Oaza',
                Description: 'umiarkowana i sucha',
                Temperature: 2,
                Humidity: 1,
            },

            {
                Name: 'Świat Gajański',
                Description: 'Idealne warunki do powstania życia.',
                Temperature: 2,
                Humidity: 3,
            },

            {
                Name: 'Oceaniczny',
                Description: 'Planeta to praktycznie jeden wielki ocean',
                Temperature: 2,
                Humidity: 4,
            },

            {
                Name: 'Mroźne pustkowia',
                Description: 'Umiarkowany i sezonowy',
                Temperature: 3,
                Humidity: 0,
            },

            {
                Name: 'Step',
                Description: 'Umiarkowany i sezonowy',
                Temperature: 3,
                Humidity: 1,
            },

            {
                Name: 'alpejski - (górzysty)',
                Description: 'Umiarkowany i sezonowy',
                Temperature: 3,
                Humidity: 2,
            },

            {
                Name: 'Kaskadowy',
                Description: 'Umiarkowany i sezonowy',
                Temperature: 3,
                Humidity: 3,
            },

            {
                Name: 'Kra lodowa',
                Description: 'Umiarkowany i sezonowy',
                Temperature: 3,
                Humidity: 4,
            },

            {
                Name: 'Antarktyda',
                Description: 'Umiarkowany i sezonowy',
                Temperature: 4,
                Humidity: 0,
            },

            {
                Name: 'Tundra',
                Description: 'Umiarkowany i sezonowy',
                Temperature: 4,
                Humidity: 1,
            },

            {
                Name: 'Arktyczna',
                Description: 'Umiarkowany i sezonowy',
                Temperature: 4,
                Humidity: 2,
            },

            {
                Name: 'Miedzylodowcowa. (Geotermalna arktyka)',
                Description: 'Umiarkowany i sezonowy',
                Temperature: 4,
                Humidity: 3,
            },

            {
                Name: 'Glacjalny',
                Description: 'Umiarkowany i sezonowy',
                Temperature: 4,
                Humidity: 4,
            },
    ];



        this.typeWeather = ['wieje', 'pada', 'mgła', 'śnieży'];
        this.weatherForGasPlanet = ['huragany', 'słabe pole magnetyczne', 'asd'];
        this.planetOrbit = ['planeta około podwójna', 'egzoplaneta', 'planetoidy trojańskie'];
        this.planetPeople = ['TAK', 'NIE'];
        this.collectionAllRaces = ['Altar-yan', 'Wulkan', 'Silian', 'Flerów', 'Ludzi', 'Syntetyków', "Giag", 'Miridu'];



    }



}
class Data{
    constructor() {



        this.lifePossibility = 20;
        this.hasLife = "";
        this.planetTypeConfiguration = "";
        this.amountPopulation = 0;

        this.ecosfericPossibility = 90;
        this.hasEcosferic = "";
        this.changeOnMinerals = 15;
        this.drawChanceToLife = 0;
        this.hasEcosferic = '';
        this.selectedRaceSet = [];
        this.indexDrawnRace = [];

        this.setPlanetNames = ['Helara', 'Kitrarth', 'Zeceitera', 'Chemion', "51 Pegasi b", "PSR 1257+12 C", 'OGLE-TR-56b', 'Fomalhaut', '2M1207b'];

        this.setLifeCycleStars = [
            {
                name: 'Brązowy karzeł',
                description: 'Obiekt gwiazdopodobny o masie zbyt małej, by mogły zachodzić w nim reakcje przemiany ' +
                    'wodoru w hel, które są głównym źródłem energii gwiazd ciągu głównego. Od planet-olbrzymów odróżnia ' +
                    'je to, że są zdolne do syntezy deuteru przynajmniej na początku swojego istnienia. Brązowe karły ' +
                    'często występują samotnie w przestrzeni. Określa się je czasem mianem „niewypałów”, „superplanet”, ' +
                    'bądź „nieudanych gwiazd”.',
                minSpectralType: 6,
                maxSpectralType: 8,
            },
            {
                name: 'Czerwony karzeł',
                description: 'Gwiazda ciągu głównego późnego typu widmowego (K, M, rzadko L). Czerwone karły stanowią ' +
                    'najliczniejszy typ gwiazd we Wszechświecie, jednak z powodu małej jasności żadna z tych gwiazd nie ' +
                    'jest widoczna gołym okiem na ziemskim niebie. Z powodu wolnego tempa syntezy wodoru w hel świecą ' +
                    'one długo i ewoluują powoli; szacowany czas życia czerwonych karłów sięga 10 bilionów lat',
                minSpectralType: 5,
                maxSpectralType: 7,
            },
            {
                name: 'Biały karzeł',
                description: 'Niewielki (rzędu rozmiarów Ziemi) obiekt astronomiczny składający się ze zdegenerowanej ' +
                    'materii, emitujący m.in. promieniowanie widzialne. Powstaje po ustaniu reakcji jądrowych w gwieździe' +
                    ' o małej lub średniej masie. Mało masywne gwiazdy nie osiągają w trakcie swojej ewolucji warunków ' +
                    'wystarczających do zapłonu helu w reakcjach syntezy termojądrowej i powstają z nich białe karły helowe. ' +
                    'Średnio masywne gwiazdy spalają hel, dając białe karły węglowe lub węglowo-tlenowe. Pozostałością ' +
                    'gwiazd są białe karły z domieszką tlenu, neonu i magnezu.',
                minSpectralType: 1,
                maxSpectralType: 5,
            },
            {
                name: 'Podkarły',
                description: 'Określenie gwiazd z niezwykłymi widmami, które wcześniej określano jako „przejściowe” (lub ' +
                    '„niedojrzałe”) białe karły. Charakteryzują się niską metalicznością. Niska metaliczność, czyli mała ' +
                    'zawartość pierwiastków cięższych od helu sprawia, że zewnętrzne warstwy podkarłów są bardziej ' +
                    'przepuszczalne i gwiazdy te emitują więcej światła o małych długościach fali',
                minSpectralType: 4,
                maxSpectralType: 6,
            },
            {
                name: 'Podolbrzym',
                description: 'Gwiazdy jaśniejsze od gwiazd z ciągu głównego, ale nie tak jasne jak prawdziwe olbrzymy. ' +
                    'Uważa się, że podolbrzymy już kończą lub właśnie skończyły spalanie wodoru w swoich jądrach i ' +
                    'zaczynają rozrastać się aż do stadium olbrzyma. Ich temperatury są niższe, natomiast średnice ' +
                    'większe od typowych gwiazd ciągu głównego o zbliżonej do nich masie.',
                minSpectralType: 1,
                maxSpectralType: 5,
            },
            {
                name: 'Gwiazda ciagu głównego',
                description: 'Będąc na etapie ciągu głównego gwiazdy wypromieniowują energię z syntezy wodoru w hel w ' +
                    'swoich wnętrzach. Proces ten jest bardzo wydajny energetycznie, wobec czego większość swojego życia ' +
                    'gwiazdy spędzają właśnie na tym etapie. Masa gwiazdy nie jest jedynym parametrem determinującym ' +
                    'jasność i temperaturę powierzchni gwiazdy. Gwiazda zmienia się nieco spalając wodór, a wyjęcie z ' +
                    'ciągu głównego nie jest gwałtowne. Innymi parametrami wpływającymi stan gwiazdy są: pole magnetyczne, ' +
                    'prędkość obrotowa gwiazdy, a przede wszystkim skład chemiczny.',
                minSpectralType: 0,
                maxSpectralType: 7,
            },
            {
                name: 'Olbrzym',
                description: 'Krótkotrwałe stadium ewolucji gwiazdy mającej średnią masę. Moc promieniowania takiego ' +
                    'olbrzyma jest kilkaset razy większa od mocy promieniowania Słońca (nasza gwiazda za około 5 mld lat ' +
                    'stanie się olbrzymem i jego średnica wzrośnie ponad stukrotnie, a moc promieniowania tysiąckrotnie)' +
                    'Fotosfera olbrzyma jest stosunkowo zimna. Olbrzymy zazwyczaj są barwy czerwonej.',
                minSpectralType: 1,
                maxSpectralType: 5,
            },
            {
                name: 'Jasny olbrzym',
                description: 'W tym miejscu będzie opis dotyczący wielkości tej planety, na razie jest to całkowicie puste' +
                    'pole, czekające na to, aż je uzupełnisz',
                minSpectralType: 1,
                maxSpectralType: 7,
            },
            {
                name: 'Nadolbrzym',
                description: 'W tym miejscu będzie opis dotyczący wielkości tej planety, na razie jest to całkowicie puste' +
                    'pole, czekające na to, aż je uzupełnisz',
                minSpectralType: 0,
                maxSpectralType: 6,
                minSize: 1,
                maxSize: 5,
            },
            {
                name: 'Hiperolbrzym',
                description: 'W tym miejscu będzie opis dotyczący wielkości tej planety, na razie jest to całkowicie puste' +
                    'pole, czekające na to, aż je uzupełnisz',
                minSpectralType: 0,
                maxSpectralType: 6,
                minSize: 100,
                maxSize: 1700,
            },
            {
                name: 'Neutronowa',
                description: 'Zdegenerowana gwiazda powstała w wyniku ewolucji gwiazd o dużych masach (~ 8–10 mas Słońca). ' +
                    'Powstają podczas wybuchu supernowej lub kolapsu białego karła w układach podwójnych. Materia składająca ' +
                    'się na gwiazdy neutronowe jest niezwykle gęsta, przy średnicy 10–15 km. Łyżeczka materii neutronowej ma ' +
                    'ciężar taki sam jak ciało o masie ok. 6 miliardów ton na Ziemi.',
                minSpectralType: 0,
                maxSpectralType: 0,
                minSize: 1.4,
                maxSize: 3,
            }
        ];

        this.setSpectralTypes = [
            {
                name: 'O',
                description: 'Gwiazdy typu widmowego O są rzadkie, ale wielkie i jasno świecące, więc są łatwe do ' +
                    'wykrycia i istnieje wiele przykładów widocznych gołym okiem.' +
                    ' W widmie gwiazd tego typu występują bardzo silne linie helu zjonizowanego.',
                minTemperature: 25000,
                maxTemperature: 50000,
            },
            {
                name: 'B',
                description: 'Widma tych gwiazd charakteryzują się liniami absorpcyjnymi neutralnego i zjonizowanego ' +
                    'helu i wodoru, szczególnie w chłodniejszym zakresie. Gwiazdy klasy B są często znajdowane razem z ' +
                    'typem O, w asocjacjach OB, ponieważ są masywne i nie żyją na tyle długo, by oddalić się od miejsca powstania.',
                minTemperature: 10000,
                maxTemperature: 30000,
            },
            {
                name: 'F',
                description: 'Gwiazdy takie mają barwę kremową. W widmie światła gwiazd typu F linie wodoru są słabsze ' +
                    'niż w przypadku gwiazd typu A, ale wciąż są one dominujące Ich intensywność spada w obrębie ' +
                    'typu od podtypu F0 do F9. Liczne są linie metali. ',
                minTemperature: 6000,
                maxTemperature: 7500,
            },
            {
                name: 'G',
                description: 'W widmie światła gwiazd typu G linie wodoru są stosunkowo słabe, natomiast licznie ' +
                    'występują linie niezjonizowanych metali. Bardzo silne są linie zjonizowanego wapnia. Określanie ' +
                    'jasności absolutnej gwiazd typu widmowego G nie jest łatwe, jako że ich widma nie dają wielu ' +
                    'bezpośrednich wskazówek na ten temat. Zazwyczaj do określania jasności używa się linii absorpcyjnych ' +
                    'zjonizowanego strontu i żelaza',
                minTemperature: 5000,
                maxTemperature: 6000,
            },
            {
                name: 'K',
                description: 'Widma tych gwiazd charakteryzują się bardzo słabymi liniami spektralnymi wodoru w zakresie ' +
                    'optycznym; tym słabszymi, im późniejszy podtyp reprezentuje gwiazda. Równocześnie linie metali stają ' +
                    'się silniejsze ze spadkiem temperatury (tj. dla późniejszych podtypów). W klasyfikowaniu gwiazd typu ' +
                    'K użyteczne jest pasmo G, pochodzące od molekuły CH, które jest najsilniejsze dla podtypu K2, a dla ' +
                    'późniejszych podtypów słabnie; do klasyfikacji używane są także linie widmowe chromu',
                minTemperature: 3900,
                maxTemperature: 5200,
            },
            {
                name: 'M',
                description: 'Typ widmowy obejmujący najliczniejsze gwiazdy, o czerwonej barwie powierzchni (fotosfery), ' +
                    'oraz niektóre brązowe karły.Gwiazdy typu widmowego M są bardzo różnorodne, należą do niego ' +
                    'niewielkie czerwone karły, gwiazdy ciągu głównego, oraz czerwone olbrzymy i nadolbrzymy, które ' +
                    'opuściły ciąg główny.',
                minTemperature: 3800,
                maxTemperature: 2200,
            },
            {
                name: 'L',
                description: 'W świetle widzialnym mają czerwoną barwę powierzchni, większość promieniowania emitują w bliskiej podczerwieni. Do typu ' +
                    'widmowego L należą głównie brązowe karły, szybko stygnące ze względu na brak wewnętrznego źródła ' +
                    'ciepła. Do wcześniejszych podtypów (L0 do L4) należą także gwiazdy o bardzo małej masie, ale ' +
                    'wystarczającej do syntezy wodoru. Widmo tych obiektów sugeruje, że ich atmosfery są bardziej ' +
                    'przepuszczalne dla światła niż gorętszych karłów typu widmowego M, co jest prawdopodobnie ' +
                    'spowodowane usunięciem części absorbujących związków z fazy gazowej',
                minTemperature: 2200,
                maxTemperature: 1400,
            },
            {
                name: 'T',
                description: 'Obiekty te większość energii emitują w podczerwieni, wypromieniowując ciepło zgromadzone w' +
                    'pierwszych kilku milionach lat życia. Wszystkie obiekty typu widmowego T mają niezwykle małą jasność. ' +
                    'Ich temperatura jest zbyt niska, by we wnętrzu mogła zachodzić synteza wodoru, zatem do tego typu ' +
                    'należą wyłącznie brązowe karły',
                minTemperature: 1300,
                maxTemperature: 700,
            },
        ]

        this.starNamesSet = ['Polaris', 'Syriusz', 'Rigiel', 'Vega', 'Antares', 'Canopus', 'Kudo', 'Oniga', 'Kassimian',
            'Harravos', 'Basusen', 'Marev', 'Elari', 'Wrenn', 'Jusurvo', 'Soleko'];

        this.outpostsSet = [
            {
                name: 'Kolonia Górnicza',
                minSize: 100,
                maxSize: 300,
            },

            {
                name: 'Kolonia handlowa',
                minSize: 500,
                maxSize: 1500,
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

        this.planetSizesSet = [

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
        ]



        this.planetSize2 = [
            {
                planetSizeName: 'Ogromna planeta',
                description: 'Jest tak duża, że aż za duzą :P nie wiem jaki opis dać, więc pisze właśnie to',

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


        this.temperaturesSet = [
            {
                Name: 'Gorąca',
                Description: 'Średnia globalna temperatura to około 35°C',
            },
            {
                Name: 'Ciepła',
                Description: 'Średnia globalna temperatura to około 25°C',
            },
            {
                Name: 'Umiarkowana',
                Description: 'Średnia globalna temperatura to około 15°C',
            },
            {
                Name: 'Chłodna',
                Description: 'Średnia globalna temperatura to około 5°C',
            },
            {
                Name: 'Zimna',
                Description: 'Średnia globalna temperatura to około -5°C',
            },
        ];


        this.humiditiesSet = [
            {
                Name: 'Wyschnięty',
                Description: 'Wody powierzchniowe są niezwykle rzadkie. Opady atmosferyczne praktycznie nie istnieją',
            },
            {
                Name: 'Suchy',
                Description: 'Wody powierzchniowe występują rzadko, z wyjątkiem łagodniejszych rejonów. Opady są ograniczone.',
            },    {
                Name: 'Sezonowa',
                Description: 'Wody powierzchniowe są powszechne. Opady różnią się znacznie w zależności od szerokości, wysokości geograficynej oraz pory roku',
            },    {
                Name: 'Mokro',
                Description: 'Wody powierzchniowe są obfite, pokrywając ponad 60% planety. Opady umiarkowane',
            },    {
                Name: 'Wieczne opady',
                Description: 'Wody powierzchniowe pokrywają ponad 90% planety. Opady są powszechnym zjawiskiem',
            },
        ];

        this.worldTypesSet = [
            {
                Name: 'Morze piasku',
                Description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
                    'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
                Temperature: 0,
                Humidity: 0,
            },
            {
                Name: 'Pustynna',
                Description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
                    'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
                Temperature: 0,
                Humidity: 1,
            },    {
                Name: 'Sawanna',
                Description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
                    'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
                Temperature: 0,
                Humidity: 2,
            },    {
                Name: 'Tropikalna',
                Description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
                    'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
                Temperature: 0,
                Humidity: 3,
            },    {
                Name: 'Atoll. Pustynne wyspy',
                Description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
                    'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
                Temperature: 0,
                Humidity: 4,
            },
            {
                Name: 'Jałowy',
                Description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
                    'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
                Temperature: 1,
                Humidity: 0,
            },

            {
                Name: 'Arroyo. (Mesa)',
                Description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
                    'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
                Temperature: 1,
                Humidity: 1,
            },

            {
                Name: 'Podniebne lasy',
                Description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
                    'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
                Temperature: 1,
                Humidity: 2,
            },

            {
                Name: 'Bagnista',
                Description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
                    'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
                Temperature: 1,
                Humidity: 3,
            },

            {
                Name: 'Świat lasów mangrowych',
                Description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
                    'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
                Temperature: 1,
                Humidity: 4,
            },

            {
                Name: 'Świat nieurodzajny (pustynie na dużej wysokości)',
                Description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
                    'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
                Temperature: 2,
                Humidity: 0,
            },

            {
                Name: 'Oaza',
                Description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
                    'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
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
                Description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
                    'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
                Temperature: 3,
                Humidity: 0,
            },

            {
                Name: 'Step',
                Description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
                    'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
                Temperature: 3,
                Humidity: 1,
            },

            {
                Name: 'alpejski - (górzysty)',
                Description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
                    'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
                Temperature: 3,
                Humidity: 2,
            },

            {
                Name: 'Kaskadowy',
                Description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
                    'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
                Temperature: 3,
                Humidity: 3,
            },

            {
                Name: 'Kra lodowa',
                Description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
                    'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
                Temperature: 3,
                Humidity: 4,
            },

            {
                Name: 'Antarktyda',
                Description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
                    'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
                Temperature: 4,
                Humidity: 0,
            },

            {
                Name: 'Tundra',
                Description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
                    'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
                Temperature: 4,
                Humidity: 1,
            },

            {
                Name: 'Arktyczna',
                Description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
                    'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
                Temperature: 4,
                Humidity: 2,
            },

            {
                Name: 'Miedzylodowcowa. (Geotermalna arktyka)',
                Description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
                    'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
                Temperature: 4,
                Humidity: 3,
            },

            {
                Name: 'Glacjalny',
                Description: 'W tym miejscu będzie znajdował się fantastyczny opis tej planety, który będzie działać na' +
                    'twoją wyobraznie. Jednak niestety w tym momencie możesz przeczytać tylko te słowa, nic poza tym',
                Temperature: 4,
                Humidity: 4,
            },
    ];



        this.typeWeather = ['wieje', 'pada', 'mgła', 'śnieży'];
        this.weatherForGasPlanet = ['huragany', 'słabe pole magnetyczne', 'asd'];
        this.planetOrbit = ['planeta około podwójna', 'egzoplaneta', 'planetoidy trojańskie'];
        this.planetPeople = ['TAK', 'NIE'];
        this.mainRacesCollection = ['Altar-yan', 'Wulkanów', 'Silian', 'Flerów', 'Ludzi', 'Syntetyków', "Giag", 'Miridu'];



    }



}
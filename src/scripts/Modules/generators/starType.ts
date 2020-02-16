interface AvailableLifeCycleStars {

    name: string,
    description: string,
    minSpectralType: number,
    maxSpectralType: number,

}

interface AvailableSpectralTypes {
    name: string,
    description: string,
    minTemperature: number,
    maxTemperature: number,
}

export interface StarType {

    name: string,
    description: string,
    spectralIndex: number,
}

export interface StarSpectral {
    name: string,
    description: string,
    temperature: number,
}


const availableLifeCycleStars: AvailableLifeCycleStars[] = [
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
    },
    {
        name: 'Hiperolbrzym',
        description: 'W tym miejscu będzie opis dotyczący wielkości tej planety, na razie jest to całkowicie puste' +
            'pole, czekające na to, aż je uzupełnisz',
        minSpectralType: 0,
        maxSpectralType: 6,
    },
    {
        name: 'Neutronowa',
        description: 'Zdegenerowana gwiazda powstała w wyniku ewolucji gwiazd o dużych masach (~ 8–10 mas Słońca). ' +
            'Powstają podczas wybuchu supernowej lub kolapsu białego karła w układach podwójnych. Materia składająca ' +
            'się na gwiazdy neutronowe jest niezwykle gęsta, przy średnicy 10–15 km. Łyżeczka materii neutronowej ma ' +
            'ciężar taki sam jak ciało o masie ok. 6 miliardów ton na Ziemi.',
        minSpectralType: 0,
        maxSpectralType: 0,
    }
];

const availableSpectralTypes: AvailableSpectralTypes[] = [
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

export const generateStarType = (): StarType => {

    const countOfAvailableStarsLife = availableLifeCycleStars.length;
    const randomAvailableStarLifeIndex = Math.floor(Math.random() * countOfAvailableStarsLife);

    const starLifeCycleParameters = availableLifeCycleStars[randomAvailableStarLifeIndex];

    return{
        name: starLifeCycleParameters.name,
        description: starLifeCycleParameters.description,
        spectralIndex: starSpectralIndex(starLifeCycleParameters)
    }
};

export const generateSpectralType = (): StarSpectral => {

    const countOfSpectralType = availableLifeCycleStars.length;
    const currentSpectralIndex = generateStarType().spectralIndex;

    const starSpectralTypeParameters = availableSpectralTypes[currentSpectralIndex];

    return{
        name: starSpectralTypeParameters.name,
        description: starSpectralTypeParameters.description,
        temperature: starTemperature(starSpectralTypeParameters)
    }

};

const starSpectralIndex = (starLifeCycleParameters: AvailableLifeCycleStars): number => {

    const minNumber = starLifeCycleParameters.minSpectralType;
    const maxNumber = starLifeCycleParameters.maxSpectralType;

    return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
};

const starTemperature = (starSpectralTypeParameters: AvailableSpectralTypes): number => {

    const minNumber = starSpectralTypeParameters.minTemperature
    const maxNumber = starSpectralTypeParameters.maxTemperature

    return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
};


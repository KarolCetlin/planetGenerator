import {AvailableSpectralTypes} from "../Types";

export const availableSpectralTypes: AvailableSpectralTypes[] = [
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

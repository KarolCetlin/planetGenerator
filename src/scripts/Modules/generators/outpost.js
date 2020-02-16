"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var events_1 = require("./events");
var availableOutpostsTypes = [
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
            'wszelkich zasad bezpieczeństwa'
    },
    {
        name: 'Punkt handlowy',
        minSize: 500,
        maxSize: 1500,
        description: 'Niewielka odległość dzieląca placówke od bramy gwiezdnej jest świetnym miejscem na sprzedaż oraz przeładunek' +
            'towarów przez konsorcja handlowe oraz niezleżnych kupców. Każdy próbuje jak najkorzystniej sprzedać, czy wymienić towar' +
            'wiedząc na czym w danym momencie można najwięcej zarobić. '
    },
    {
        name: 'Stara Kolonia',
        minSize: 10000,
        maxSize: 30000,
        description: 'Ta kolonia istnieje w tym układzie od wielu pokoleń, lecz z jakiegoś powodu jej rozwój dość mocno wyhamował przez ' +
            'ostatnie lata. Być może to brak przydatnych zasobów, kiepskie położenia na mapie gwiezdnej, a być może jeszcze coś bardziej' +
            'niokiełznanego'
    },
    {
        name: 'Odległa kolonia',
        minSize: 30,
        maxSize: 100,
        description: 'Nowa założona kolonia w odległym rejonie kosmosu. W taką podróż wyruszają najczęściej najodważniejsi mieszkańcy Andry,' +
            'naukowcy głodni nowych zjawisk do zbadania, czy istoty nie mające już nic od stracenia. To także świetne miejsce na kryjówkę, ' +
            'ponieważ w nowo założonej kolonii nowych rąk do pracy nigdy nie jest za wiele '
    },
    {
        name: 'Stolica regionu',
        minSize: 300000,
        maxSize: 1000000,
        description: 'Największa lub najbardziej istotna planeta w tej części kosmosu. To tutaj skupia się główne życie kulturalne oraz społęczne.' +
            'podejmowane są kluczowe decyzje polityczne oraz dyplomatyczne obejmujące swym wpływem najbliższe układy gwiezdne. Dzięki dostępności' +
            'wielu usług to właśnie do planet tego typu ludzie tłumnie przybywają, aby się osiedlić'
    },
];
var mainRacesCollection = ['Altar-yan', 'Wulkanów', 'Silian', 'Flerów', 'Ludzi', 'Syntetyków', "Giag", 'Miridu'];
exports.generateOutpost = function () {
    if (events_1.planetHasOutpost === true) {
        var countOfAvailableOutpostsTypes = availableOutpostsTypes.length;
        var randomAvailableOutpostsIndex = Math.floor(Math.random() * countOfAvailableOutpostsTypes);
        var outpostTypeParameters = availableOutpostsTypes[randomAvailableOutpostsIndex];
        var currentPopulation = Math.floor(Math.random() * (outpostTypeParameters.maxSize - outpostTypeParameters.minSize)) + outpostTypeParameters.minSize;
        console.log('jest kolonia');
        return {
            name: outpostTypeParameters.name,
            population: currentPopulation,
            description: outpostTypeParameters.description,
            society: addRaceToSociety(currentPopulation)
        };
    }
    else {
        console.log('brak koloni');
        return {
            name: 'Brak',
            description: 'Ta planeta nie posiada żadnej kolonii'
        };
    }
};
var getRaceQuantityFromPercent = function (totalNumber, percent) {
    var maxChanceToSuccess = 100;
    return Math.round((totalNumber / maxChanceToSuccess) * percent);
};
var sortRacesByPercents = function (array, sortProperty) {
    array.sort(function (a, b) { return b[sortProperty] - a[sortProperty]; });
};
var getPercentOfRaceInPopulation = function (minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
};
var getRaceNameIndex = function (array) {
    return Math.floor(Math.random() * array.length);
};
var Race;
(function (Race) {
    Race["Name"] = "name";
    Race["Quantity"] = "quantity";
    Race["Percent"] = "percent";
})(Race || (Race = {}));
var addRaceToSociety = function (currentPopulation) {
    var initialPercentPopulation = 100;
    var lastPercentPopulation = 1;
    var amountRacesToRemove = 1;
    var raceCollection = [];
    var copyRacesCollection = __spreadArrays(mainRacesCollection);
    while (initialPercentPopulation >= lastPercentPopulation) {
        var percentDrawnRace = getPercentOfRaceInPopulation(lastPercentPopulation, initialPercentPopulation);
        var indexDrawnRace = getRaceNameIndex(copyRacesCollection);
        var quantityDrawnRace = getRaceQuantityFromPercent(currentPopulation, percentDrawnRace);
        if (copyRacesCollection[indexDrawnRace] === undefined) {
            copyRacesCollection.push("Dane uszkodzone");
        }
        var Society = [];
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

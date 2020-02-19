import { planetCard } from "./Cards/planet";
import {starCard } from './Cards/star'
import { environmentCard } from './Cards/environment';
import { outpostCard } from './Cards/outpost';
import { Animation, View } from '../Modules/Types';

export const cardCollection = () => {

    visibleCard('planetSection');
    visibleCard('starSection');

    planetCard();
    starCard();
    environmentCard();
    outpostCard();
};

const visibleCard = ($element: string) => {

    let element: any = document.getElementById($element);

    element.style.display = View.Show;
    element.classList.remove(Animation.Out);
    element.classList.add(Animation.In)

};




//
//
//
//
//
//
// class ShowDOM {
//     constructor() {
//         new Visible('', 'show', 'planetSection', 'yes');
//         new Visible('', 'show', 'starSection', 'yes');
//
//         this.showPlanetCard();
//         this.showStarCard();
//         this.showOutpostCard();
//         this.showEnvironmentCard()
//
//     }
//
//     showPlanetCard() {
//         new Show("planetName", "name");
//         new Show("planetSizeName", "size", "Rodzaj wielkości:");
//         new Show("planetSizeDescription", "description", "Wytłumaczenie:");
//         new Show(
//             "planetRadius",
//             "radius",
//             "Rozmiar względem ziemii (promień):"
//         );
//
//         new Switch("switchOutpost", "hasOutpost");
//         new Switch("switchEcosferic", "hasEcosferic");
//         new Switch("switchMinerals", "hasMinerals");
//         new Switch("switchAnomaly", "hasAnomaly");
//
//     }
//
//     showStarCard(){
//         new Show("starName", "starName");
//         new Show("starSize", "starType", "Etap życia gwiazdy:");
//         new Show("starSizeDescription", "starTypeDescription");
//
//         new Show("starSpectreType", "nameSpectralType", "Typ widma:");
//         new Show("starSpectreTypeDescription", "descriptionSpectralType");
//     }
//
//     showOutpostCard() {
//         let doesOutpostExist = planetsCollection[currentSolarSystemNumber]["hasOutpost"];
//
//         if (doesOutpostExist === true) {
//             new Visible('hasOutpost', 'show', 'outpostSection');
//
//             new Show("colonyStructure", "outpost", "", "outpostName");
//             new Show(
//                 "colonyPopulation",
//                 "outpost",
//                 "Liczba mieszkańców:",
//                 "outpostPopulation"
//             );
//             new Show("colonyDescription", "outpost", "", "outpostDescription");
//
//             new Diagram();
//
//
//             //  const racesDiagram = new Diagram();
//             // setTimeout(() => racesDiagram.renderDiagram(), 2000);
//
//         } else {
//             // new Visible('id', 'showPlanetCard', 'outpostSection');
//             new Visible('hasOutpost', 'hide', 'outpostSection');
//             new Clear("colonyStructure", "colonyPopulation");
//         }
//
//
//
//
//
//
//
//     }
//
//     showEnvironmentCard(){
//         let doesEnvironmentExist = planetsCollection[currentSolarSystemNumber]["hasEcosferic"];
//
//
//         if(doesEnvironmentExist === true){
//
//             new Visible('hasEcosferic', 'show', 'worldSection');
//
//             new Show('humidityName', 'envirnonment', 'Wilgotność:', 'drawnHumidity');
//             new Show('humidityDescription', 'envirnonment', '', 'drawnHumidityDescription');
//
//             new Show('temperatureName', 'envirnonment', 'Temperatura:', 'drawnTemperature');
//             new Show('temperatureDescription', 'envirnonment', '', 'drawnTemperatureDescription');
//
//
//             new Show('planetTypeName', 'envirnonment', '', 'worldTypeName');
//             new Show('planetTypeDescription', 'envirnonment', '', 'worldTypeDescription')
//
//         } else {
//             // new Visible('hasEcosferic', 'showPlanetCard', 'worldSection');
//             new Visible('hasEcosferic', 'hide', 'worldSection');
//             new Clear("humidityName", "humidityDescription", 'temperatureName', 'temperatureDescription', 'planetTypeName', 'planetTypeDescription');
//
//         }
//
//
//
//
//     }

    // chartInit() {
    //
    //   window.onload = function() {
    //
    //     var chart = new CanvasJS.Chart("chartContainer", {
    //       animationEnabled: true,
    //       title: {
    //         text: "Desktop Search Engine Market Share - 2016"
    //       },
    //       data: [{
    //         type: "pie",
    //         startAngle: 240,
    //         yValueFormatString: "##0.00\"%\"",
    //         indexLabel: "{label} {y}",
    //         dataPoints: [
    //           {y: 79.45, label: "Google"},
    //           {y: 7.31, label: "Bing"},
    //           {y: 7.06, label: "Baidu"},
    //           {y: 4.91, label: "Yahoo"},
    //           {y: 1.26, label: "Others"}
    //         ]
    //       }]
    //     });
    //     chart.render();
    //
    //   }
    // }

// }



"use strict";
exports.__esModule = true;
var planet_1 = require("./Cards/planet");
var star_1 = require("./Cards/star");
var environment_1 = require("./Cards/environment");
exports.cardCollection = function () {
    visibleCard('planetSection');
    visibleCard('starSection');
    planet_1.planetCard();
    star_1.starCard();
    environment_1.environmentCard();
};
var outpostCard = function () {
    return null;
};
var HtmlElements;
(function (HtmlElements) {
    HtmlElements["ShowCard"] = "block";
    HtmlElements["AnimationOut"] = "animation__rollOut";
    HtmlElements["AnimationIn"] = "animation__rollIn";
})(HtmlElements || (HtmlElements = {}));
var visibleCard = function ($element) {
    var element = document.getElementById($element);
    element.style.display = HtmlElements.ShowCard;
    element.classList.remove(HtmlElements.AnimationOut);
    element.classList.add(HtmlElements.AnimationIn);
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

import Switch from "../View/Tools/Switch.js";
import Show from "./Tools/Show";
import Clear from "./Tools/Clear.js";
import { planetsCollection, currentPlanetNumber } from "../Index";
import Visible from './Tools/Visible';
// import {CanvasJS} from '../Vendors/canvasjs-2.3.2/canvasjs.min.js';


class ShowDOM {
  constructor() {
    new Visible('', 'show', 'planetSection', 'yes');
    new Visible('', 'show', 'starSection', 'yes');

    this.showPlanetCard();
    this.showStarCard();
    this.showOutpostCard();
    this.showEnvironmentCard()

  }

  showPlanetCard() {
    new Show("planetName", "planetName");
    new Show("planetSizeName", "sizeName", "Rodzaj wielkości:");
    new Show("planetSizeDescription", "sizeDesctiption", "Wytłumaczenie:");
    new Show(
      "planetRadius",
      "planetRadius",
      "Rozmiar względem ziemii (promień):"
    );

    new Switch("switchOutpost", "hasOutpost");
    new Switch("switchEcosferic", "hasEcosferic");
    new Switch("switchMinerals", "hasMinerals");
    new Switch("switchAnomaly", "hasAnomaly");

  }

  showStarCard(){
    new Show("starName", "starName");
    new Show("starSize", "starType", "Etap życia gwiazdy:");
    new Show("starSizeDescription", "starTypeDescription");

    new Show("starSpectreType", "nameSpectralType", "Typ widma:");
    new Show("starSpectreTypeDescription", "descriptionSpectralType");
  }

  showOutpostCard() {
    let doesOutpostExist = planetsCollection[currentPlanetNumber]["hasOutpost"];

    if (doesOutpostExist === true) {
      new Visible('hasOutpost', 'show', 'outpostSection');

      new Show("colonyStructure", "outpost", "", "outpostName");
      new Show(
        "colonyPopulation",
        "outpost",
        "Liczba mieszkańców:",
        "populationQuantity"
      );
      new Show("colonyDescription", "outpost", "", "outpostDescritpion")


    } else {
      // new Visible('id', 'showPlanetCard', 'outpostSection');
      new Visible('hasOutpost', 'hide', 'outpostSection');
      new Clear("colonyStructure", "colonyPopulation");
    }
  }

  showEnvironmentCard(){
    let doesEnvironmentExist = planetsCollection[currentPlanetNumber]["hasEcosferic"];


    if(doesEnvironmentExist === true){

      new Visible('hasEcosferic', 'show', 'worldSection');
      
      new Show('humidityName', 'envirnonment', 'Wilgotność:', 'drawnHumidity');
      new Show('humidityDescription', 'envirnonment', '', 'drawnHumidityDescription');

      new Show('temperatureName', 'envirnonment', 'Temperatura:', 'drawnTemperature');
      new Show('temperatureDescription', 'envirnonment', '', 'drawnTemperatureDescription');


      new Show('planetTypeName', 'envirnonment', '', 'worldTypeName');
      new Show('planetTypeDescription', 'envirnonment', '', 'worldTypeDescription')

    } else {
      // new Visible('hasEcosferic', 'showPlanetCard', 'worldSection');
      new Visible('hasEcosferic', 'hide', 'worldSection');
      new Clear("humidityName", "humidityDescription", 'temperatureName', 'temperatureDescription', 'planetTypeName', 'planetTypeDescription');

    }




  }

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

}

export default ShowDOM;

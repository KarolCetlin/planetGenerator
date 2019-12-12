import { currentPlanetNumber, planetsCollection } from "../../Index.js";

class Show {
  constructor($containerForText, readFirstProperty, textToShow, readSecondProperty) {
    this.showText($containerForText, readFirstProperty, textToShow, readSecondProperty);
  }

  showText($containerForText, readFirstProperty, textToShow, readSecondProperty) {
    let $element = document.getElementById($containerForText);

    if (readSecondProperty !== undefined) {
      $element.innerHTML = `<span>${textToShow}</span> ${planetsCollection[currentPlanetNumber][readFirstProperty][readSecondProperty]}`;
    } else if (textToShow === undefined) {
      $element.innerHTML = `${planetsCollection[currentPlanetNumber][readFirstProperty]}`;
    } else {
      $element.innerHTML = `<span>${textToShow}</span> ${planetsCollection[currentPlanetNumber][readFirstProperty]}`;
    }
  }
}

export default Show;

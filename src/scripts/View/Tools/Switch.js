import { currentPlanetNumber, planetsCollection } from "../../Index.js";

class Switch {
  constructor($checkboxId, propertyCheck) {
    this.showBoolean($checkboxId, propertyCheck);
  }

  showBoolean($checkboxId, propertyCheck) {
    let $checkboxElement = document.getElementById($checkboxId);
    let readProperty = planetsCollection[currentPlanetNumber][propertyCheck];

    readProperty === true ? $checkboxElement.checked = true : $checkboxElement.checked = false;

  }
}

export default Switch;

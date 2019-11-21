class Basic {
  constructor() {
    this.$planetName = document.getElementById("planetName");
    this.$planetSizeDescritpion = document.getElementById(
      "planetSizeDescription"
    );
    this.$planetSize = document.getElementById("planetSizeName");
    this.$planetRadius = document.getElementById("planetRadius");

    this.calc = new Tools();
    this.data = new Data();
    this.world = new World();
  }

  addPlanet() {
    let selectedNameIndex = this.calc.getRandomIndexFromArray(
      this.data.setPlanetNames
    );
    this.selectedSizeIndex = this.calc.getRandomIndexFromArray(
      this.data.planetSizesSet
    );

    this.$planetName.innerHTML = `${this.data.setPlanetNames[selectedNameIndex]}`;
    this.$planetSize.innerHTML = `<span>Rodzaj wielkości: </span> ${
      this.data.planetSizesSet[this.selectedSizeIndex].planetSizeName
    }`;
    this.$planetRadius.innerHTML = `<span>Rozmiar względem ziemii (promień):</span> ${this.addPlanetSize()}`;
    this.$planetSizeDescritpion.innerHTML = `<span> Wytłumaczenie: </span> ${
      this.data.planetSizesSet[this.selectedSizeIndex].description
    }`;
  }

  addPlanetSize() {
    return this.calc.randomNumberFromArrayInRange(
      this.data.planetSizesSet,
      this.selectedSizeIndex,
      "minSizeRadius",
      "maxSizeRadius"
    );
  }

  showElementsByTag(getElement) {
    this.element = getElement.toString();

    let $selectedSet = [...document.getElementsByTagName(this.element)];

    for (const selectedItem in $selectedSet) {
      $selectedSet[selectedItem].classList.remove("visible__hide");
    }
  }

  hideElementsByTag() {
    let sectionHTML = [...document.getElementsByTagName("section")];

    for (const element in sectionHTML) {
      sectionHTML[element].classList.add("visible__hide");
    }
  }

  hideElementById(elementID) {
    let captureElement = document.getElementById(elementID.toString());
    captureElement.style.display = "none";
  }

  inspectEcosferic() {
    this.$checkbox = document.getElementById("switchEcosferic");

    if (this.calc.getRandomNumberFromRange() < this.data.ecosfericPossibility) {
      this.calc.initCheckbox(this.$checkbox, (this.data.hasEcosferic = true));
      this.world.checkConditionsForLifeWorld(this.data.hasEcosferic);
    } else {
      this.calc.initCheckbox(this.$checkbox, (this.data.hasEcosferic = false));

      let table = [
        this.world.$humidityTitle,
        this.world.$humidityDescription,
        this.world.$temperatureTitle,
        this.world.$temperatureDescription,
        this.world.$temperatureTitle,
        this.world.$worldDescription,
        this.world.$worldTitle
      ];

      for (let i = 0; i < table.length; i++) {
        this.calc.clearDate(table[i]);
      }
    }
  }
}

class Basic {
  constructor() {
    this.planetName = document.getElementById("planetName");
    this.planetSizeDescritpion = document.getElementById(
      "planetSizeDescription"
    );
    this.planetSizeName = document.getElementById("planetSizeName");
    this.planetRadiusHTML = document.getElementById("planetRadius");

    this.calc = new Calc();
    this.data = new Data();
  }

  planetTypeDraw() {
    let drawNameForPlanet = this.calc.getRandomItemFromArray(
      this.data.setPlanetNames
    );
    let drawSizeForPlanet = this.calc.getRandomItemFromArray(
      this.data.planetSizesSet
    );

    this.planetName.textContent = this.data.setPlanetNames[drawNameForPlanet];
    this.planetSizeName.innerHTML = `<span>Rodzaj wielkości: </span> ${this.data.planetSizesSet[drawSizeForPlanet].planetSizeName}`;

    this.planetRadiusHTML.innerHTML = `<span>Rozmiar względem ziemii (promień):</span> ${this.drawPlanetSize(
      drawSizeForPlanet
    )}`;
    console.log(this.drawPlanetSize(drawSizeForPlanet));

    this.planetSizeDescritpion.innerHTML = `<span> Wytłumaczenie: </span> ${this.data.planetSizesSet[drawSizeForPlanet].description}`;
  }

  drawPlanetSize(planetSizeNumber) {
    let min = this.data.planetSizesSet[planetSizeNumber].minSizeRadius;
    let max = this.data.planetSizesSet[planetSizeNumber].maxSizeRadius;

    return Math.floor(Math.random() * (max - min)) + min;
  }

  showSection() {
    let sectionHTML = [...document.getElementsByTagName("section")];

    for (const element in sectionHTML) {
      sectionHTML[element].classList.remove("disable");
      // sectionHTML[element].style.display = 'inline';
    }
  }

  hideText() {
    let $text = document.getElementById('buttonText');

    $text.style.display = 'none';
  }
}

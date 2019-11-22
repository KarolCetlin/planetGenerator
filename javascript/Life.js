"use strict";

class Life {
  constructor() {
    this.calc = new Tools();
    this.data = new Data();

    this.$raceLog = document.getElementById("colonyStructure");
    this.$societySpace = document.getElementById("colonyPopulation");
    this.$checkbox = document.getElementById("toggleCheckboxLife");
  }

  inspectLife() {
    if (this.calc.getRandomNumberFromRange() < this.data.outpostPossibility) {
      this.calc.initCheckbox(this.$checkbox, this.hasLife = true);
      this.addAllSociety();
    } else {
        this.calc.initCheckbox(this.$checkbox, this.hasLife = false);
        this.calc.clearDate(this.$societySpace);
        this.calc.clearDate(this.$raceLog);

        this.data.changeOnMinerals += 15;
    }
  }

  addOutpost(){
      return this.calc.getRandomIndexFromArray(this.data.outpostsSet);
  }


  addRaceToSociety() {
    let indexDrawnOutpost = this.addOutpost();

    this.populationQuantity =
      Math.floor(
        Math.random() *
          (this.data.outpostsSet[indexDrawnOutpost].maxSize -
            this.data.outpostsSet[indexDrawnOutpost].minSize +
            1)
      ) + this.data.outpostsSet[indexDrawnOutpost].minSize;

    this.$raceLog.innerHTML = `<span> Typ: </span> ${this.data.outpostsSet[indexDrawnOutpost].planetName}`;
  }

  addAllSociety() {
    if (this.hasLife === true) {
      this.addRaceToSociety();

      let wholePopulation = 101;
      this.calc.clearDate(this.$societySpace);
      this.$societySpace.innerHTML += `<span>Placówka z:</span> ${this.populationQuantity} mieszkańców </br>`;

      this.data.copyRaceSet = [...this.data.mainRacesCollection];

      while (wholePopulation > 1) {
        let percentDrawnRace = this.calc.getRandomNumberFromRange(wholePopulation);

        if (percentDrawnRace === 0) {
          continue;
        }

        this.data.indexDrawnRace = this.calc.getRandomIndexFromArray(
          this.data.copyRaceSet
        );

        if (this.data.copyRaceSet[this.data.indexDrawnRace] === undefined) {
          this.data.copyRaceSet.push(
            "Brak szczegółowych danych, błędy w raportach"
          );
        }

        let quantityDrawnRace = Math.round(
          (this.populationQuantity / 100) * percentDrawnRace
        );

        this.$societySpace.innerHTML += `${
          this.data.copyRaceSet[this.data.indexDrawnRace]
        } ${percentDrawnRace}% </br>`;

        this.inspectSocialLaw(percentDrawnRace);

        wholePopulation -= percentDrawnRace;
        this.data.copyRaceSet.splice(this.data.indexDrawnRace, 1);
      }
    }
  }

  inspectSocialLaw(checkedValue) {
    if (checkedValue > 51) {
      this.$societySpace.innerHTML += `Planeta należaca do ${
        this.data.mainRacesCollection[this.data.indexDrawnRace]
      } <br>`;
    }
  }
}

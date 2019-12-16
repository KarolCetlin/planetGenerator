import "../../sass/main.scss";
import Generator from "./Modules/Generator";
import ShowDOM from "./View/ShowDOM";
import '../../public/images/planets/planets2.jpg';
import '../../public/images/population/colony.jpg';
import '../../public/images/stars/star.jpg';
import '../../public/images/world/savanna.jpg';
import '../../public/images/background/wallpaper.jpg';




export let currentPlanetNumber = 0;
export let planetsCollection = [];

class Init {
  constructor($element, chosenMethod) {
    this.click($element, chosenMethod);
  }

  checkMethod(chosenMethod) {
    switch (chosenMethod) {
      case "auto":
        this.initGenerator();
        new ShowDOM();

        break;

      case "single":
        console.log("pojedyńcze");
        break;

      case "custom":
        console.log("pełna personalizacja");
        break;
    }
  }

  initGenerator() {
    let newPlanet = new Generator();
    planetsCollection.push(newPlanet);
    console.log(planetsCollection);
  }

  click($element, chosenMethod) {
    let clickedElement = document.getElementById($element);
    clickedElement.onclick = () => {
      this.checkMethod(chosenMethod);
      currentPlanetNumber++;
    };
  }
}

new Init("active", "auto");


import planetNameGenerator from './generators/planetName';
import { generatePlanetSize } from './generators/planetType';
import { generateOutpost } from './generators/outpost';
import {generateStar} from './generators/star'
import { environmentGenerate } from './generators/environment'
import { Planet } from './Types'
import { generateEvents } from "./generators/events";

// const generatePlanetName = (): string => {
//   return planetNameGenerator();
// };


export const generatePlanet = (params: any): Planet => {

  return {
    name: planetNameGenerator(params.availablePlanetNames),
    size: generatePlanetSize(),
    star: generateStar(params.availableStarNames, params.availableLifeCycleStars, params.availableSpectralTypes),
    event: generateEvents(),
    outpost: generateOutpost(),
    environment: environmentGenerate(params.availableWorlds, params.availableTemperatures, params.availableHumidities),
  };
};


import planetNameGenerator from './generators/planetName';
import { generatePlanetSize } from './generators/planetType';
import { generateOutpost } from './generators/outpost';
import {generateStar} from './generators/star'
import { environmentGenerate } from './generators/environment'
import { Planet } from './Types'
import { generateEvents } from "./generators/events";

const generatePlanetName = (): string => {
  return planetNameGenerator();
};


export const generatePlanet = (): Planet => {

  return {
    name: generatePlanetName(),
    size: generatePlanetSize(),
    star: generateStar(),
    event: generateEvents(),
    outpost: generateOutpost(),
    environment: environmentGenerate(),
  };
};


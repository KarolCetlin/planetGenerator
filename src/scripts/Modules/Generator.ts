import planetNameGenerator from './generators/planetName';
import {
  PlanetSize,
  generatePlanetSize,
} from './generators/planetType';
import { Outpost, generateOutpost } from './generators/outpost';
import {generateStar, Star} from './generators/star'
import { environmentGenerate } from './generators/environment'
import {Environment, EventRequirements } from './Types'
import { generateEvents } from "./generators/events";

interface Planet {
  name: string;
  size: PlanetSize;
  star: Star;
  event: EventRequirements;
  outpost: Outpost;
  environment: Environment;
}

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


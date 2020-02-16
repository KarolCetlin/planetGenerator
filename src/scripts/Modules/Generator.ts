import { checkChance, getNameFromObject } from '../Logic/Tools';
import {
  anomalyPossibility,
  ecosfericPossibility,
  mineralsPossibility,
  outpostPossibility,
  setSpectralTypes,
} from '../Data/Data';
import planetNameGenerator from './generators/planetName';
import starNameGenerator from './generators/planetName';
import {
  PlanetSize,
  generatePlanetSize,
} from './generators/planetType';
import { Outpost, generateOutpost } from './generators/outpost';
import {generateStar, Star} from './generators/star'
import { Environment,
  environmentGenerete } from './generators/environment'


interface Planet {
  name: string;
  size: PlanetSize;
  star: Star;
  hasOutpost: boolean;
  hasEcosferic: boolean;
  hasMinerals: boolean;
  hasAnomaly: boolean;
  outpost: Outpost;
  environment: Environment;
}

const generatePlanetName = (): string => {
  return planetNameGenerator();
};

const generateHasOutpost = (): boolean => {
  return checkChance(outpostPossibility);
};

const generateHasEcosferic = (): boolean => {
  return checkChance(ecosfericPossibility);
};

const generateHasMinerals = (): boolean => {
  return checkChance(mineralsPossibility);
};

const generateHasAnomaly = (): boolean => {
  return checkChance(anomalyPossibility);
};

const generatePlanetOutpost = (hasOutpost): any => {

  return null;

  // if (hasOutpost === true) {
  //
  //     return generateOutpost();
  //
  //     } else {
  //         console.log('Niestety nie ma żadnego posterunku na tej planecie');
  //     }
};

console.log(generatePlanetOutpost);

const generateEnvirnonment = (): Environment => {
  if (generatePlanet[this.hasEcosferic] === true) {
    this.environment = environmentGenerete();
  } else {
    console.log('planeta poza ekosferą, istenienie środowiska jest niemożliwe');
    return environmentGenerete();
  }
};

export const generatePlanet = (): Planet => {
  const hasEcosferic = generateHasEcosferic();
  const hasOutpost = generateHasOutpost();

  return {
    name: generatePlanetName(),
    size: generatePlanetSize(),
    star: generateStar(),
    hasOutpost: generateHasOutpost(),
    hasEcosferic: generateHasEcosferic(),
    hasMinerals: generateHasMinerals(),
    hasAnomaly: generateHasAnomaly(),
    outpost: generateOutpost(),
    environment: generateEnvirnonment(),
  };
};


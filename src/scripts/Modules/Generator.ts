import { checkChance, getNameFromObject } from '../Logic/Tools';
import {
  anomalyPossibility,
  ecosfericPossibility,
  mineralsPossibility,
  outpostPossibility,
  setSpectralTypes,
} from '../Data/Data';
import Environment from './Environment.js';
import planetNameGenerator from './generators/planetNameGenerator';
import starNameGenerator from './generators/planetNameGenerator';
import {
  planetRadiusGenerator,
  planetSizeDescriptionGenerator,
  planetSizeNameGenerator,
  PlanetSize,
  generatePlanetSize,
} from './generators/planetTypeGenerator';
// import { generateOutpost } from './AddOutpost';
import {generateStar, Star} from './generators/starNameGenerator'


interface Planet {
  name: string;
  size: PlanetSize;
  star: Star;
  hasOutpost: boolean;
  hasEcosferic: boolean;
  hasMinerals: boolean;
  hasAnomaly: boolean;
  outpost: any;
  environment: string | null;
}



const generatePlanetName = (): string => {
  return planetNameGenerator();
};

const generatePlanetSizeName = (): string => {
  return planetSizeNameGenerator();
};

const generatePlanetRadius = (): number => {
  return planetRadiusGenerator();
};

const generateStarName = (): string => {
  return starNameGenerator();
};

const generatePlanetSizeDescription = (): string => {
  return planetSizeDescriptionGenerator();
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

const generateEnvirnonment = (): string => {
  if (this.hasEcosferic == true) {
    this.environment = new Environment();
  } else {
    console.log('planeta poza ekosferą, istenienie środowiska jest niemożliwe');
    return null;
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
    outpost: generatePlanetOutpost(hasOutpost),
    environment: generateEnvirnonment(),
  };
};


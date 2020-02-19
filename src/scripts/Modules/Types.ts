
export interface RequirementsCreationEnvironment {
    name: string,
    description: string,
    temperature?: number,
    humidity?: number,
}

export interface World {
    name: string,
    description: string,
}

export interface Environment {
    temperatureName: string
    temperatureDescription: string,
    humidityName: string,
    humidityDescription: string,
    worldName: any,
    worldDescription: string,
}

export interface EventRequirements {
    hasOutpost: boolean,
    hasEcosferic: boolean,
    hasMinerals: boolean,
    hasAnomaly: boolean,
};

export interface OutpostsParameters {
    name: string,
    minSize: number,
    maxSize: number,
    description: string,
}

export interface Outpost {
    name: string,
    population?: number,
    description: string,
    society?: Object[],
}

export interface AvailablePlanetSizeParameters {
    planetSizeName: string,
    description: string,
    minSizeRadius: number,
    maxSizeRadius: number,
    typeSize: string
}

export interface PlanetSize {
    name: string,
    description: string,
    radius: number,
}

export interface Star {
    name: string;
    lifeCycle: StarType;
    spectral: StarSpectral;
}

export interface AvailableLifeCycleStars {

    name: string,
    description: string,
    minSpectralType: number,
    maxSpectralType: number,

}

export interface AvailableSpectralTypes {
    name: string,
    description: string,
    minTemperature: number,
    maxTemperature: number,
}

export interface StarType {

    name: string,
    description: string,
    spectralIndex: number,
}

export interface StarSpectral {
    name: string,
    description: string,
    temperature: number,
}

export interface Planet {
    name: string;
    size: PlanetSize;
    star: Star;
    event: EventRequirements;
    outpost: Outpost;
    environment: Environment;
}


export enum Race {

    Name = 'name',
    Quantity = 'quantity',
    Percent = 'percent',

}


export enum $outpost {

    Card = 'outpostSection',
    Description = 'colonyDescription',
    Structure = 'colonyStructure',

}

export enum Animation {

    Out = 'animation__rollOut',
    In = 'animation__rollIn',

}

export enum View {

    Show = 'block',
    Hide = 'none',

}

export enum Description {
    Name = "Wytłumaczenie:",
    Size = "Rodzaj wielkości:",
    Radius = "Rozmiar względem ziemii (promień):",
    Empty = '',
    Humidity = 'Wilgotność:',
    Temperature = 'Temperatura:',

}

export enum Props {
    HumName = 'humidityName',
    HumDesc = 'humidityDescription',
    TemName = 'temperatureName',
    TemDesc = 'temperatureDescription',
    WorName = 'worldName',
    WodDesc = 'worldDescription',
    Name = 'name',
    Description = 'description'
}
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
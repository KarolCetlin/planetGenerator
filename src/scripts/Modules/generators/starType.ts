import {
    AvailableLifeCycleStars,
    AvailableSpectralTypes,
    StarType,
    StarSpectral,
} from "../Types";

// const availableLifeCycleStars: AvailableLifeCycleStars[] = require('../../Data/availableLifeCycleStars.json');
// const availableSpectralTypes: AvailableSpectralTypes[] = require('../../Data/availableSpectralTypes.json');

export const generateStarType = (availableLifeCycleStars): StarType => {

    const countOfAvailableStarsLife = availableLifeCycleStars.length;
    const randomAvailableStarLifeIndex = Math.floor(Math.random() * countOfAvailableStarsLife);

    const starLifeCycleParameters = availableLifeCycleStars[randomAvailableStarLifeIndex];

    return{
        name: starLifeCycleParameters.name,
        description: starLifeCycleParameters.description,
        spectralIndex: starSpectralIndex(starLifeCycleParameters)
    }
};

export const generateSpectralType = (availableSpectralTypes, availableLifeCycleStars): StarSpectral => {

    const currentSpectralIndex = generateStarType(availableLifeCycleStars).spectralIndex;

    const starSpectralTypeParameters = availableSpectralTypes[currentSpectralIndex];

    return{
        name: starSpectralTypeParameters.name,
        description: starSpectralTypeParameters.description,
        temperature: starTemperature(starSpectralTypeParameters)
    }

};

const starSpectralIndex = (starLifeCycleParameters: AvailableLifeCycleStars): number => {

    const minNumber = starLifeCycleParameters.minSpectralType;
    const maxNumber = starLifeCycleParameters.maxSpectralType;

    return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
};

const starTemperature = (starSpectralTypeParameters: AvailableSpectralTypes): number => {

    const minNumber = starSpectralTypeParameters.minTemperature
    const maxNumber = starSpectralTypeParameters.maxTemperature

    return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
};


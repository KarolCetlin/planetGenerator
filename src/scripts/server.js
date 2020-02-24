const fastify = require('fastify')();
const fs = require('fs');
const path = require('path');


fastify.get('/availableWorlds', async (request, reply) => {
    const rawdata = fs.readFileSync(path.resolve('./Data/', 'availableWorlds.json'));
    const readdata = JSON.parse(rawdata);

    reply.header('Access-Control-Allow-Origin', '*');

    return readdata
});

fastify.get('/availableHumidities', async (request, reply) => {
    const rawdata = fs.readFileSync(path.resolve('./Data/', 'availableHumidities.json'));
    const readdata = JSON.parse(rawdata);

    reply.header('Access-Control-Allow-Origin', '*');

    return readdata
});

fastify.get('/availableLifeCycleStars', async (request, reply) => {
    const rawdata = fs.readFileSync(path.resolve('./Data/', 'availableLifeCycleStars.json'));
    const readdata = JSON.parse(rawdata);

    reply.header('Access-Control-Allow-Origin', '*');

    return readdata
});

fastify.get('/availableOutpostsTypes', async (request, reply) => {
    const rawdata = fs.readFileSync(path.resolve('./Data/', 'availableOutpostsTypes.json'));
    const readdata = JSON.parse(rawdata);

    reply.header('Access-Control-Allow-Origin', '*');

    return readdata
});

fastify.get('/availablePlanetNames', async (request, reply) => {
    const rawdata = fs.readFileSync(path.resolve('./Data/', 'availablePlanetNames.json'));
    const readdata = JSON.parse(rawdata);

    reply.header('Access-Control-Allow-Origin', '*');

    return readdata
});

fastify.get('/availablePlanetSizes', async (request, reply) => {
    const rawdata = fs.readFileSync(path.resolve('./Data/', 'availablePlanetSizes.json'));
    const readdata = JSON.parse(rawdata);

    reply.header('Access-Control-Allow-Origin', '*');

    return readdata
});

fastify.get('/availableRaces', async (request, reply) => {
    const rawdata = fs.readFileSync(path.resolve('./Data/', 'availableRaces.json'));
    const readdata = JSON.parse(rawdata);

    reply.header('Access-Control-Allow-Origin', '*');

    return readdata
});

fastify.get('/availableSpectralTypes', async (request, reply) => {
    const rawdata = fs.readFileSync(path.resolve('./Data/', 'availableSpectralTypes.json'));
    const readdata = JSON.parse(rawdata);

    reply.header('Access-Control-Allow-Origin', '*');

    return readdata
});

fastify.get('/availableTemperatures', async (request, reply) => {
    const rawdata = fs.readFileSync(path.resolve('./Data/', 'availableTemperatures.json'));
    const readdata = JSON.parse(rawdata);

    reply.header('Access-Control-Allow-Origin', '*');

    return readdata
});

fastify.get('/availableStarNames', async (request, reply) => {
    const rawdata = fs.readFileSync(path.resolve('./Data/', 'availableStarNames.json'));
    const readdata = JSON.parse(rawdata);

    reply.header('Access-Control-Allow-Origin', '*');

    return readdata
});

const start = async () => {


    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err);
        process.exit(1)
    }
};

start();
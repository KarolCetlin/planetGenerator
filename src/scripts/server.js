const fastify = require('fastify')();
const fs = require('fs');
const path = require('path');

const rawdata = fs.readFileSync(path.resolve('./Data/', 'availableWorlds.json'));
const readdata = JSON.parse(rawdata);

fastify.get('/availableWorlds', async (request, reply) => {
    reply.header('Access-Control-Allow-Origin', '*');

    return readdata
});

fastify.get('/', async (request, reply) => {
    reply.header('Access-Control-Allow-Origin', '*');

    return readdata
});

const start = async () => {


    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start();
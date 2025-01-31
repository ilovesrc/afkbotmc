// to run this script you will first have to install node.js
// after u have installed node.js you can open cmd
// and type 'npm install bedrock-protocol
// then you can run this script by typing 'node main.js'
// in the cmd. the cmd needs to be in the same directory as the script.
const codedbyraks = require('bedrock-protocol');

const invite = 'code';

const rakscodedthis = codedbyraks.createClient({
    realms: {
        realmInvite: invite
    },
    offline: false,
    skipPing: true,
    profilesFolder: './auth'
});

rakscodedthis.on('join', async () => {
    console.log(`[LOG] connected to realm > ${invite}`);
});

rakscodedthis.on('close', async () => {
    console.log(`[LOG] left realm > ${invite}`);
});

rakscodedthis.on('disconnect', (packet) => {
    console.error('[LOG] realm disconnect > ', packet.reason);
});

rakscodedthis.on('error', (err) => {
    console.error('[LOG] error > ', err.message);
});
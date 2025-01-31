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

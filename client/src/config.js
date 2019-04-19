'use strict';

module.exports = {
    name: 'Confection Social Media App',
    version: '0.0.1',
    env: process.env.NODE_ENV || 'DEVELOPMENT',
    stream: {
        appId: process.env.STREAM_APP_ID,
        key: process.env.STREAM_KEY,
        secret: process.env.STREAM_SECRET
    },
    mongo: {
        username: process.env.MONGO_UN,
        password: process.env.MONGO_PW
    }
}
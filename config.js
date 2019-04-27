
module.exports = {
    name: 'Confection Social Media App',
    version: '0.0.1',
    env: process.env.NODE_ENV || 'DEVELOPMENT',
    mongo: {
        username: process.env.MONGO_UN,
        password: process.env.MONGO_PW
    }
 }

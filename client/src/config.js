module.exports = {
    name: 'Confection Social Media App',
    version: '0.0.1',
    env: process.env.NODE_ENV || 'DEVELOPMENT',
    stream: {
        appId: process.env.STREAM_APP_ID,
        key: process.env.STREAM_KEY,
        secret: process.env.STREAM_SECRET
    }
}
module.exports = {
    apps: [
        {
            name: 'adonis-starterkit',
            script: './build/server.js',
            instances: 'max',
            exec_mode: 'cluster',
            autorestart: true,
        },
    ],
}

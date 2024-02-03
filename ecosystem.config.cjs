module.exports = {
    apps: [
        {
            name: 'adonis-starterkit',
            script: './build/bin/server.js',
            instances: 'max',
            exec_mode: 'cluster',
            autorestart: true,
        },
    ],
}

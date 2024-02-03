module.exports = {
    apps: [
        {
            name: 'baboost',
            script: './build/server.js',
            instances: 'max',
            exec_mode: 'cluster',
            autorestart: true,
        },
    ],
}

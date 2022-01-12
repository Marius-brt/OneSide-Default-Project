const oneside = require('oneside')

oneside.get('/', (req, res) => {
    oneside.send(res, "home.html", {
        version: require('./package.json').dependencies.oneside.replace('^', '')
    })
})

oneside.listen()
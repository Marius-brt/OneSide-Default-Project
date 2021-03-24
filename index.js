const oneSide = require('oneside')
oneSide.static('/', 'index.html', 200)
require('dns').lookup(require('os').hostname(), (err, add, fam) => {
    oneSide.listen(4050, add)
})
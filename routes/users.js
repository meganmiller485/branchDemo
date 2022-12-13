const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.send([{ name: 'Peter' }, { name: 'Megan' }])
})



module.exports = router
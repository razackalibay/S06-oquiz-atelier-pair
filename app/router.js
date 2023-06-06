// const express = require('express');
// const router = express.Router();

// express = {
//     app: function() {},
//     Router: {}
// }

const { Router } = require('express');
const router = Router();
const appController = require('./controllers/appController.js');

router.get('/', appController.index);

router.use((req, res, next) => {
    res.status(404).render('404');
});

module.exports = router;

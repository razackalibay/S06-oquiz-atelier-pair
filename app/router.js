// const express = require('express');
// const router = express.Router();

// express = {
//     app: function() {},
//     Router: {}
// }

const { Router } = require('express');
const router = Router();
const mainController = require('./controllers/mainController.js');
const quizController = require('./controllers/quizController.js');
const tagController = require('./controllers/tagController.js');

router.get('/', mainController.index);
router.get("/quiz/:id", quizController.getQuiz);
router.get("/tags", tagController.getAllTags);



router.use((req, res, next) => {
    res.status(404).render('404');
}); 

module.exports = router;
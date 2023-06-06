const { User, Quiz, Tag } = require('../models');


const mainController ={
    async index (req,res) {
        try {
            const quizzes = await Quiz.findAll({
                include: [
                    'tags',
                    'author'

                ]
            })
            return res.render('home', {quizzes});
        } catch (error) {
            console.log(error.message);
            console.log(error.stack);
            return res.status(500).send('Un erreur');
        }
    }

};

module.exports = mainController;

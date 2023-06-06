const { Quiz, Level, User, Question, Answer, Tag } = require('../models');


const quizController ={
    async getQuiz (req,res) {
        try { let quiz = await Quiz.findByPk(req.params.id, {
            include: [
                { model : User, as: 'author'},
                { model : Tag, as: 'tags'}, 
                { model : Question, as : 'questions', include: [
                    {model: Level, as : 'level'},
                    {model: Answer, as : 'answers'},
                    {model: Answer, as : 'good_answer'},

        ]}]
        });
        //, 'tags', 'questions', 'level', 'answers', 'good_answer'
            res.render("quiz", {quiz});

          
        } 
        catch (error) {
            console.log(error.message);
            console.log(error.stack);
            return res.status(500).send('Un erreur');
        }
    }

    

};

module.exports = quizController;
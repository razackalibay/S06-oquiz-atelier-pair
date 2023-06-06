const { User, Tag, Question, Level, Answer, Quiz } = require('../models');


const tagController ={
    async getAllTags (req,res) {
        try {

            res.render("tags")

          
        } 
        catch (error) {
            console.log(error.message);
            console.log(error.stack);
            return res.status(500).send('Un erreur');
        }
    }

};

module.exports = tagController;
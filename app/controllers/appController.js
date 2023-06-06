const appController = {
    async index(req, res) {
        try {
            return res.render('home');
        } catch (error) {
            console.log(error.message);
            console.log(error.stack);
            return res.status(500).send('Un erreur');
        }
    },
};

module.exports = appController;

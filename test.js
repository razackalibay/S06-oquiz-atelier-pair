const Level = require('./app/old-models/level');
const User = require('./app/old-models/user');
const Question = require('./app/old-models/question');

const o_level = new Level({
    id: 4,
    name: 'Ultra Difficile',
    created_at: '2022',
    updated_at: '2022',
});

// * On se sert du mutateur / setter pour modifier notre #id
// * Concernant les mutateurs et accesseurs : o s'en sert comme des propriétés classiques.
//console.log(o_level);
// * CG : bah en gros le # va venir emprisonner une donnée, qui ne sera plus visible ou modifiable sauf en utilisant 2 clé : get pour la voir/l'avoir et set pour la modifier
//o_level.id = 5;

const o_user = new User({
    id: 4,
    firstname: 'Laurent',
    lastname: 'oclock',
    email: 'laurent@oclock.io',
    passsword: '(*lkmjndfgh*lknwdfg*lkn,wd',
    created_at: '2022',
    updated_at: '2022',
});

// * L'accesseur fullName : on s'en sert comme d'une propriété classique
// console.log(o_user.fullName);

const o_question = new Question({
    id: 4,
    wiki: 'Scrat',
    anecdote:
        "À l'occasion de la sortie de L'Âge de glace 4, Scrat a eu son double de cire au Musée Grévin le 20 juin 2012.",
    created_at: '2022',
    updated_at: '2022',
});

//console.log(o_question.infos);

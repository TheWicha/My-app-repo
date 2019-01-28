
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        { 
          id: 1, 
          title: 'Im a Tittle!',
          content: 'Im a content value! Lorem ipsum dolor sit amet',
          author: 'Cyceron',
          user_id: 3

        },
        {
          id: 2, 
          title: 'Im a Tittle Too! ',
          content: 'Im a content value! Nam sed pharetra ipsum.',
          author: 'Also Cyceron',
          user_id: 1
        },
        {
          id: 3, 
          title: 'Im also a Tittle! ^_^',
          content:'Woo! It makes me content i gues...Phasellus sed nisi bibendum, euismod lorem interdum, cursus dui. Mauris ut tortor molestie, lobortis ipsum non, placerat mauris. Sed posuere tortor et lorem volutpat eleifend. Quisque at facilisis enim.',
          author: 'Again Cyceron',
          user_id: 2
        }
      ]);
    });
};

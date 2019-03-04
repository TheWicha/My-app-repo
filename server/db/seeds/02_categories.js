exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('categories').del()
      .then(function () {
        // Inserts seed entries
        return knex('categories').insert([
          { 
            id: 1, 
            name: '1 pot',
            slug: '1-pot',
          },
          {
            id: 2, 
            name: 'Baking',
            slug: 'baking',
          },
          {
            id: 3, 
            name: 'Budget',
            slug: 'budget',
          },
          {
            id: 4, 
            name: 'How to',
            slug: 'how-to',
          }
        ]);
      });
  };
  
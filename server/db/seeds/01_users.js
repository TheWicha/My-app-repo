
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, 
          name: 'Guy no1', 
          email: 'some_email1@nopost.com'
        },
        {
          id: 2, 
          name: 'Guy no2', 
          email: 'some_email2@nopost.com'
        },
        {
          id: 3, 
          name: 'Guy no3', 
          email: 'some_email3@nopost.com'
        }
      ]);
    });
};

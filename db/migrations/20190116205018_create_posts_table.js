exports.up = function(knex, Promise) {
       return knex.schema.createTable('users', function(table){
            table.increments();
            table.string('name').notNullable();
            table.string('email').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        }).createTable('posts', function(table){
            table.increments();
            table.string('title').notNullable();
            table.text('content', 'longtext').notNullable();
            table.string('author').notNullable();
            table.string('slug').unique();
            table.string('thumbnail')
            table.string('image')
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
            table.integer('user_id').references('id').inTable('users');
            });
};
    
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('posts').dropTable('users');
};

exports.up = function (knex) {
	return knex.schema.createTable('users', function (table) {
		table.increments();
		table.string('name').notNullable();
		table.string('email').notNullable();
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
	})
		.createTable('categories', function (table) {
			table.increments('id').primary();
			table.string('name').notNullable();
			table.string('slug').unique();
			table.timestamp('created_at').defaultTo(knex.fn.now());
			table.timestamp('updated_at').defaultTo(knex.fn.now());
		})
		.createTable('posts', function (table) {
			table.increments('id').primary();
			table.string('title').notNullable();
			table.text('content', 'longtext').notNullable();
			table.text('summary').notNullable();
			table.string('author').notNullable();
			table.string('slug').unique();
			table.string('thumbnail')
			table.string('image')
			table.timestamp('created_at').defaultTo(knex.fn.now());
			table.timestamp('updated_at').defaultTo(knex.fn.now());
			table.integer('user_id').references('id').inTable('users');
			table.integer('category_id').references('categories.id');
		});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTable('posts').dropTable('categories').dropTable('users');
};

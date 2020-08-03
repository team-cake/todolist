'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'tags',
			[
				{
					title: 'cool',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'awesome',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'far out',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'just chillin',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'whatevs',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'si claro',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('tags', null, {})
	},
}

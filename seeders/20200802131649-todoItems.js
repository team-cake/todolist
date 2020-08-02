'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'todoItems',
			[
				{
					task: 'Write new code',
					deadline: 'tomorrow noon',
					listId: '19',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					task: 'Set up template for webshop',
					deadline: 'tomorrow at 5pm',
					listId: '20',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					task: 'Check github for new inspirational repos',
					deadline: 'tomorrow 2200',
					listId: '21',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					task: 'FreeCodeCamp time',
					deadline: 'Morning 0800',
					listId: '22',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					task: 'Enjoy life with the cats',
					deadline: 'all day',
					listId: '23',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					task: 'Siesta por la vida',
					deadline: 'manana',
					listId: '24',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('todoItems', null, {})
	},
}

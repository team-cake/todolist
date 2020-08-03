'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'todoItems',
			[
				{
					task: 'Helping people with coding',
					deadline: 'tomorrow noon',
					important: true,
					todoListId: '1',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					task: 'Enjoying the warm weather',
					deadline: 'tomorrow at 5pm',
					important: false,
					todoListId: '2',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					task: 'Code new boardgame',
					deadline: 'tomorrow 2200',
					important: true,
					todoListId: '4',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					task: 'Back in my days I checked Ruby',
					deadline: 'Morning 0800',
					important: false,
					todoListId: '3',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					task: 'Enjoy life with the cats',
					deadline: 'all day',
					important: true,
					todoListId: '5',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					task: 'Siesta por la vida',
					deadline: 'manana',
					important: true,
					todoListId: '5',
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

'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'todoLists',
			[
				{
					name: "Kelley's Fun stuff",
					userId: '6',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Karla's Serious stuff",
					userId: '1',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Rein's thing",
					userId: '5',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "David's Games",
					userId: '4',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Day of Jeroen with pien and diva',
					userId: '2',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Dia de la Matias',
					userId: '3',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('todoLists', null, {})
	},
}

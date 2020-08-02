'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'todoLists',
			[
				{
					name: "Karla's Fun stuff",
					userId: '26',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Karla's Serious stuff",

					userId: '26',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Rein's thing",
					userId: '27',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "David's Games",
					userId: '28',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Day of Jeroen with pien and diva',
					userId: '29',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Dia de la Matias',
					userId: '30',
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

'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'users',
			[
				{
					name: 'Karla',
					email: 'karla@teacher.com',
					phone: 1234567,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Jeroen',
					email: 'jeroen@teacher.com',
					phone: 7654321,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Matias',
					email: 'matias@teacher.com',
					phone: 2345678,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'David',
					email: 'David@teacher.com',
					phone: 8765432,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Rein',
					email: 'rein@teacher.com',
					phone: 3456789,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('users', null, {})
	},
}

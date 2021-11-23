'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'salesProducts',
      [
        {
          sale_id: 1,
          product_id: 1,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sale_id: 1,
          product_id: 2,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sale_id: 2,
          product_id: 3,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sale_id: 2,
          product_id: 4,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sale_id: 3,
          product_id: 5,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sale_id: 3,
          product_id: 6,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('salesProducts', null, {});
  },
};

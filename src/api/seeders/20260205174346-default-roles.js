"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          nameRole: 'ADMIN',
          description: 'Usuario con control total del sistema',
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameRole: 'DOCTOR',
          description: 'Terapeuta que gestiona pacientes y facturas',
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameRole: 'SECRETARY',
          description: 'Asistente administrativa del consultorio',
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      { ignoreDuplicates: true },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};

module.exports = (sequelize, Sequelize) => {
  const Emissions = sequelize.define(
    "Emissions",
    {
      shipment_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Shipments',
          key: 'id'
        }
      },
      co2_emission: {
        type: Sequelize.DOUBLE,
      },
      type_of_calculations: {
        type: Sequelize.STRING(128),
      },
    },
    {
      schema: "co2_emission_analytics",
      tableName: "shipment_co2_emissions",
      timestamps: false,
    }
  );

  return Emissions
};

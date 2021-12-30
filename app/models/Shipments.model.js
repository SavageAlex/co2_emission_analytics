module.exports = (sequelize, Sequelize) => {
  const Shipments = sequelize.define(
    "Shipments",
    {
      shipment_id: {
        type: Sequelize.STRING(512),
      },
      weight_kg: {
        type: Sequelize.DOUBLE,
      },
      distance_km: {
        type: Sequelize.DOUBLE,
      },
      pickup_time: {
        type: Sequelize.DATE,
      },
      dropoff_time: {
        type: Sequelize.DATE,
      },
    },
    {
      schema: "co2_emission_analytics",
      tableName: "shipments",
      timestamps: false,
    }
  );

  return Shipments;
};

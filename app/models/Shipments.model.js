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
      co2_emission: {
        type: Sequelize.VIRTUAL,
        get() {
          return this.Emissions?.getDataValue("co2_emission");
        },
        set(/*value*/) {
          throw new Error("Do not try to set the `co2_emission` value!");
        },
      },
    },
    {
      schema: "co2_emission_analytics",
      tableName: "shipments",
      timestamps: false,
    }
  );
  const Emissions = sequelize.define(
    "Emissions",
    {
      shipment_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
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

  Shipments.hasOne(Emissions, {
    foreignKey: {
      name: "shipment_id",
    },
  });
  Emissions.belongsTo(Shipments);

  return Shipments;
};

const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.shipments = require("./Shipments.model.js")(sequelize, Sequelize);
db.emissions = require("./Emissions.model.js")(sequelize, Sequelize);

db.shipments.hasOne(db.emissions, {
  foreignKey: {
     name: "shipment_id",
     type: Sequelize.INTEGER,
    },
  targetKey: "id",
});
db.emissions.belongsTo(db.shipments, { foreignKey: "shipment_id"});

module.exports = db;

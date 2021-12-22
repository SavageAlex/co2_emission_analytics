module.exports = {
    HOST: "localhost",
    USER: "test",
    PASSWORD: "TestUser",
    DB: "homeworks",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
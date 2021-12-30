module.exports = app => {
    const co2EmissionAnalytics = require("../controllers/co2EmissionAnalytics.controller.js")

    var router = require("express").Router()

    router.get("/shipments/", co2EmissionAnalytics.findAllByDate)
    // router.get("/emission/", co2EmissionAnalytics.findByShipmentId)

    app.use('/api/analytics', router)
}
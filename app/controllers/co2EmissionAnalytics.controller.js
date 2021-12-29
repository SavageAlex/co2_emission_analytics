const db = require("../models")

const Shipments = db.shipments
const Emissions = db.emissions

const Op = db.Sequelize.Op

// {"dates": {"startDate": "2021-06-23T10:00:00.000Z", "endDate": "2021-06-23T22:00:00.000Z"}}
exports.findAllByDate = (req, res) => {
    const startDate = req.query.startDate // req.body.dates
    const endDate = req.query.endDate
    console.log(`startDate is: ${startDate}, endDate is: ${endDate}`)
    // const {startDate, endDate} = dates
    Shipments.findAll({
        where: {
            dropoff_time: {[Op.between]: [startDate, endDate]}
        },
    })
    .then(data => {
            res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while fetching the data"
        })
    })
}


// {"shipmentId": "15378"}
exports.findByShipmentId = (req, res) => {
    const shipmentId = req.body.shipmentId
    Emissions.findOne({
        where: {
            shipment_id: shipmentId
        }
    })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while fetching the data"
        })
    })
}

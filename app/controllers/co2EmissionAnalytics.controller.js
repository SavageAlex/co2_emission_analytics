const db = require("../models")

const Shipments = db.shipments
const Emissions = db.emissions

const Op = db.Sequelize.Op

exports.findAllByDate = (req, res) => {
    const startDate = req.query.startDate
    const endDate = req.query.endDate
    Shipments.findAll({
        where: {
            dropoff_time: {[Op.between]: [startDate, endDate]}
        },
        order: [
            ["dropoff_time", "ASC"]
        ],
        include: Emissions
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
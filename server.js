const express = require('express')
const morgan = require('morgan')
const mongoDB = require('./utils/mongoDB')

const server = express()
server.use(morgan('dev'))

const database = new mongoDB(process.env.MONGO_URI, "auth", "users")

server.get('/', async (req, res) => {
    const result = await database.get_user_by_name("paolo")
    if (result.length == 0) {
        res.status(404).send({
            ok: false,
            data: {
                err: "user not find"
            }
        })
    }

    res.status(200).send({
        ok: true,
        data: {
            result
        }
    })

})

server.get('/users', async (req, res) => {
    const result = await database.get_all()
    res.status(200).send({
        ok: true,
        data: {
            result
        }
    })
})

module.exports = server
const MongoClient = require('mongodb').MongoClient

class mongoDB {
    constructor(url, db_name, db_collection ) {
        this.url = url
        this.db_name = db_name
        this.db_collection = db_collection
    }

    async connect() {
        if (this.instance) {
            return this.instance
        }

        const client = await MongoClient.connect(this.url, { useNewUrlParser: true, useUnifiedTopology: true })
        this.instance = client.db(this.db_name).collection(this.db_collection)

        return this.instance
    }

    async get_all() {
        const database = await this.connect()
        const users = await database.find().toArray()
        return users
    }

    async get_user_by_name(username) {
        const database = await this.connect()
        const user = await database.findOne({ username : username })
        return user
    }

    async add_user(user){
        const database = await this.connect()
        database.insertOne(user)
    }
}

module.exports = mongoDB
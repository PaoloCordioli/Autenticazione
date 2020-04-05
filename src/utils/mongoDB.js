const MongoClient = require('mongodb').MongoClient

class mongoDB {
    
    constructor(url, db_name, db_collection ) {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        this.instance = client.db(db_name).collection(db_collection)
    }

    async get_all() {
        const users = await this.instance.find().toArray()
        return users
    }

    async get_user_by_name(username) {
        const user = await this.instance.findOne({ username : username })
        return user
    }

    async add_user(user){
        this.instance.insertOne(user)
    }
}



const database = new mongoDB(process.env.MONGO_URI, "auth", "users")
Object.freeze(database)

module.exports = database
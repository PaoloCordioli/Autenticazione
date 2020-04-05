const MongoClient = require('mongodb').MongoClient

class mongoDB {

    constructor(url, db_name, db_collection) {
        this.init(url, db_name, db_collection)
    }

    async init (url, db_name, db_collection) {
        if(!mongoDB.instance){
            const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
            mongoDB.instance = client.db(db_name).collection(db_collection)
        }
        return mongoDB.instance
    }

    async get_all() {
        const users = await mongoDB.instance.find().toArray()
        return users
    }

    async get_user_by_name(username) {
        const user = await mongoDB.instance.findOne({ username : username })
        return user
    }

    async add_user(user){
        mongoDB.instance.insertOne(user)
    }
}



const database = new mongoDB(process.env.MONGO_URI, "auth", "users")
Object.freeze(database)

module.exports = database
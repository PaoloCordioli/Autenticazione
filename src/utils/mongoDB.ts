import { MongoClient, CollectionMapFunction, Collection } from 'mongodb'

export class MongoDB{

    private static instance : MongoDB
    private collection : Collection
    
    private constructor(){
    }

    private async init(url :string, db_name : string, db_collection : string) {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        this.collection = client.db(db_name).collection(db_collection)
    }

    public static async get_instance(){
        if(!MongoDB.instance){
            MongoDB.instance = new MongoDB()
            await MongoDB.instance.init(process.env.MONGO_URI, "auth", "users")
        }
        return MongoDB.instance
    }

    public async get() : Promise<any>{
        const users = await this.collection.find().toArray()
        return users
    }

    public async get_user_by_name(username : string) : Promise<any>{
        const users = await this.collection.findOne({username : username})
        return users
    }

    public add_user(user : object) : void {
        this.collection.insertOne(user)
    }
}

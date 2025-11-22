import mongoose from "mongoose";


export const Connection = async (USERNAME, PASSWORD) => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-wuzqvud-shard-00-00.mc1tfef.mongodb.net:27017,ac-wuzqvud-shard-00-01.mc1tfef.mongodb.net:27017,ac-wuzqvud-shard-00-02.mc1tfef.mongodb.net:27017/?ssl=true&replicaSet=atlas-s7kxy8-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL,)
        console.log('database connected successfully')
    } catch (error) {
        console.log('error while connecting to database')
    }
}


export default Connection;
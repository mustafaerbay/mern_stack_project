import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()


const connectDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useCreateIndex: true,
            useUnifiedTopology: true,
            useNewUrlParser:true
        })

        console.log(`Mongo db connection ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error message: ${error.message}`.red.underline.bold)
        process.exit(1)
    }

}

export default connectDB

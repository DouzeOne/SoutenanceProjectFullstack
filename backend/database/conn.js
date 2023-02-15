import mongoose from "mongoose";

export default async function connect(){
    await mongoose.connect(process.env.ATLAS_URI)
    console.log("Database Connected")
}

/**mongodb+srv://admin:barke123@quiz.gmeufvn.mongodb.net/?retryWrites=true&w=majority */
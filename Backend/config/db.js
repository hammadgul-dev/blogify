import mongoose from "mongoose"

let isConnected = false

async function connectDB() {
  if (isConnected) return

  try {
    const db = await mongoose.connect(process.env.MONGO_URI)
    isConnected = db.connections[0].readyState === 1
    console.log("Database Connected Successfully")
  } catch (e) {
    console.log("Database Connection Failed", e)
  }
}

export default connectDB
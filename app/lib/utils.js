import mongoose from "mongoose";

const connection = {}

export const connectToDB = async () => {
    try {
        if (connection.isConnected) return;
        const db = await mongoose.connect(
            "mongodb+srv://sadriddinravshanov19:HudSo0TUHalELGtC@cluster0.vl6htdn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
                dbName: "users"
            });
        connection.isConnected = db.connections[0].readyState;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}
import mongoose from 'mongoose';

var isconnected;

async function dbConnect() {
    if (isconnected) {
        return;
    }

    const db = await mongoose.connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    isconnected = db.connections[0].readyState;
}

export default dbConnect;
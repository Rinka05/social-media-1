const mongoose = require("mongoose");

module.exports = async () => {
    const mongoUri =
        "mongodb+srv://rinka:<Rinka@2908>@socialmediadb.xog3v.mongodb.net/?retryWrites=true&w=majority&appName=socialmediadb";

    try {
        const connect = await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

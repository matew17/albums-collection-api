const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("DB Online");
    } catch (error) {
        console.log(error);

        throw new Error("Couldn't initialize DB");
    }
};

module.exports = { dbConnection };

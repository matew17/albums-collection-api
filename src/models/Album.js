const { Schema, model } = require("mongoose");

const AlbumSchema = Schema({
    artist: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
    },
    rating: {
        type: Number,
    },
    liked: {
        type: Boolean,
    },
});

module.exports = model("Album", AlbumSchema);

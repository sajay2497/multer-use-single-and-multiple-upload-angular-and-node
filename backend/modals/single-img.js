const mongoose = require('mongoose');

const SingleImageSchema = new mongoose.Schema({
    image: {
        type: String
    },
    proid: {
        type: String
    }
});

module.exports = mongoose.model("SingleImage", SingleImageSchema)
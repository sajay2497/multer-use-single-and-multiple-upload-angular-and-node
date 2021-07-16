const mongoose = require('mongoose');

const MultipleImageSchema = new mongoose.Schema({
    image: {
        type: String
    },
    proid: {
        type: String
    }
});

module.exports = mongoose.model("MultipleImage", MultipleImageSchema)
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let EastronSchema = new Schema({
    regNo: Number,
    description: String,
    value: Number,
    flag:  {
        type: Number,
        default: null
    },
},
    { timestamps: true }
);

module.exports = mongoose.model("eastrons", EastronSchema);
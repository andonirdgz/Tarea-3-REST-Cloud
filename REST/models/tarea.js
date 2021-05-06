const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    points: {
        type: Number,
        required: true
    },

    course: {
        type: String,
        required: true
    },

    dueDate: {
        type: Date,
        required: true
    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }

});

module.exports = mongoose.model("Tarea", tareaSchema);
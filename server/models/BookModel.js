const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    cover_id: {
        type: Number,
        required: true
    },
    edition_count: {
        type: Number,
        required: true
    },
    first_publish_year: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    subject_facet: {
        type: String,
        required: true
    },
    ratings_average: {
        type: Number,
        required: true
    },
    
})
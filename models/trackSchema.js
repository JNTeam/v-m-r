const {
    Schema,
    model,
    Types
} = require('mongoose')
const schema = new Schema({
    trackName: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    mimetype: {
        type: String,
        required: true
    },
    uploadOn: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number
    }
})
module.exports = model('Track', schema)
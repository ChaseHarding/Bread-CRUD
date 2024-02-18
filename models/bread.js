const mongoose = require('mongoose')
const { Schema } = mongoose
  
const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'http://placekitten.com/350/350' },
    baker: {
        type: String,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    }
})


const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread

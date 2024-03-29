const mongoose = require('mongoose')
const { Schema } = mongoose
  
const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'http://placekitten.com/350/350' },
    baker: {
        type: Schema.Types.ObjectId,
        ref: 'Baker'
    }
})

breadSchema.methods.getBakedBy = function() {
    return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
}

const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread

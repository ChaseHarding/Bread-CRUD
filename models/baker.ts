// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose
const Bread = require('./bread.js')

// schema
const bakerSchema = new Schema({
    name: {type: String, required: true,
     enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    },
    startDate: {type: Date, required: true},
    bio: String

},{ toJSON: { virtuals: true }})

// Virtuals
bakerSchema.virtual ('breads', {
    ref: 'Bread',
    localField: "_id",
    foreignField: 'baker'
})

// HOOKS
bakerSchema.post('findOneAndDelete', function() {
    console.log(this);
    const bakerId = this._conditions._id;
    Bread.deleteMany({ baker: bakerId}).then((deleteStatus: any) => {
        console.log(deleteStatus);
    })
})

// model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker

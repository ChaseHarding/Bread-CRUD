import express, { Request, Response } from 'express';
import Baker from '../models/baker';

const baker = express.Router();

// REMEMBER THIS MOMENT CHASE
// baker.get('/data/seed', (req, res) => {
//     Baker.insertMany(bakerSeedData)
//     .then(res.redirect('/breads'))
// })

baker.get('/', (req: Request, res: Response) => {
    Baker.find()
    .populate('breads')
    .then((foundBakers: any) => {
        res.send(foundBakers)
    })
})

baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
    .populate('breads')
    .then((foundBaker: any) => {
        res.render('bakerShow', {
            baker: foundBaker
        })
    })
})

baker.delete('/:id', (req, res) => {
    Baker.findByIdAndDelete(req.params.id).then(() => {
    res.status(303).redirect('/breads')
    })
})

// EXPORT
module.exports = baker
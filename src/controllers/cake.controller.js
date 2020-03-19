//implement your methods here by acessing node's req, res object
const Cake = require('../models/cake')


const test = (req, res) => {
    return res.send(`<h1>Hey there! I'm cakes controller!!</h1>`)
}

//get all cakes without pagination
const getAllCakes = (req, res) => {
    Cake.find()
        .then(cakes => res.status(200).json(cakes))
        .catch(err => res.status(500).json('Error getting cakes :' + err))
}

//get cake by Id
const cakeById = (req, res) => {

    Cake.findById(req.params.id)
        .then(cake => res.status(200).json(cake))
        .catch(err => res.status(500).json('Error: ' + err))
}

//save the cake data to the db
const addCake = (req, res) => {

    //parse the request into the matching types
    const title = req.body.title;
    const description = req.body.description;
    const url = req.body.url;
    const price = Number(req.body.price);



    const cakeData = new Cake({
        title,
        price,
        url,
        description,
    })


    cakeData.save()
        .then(() => res.status(201).json('Cake Added Successfully!'))
        .catch(err => res.status(400).json('An Error occured:' + err))
}

//delete the cake by id
const removeCake = (req, res) => {
    Cake.findByIdAndRemove(req.params.id, { useFindAndModify: false })
        .then(mongodbResponse => res.status(202).json('cake deleted! :' + mongodbResponse))
        .catch(err => res.status(500).json('Error :' + err))
}

//update a cake by id
const editCakeDetails = (req, res) => {
    const id = req.params.id;

    Cake.findByIdAndUpdate(id, { $set: req.body }, { useFindAndModify: false })
        .then(response => res.status(204).json('Cake updated! ' + response))
        .catch(err => res.status(400).json('Error updating cake :' + err))

}

module.exports = { test, addCake, cakeById, getAllCakes, removeCake, editCakeDetails }
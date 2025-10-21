const express = require ('express')
const router = express.Router()

const{
    getPeople, createPerson, createPersonPostman, updatePerson, deletePerson
} = require('./people')
const { create, update } = require('lodash')

// router.get('/',getPeople)
// router.post('/', createPerson)
// router.post('/postman',createPersonPostman)
// router.post('/:id',updatePerson)
// router.post('/:id',deletePerson)

//Another method:
router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router
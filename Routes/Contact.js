const express = require('express')
const {addContact,getContacts, deleteContact, updateContact, getOneContact} = require('../Controllers/Contact')
const contactRouter = express.Router()

contactRouter.post('/addContact',addContact)

contactRouter.get('/getContacts',getContacts)

contactRouter.delete('/deleteContact/:id',deleteContact)

contactRouter.put('/updateContact/:id',updateContact)

contactRouter.get('/getOneContact/:id',getOneContact)



module.exports = contactRouter
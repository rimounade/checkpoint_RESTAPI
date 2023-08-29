const Contact = require("../Models/Contact")
//Add Contact
exports.addContact=async(req,res)=>{
    try {

        const found = await Contact.findOne({email : req.body.email})
        console.log(found)
        if(found){
            return res.status(400).send('Contact already exists')
        }
        const newContact = new Contact(req.body)

        await newContact.save()

        res.status(200).send({Msg:'Contact added',newContact})
    } catch (error) {
        res.status(500).send('Could not add contact')
    }
}
//get contact
exports.getContacts=async(req,res)=>{
    try {
        const contacts = await Contact.find()

        res.status(200).send({Msg :'Contacts List',contacts})
    } catch (error) {
        res.status(500).send('Could not get contacts')
    
    }
}
// delete contact
exports.deleteContact=async(req,res)=>{
    try {
        const {id} = req.params

        await Contact.findByIdAndDelete(id)

        res.status(200).send({Msg : 'Contact deleted'})
    } catch (error) {
        res.status(500).send('Could not delete contact')
    }
}
//update contact
exports.updateContact=async(req,res)=>{
    try {
        const {id} = req.params
        await Contact.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({Msg : 'Contact updated'})
    } catch (error) {
        res.status(500).send('Could not update contact')
    }
}
//get one contact
exports.getOneContact = async(req,res)=>{
    try {
        const {id} = req.params
        const contactone = await Contact.findById(id)
        res.status(200).send({msg:"contact", contactone})
    } catch (error) {
        res.status(500).send('Could not get one contact')
    }
}

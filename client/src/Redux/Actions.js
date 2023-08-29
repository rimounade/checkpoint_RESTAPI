import axios from "axios"
import { GETCONTACTS, GETONECONTACT } from "./TypeActions"
export const getContacts = ()=>async(dispatch)=>{
    try {
        const res=await axios.get('/api/contact/getContacts')
        dispatch(
            {
                type : GETCONTACTS,
                payload : res.data.contacts
            }
        )
    } catch (error) {
        console.log(error)
    }

}
export const addContact =(newUser,navigate)=>async(dispatch)=>{
    try {
        await axios.post('/api/contact/addContact',newUser)
        dispatch(getContacts())
        navigate('/ListContact')
    } catch (error) {
        console.log(error)
    }
}
export const getOneContact = (id)=>async(dispatch)=>{
    try {
       const res= await axios.get(`/api/contact/getOneContact/${id}`)
       dispatch(
        {
            type : GETONECONTACT,
            payload : res.data.contactone
        }
       )
    } catch (error) {
        console.log(error)
    }
}
export const updateContact =(upUser,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/contact/updateContact/${id}`,upUser)
        dispatch(getContacts())
        navigate('/ListContact')
    } catch (error) {
        console.log(error)
    }
}
export const deleteContact=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/contact/deleteContact/${id}`)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}
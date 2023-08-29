import { useEffect, useState } from "react"
import {Form,Button} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getOneContact, updateContact } from "../Redux/Actions"

const EditContact=()=>{
    const {id}=useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOneContact(id))
    },[])
    const oneContact = useSelector(state=>state.oneContact)
    const [name,setName]=useState(oneContact.name)
    const [age,setAge]=useState(oneContact.age)
    const [email,setEmail]=useState(oneContact.email)
    const navigate=useNavigate()
    useEffect(()=>{
        setName(oneContact.name)
        setAge(oneContact.age)
        setEmail(oneContact.email)
    },[oneContact])
    const handleUpdate=(a)=>{
        a.preventDefault()
        dispatch(updateContact({name,age,email},id,navigate))
    }
    return(
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control value={age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Enter age" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
      </Form.Group>

     
      
      <Button onClick={(e)=>handleUpdate(e)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )
}
export default EditContact
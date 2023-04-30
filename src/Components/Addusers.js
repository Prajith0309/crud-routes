import React,{useState, useContext} from 'react';
import { Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import { Button } from 'react-bootstrap';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
function Addusers() {
    let navigate = useNavigate();
    let context = useContext(UserContext)

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        let data = {
          username,
          email
        }
        if(data.username === "" || data.email ===""){
            window.alert("one or more fields empty!")
            return false;
        }else{
            console.log(data);
            console.log(context);
            context.setUsers([...context.users,data])
            navigate('/list-users')
        }
        
      }
  return <>
   <div className='container'>
    <div className='position-fixed top-50 start-50 translate-middle border border-dark border-5'>
    <div className='p-3' style={{color:"red"}}>YOUR DATA WILL BE SAFE AND WILL NEVER BE USED FOR ANY BAD ACTIVITIES</div>
    <Form className='p-5'>
    <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e)=>setUsername(e.target.value)}
        />
    </InputGroup>

    <InputGroup className="mb-3">
        <Form.Control
          placeholder="Email"
          aria-label="Email"
          aria-describedby="basic-addon2"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
    </InputGroup>
    <Button variant="success" type="submit" onClick={handleSubmit}>
        Submit
    </Button>
    </Form>
    </div>
    </div>
  </>
}

export default Addusers
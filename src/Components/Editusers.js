import React,{useState, useContext} from 'react';
import { Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import InputGroup from 'react-bootstrap/InputGroup'
import { UserContext } from '../App';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams, } from 'react-router-dom';

function Editusers() {
    let navigate = useNavigate();
    let context = useContext(UserContext)
    let params = useParams();

    const [username,setUsername] = useState(context.users[params.id].username);
    const [email,setEmail] = useState(context.users[params.id].email);
    const handleSubmit = (e)=>{
        e.preventDefault();
        let data = {
          username,
          email
        }
        if(data.username === "" || data.email ===""){
            window.alert("one or more fields empty!")
            
        }else{
               context.users.splice(params.id,1,data)
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
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
    </InputGroup>

    <InputGroup className="mb-3">
        <Form.Control
          placeholder="Email"
          aria-label="Email"
          aria-describedby="basic-addon2"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
    </InputGroup>
    <Button variant="success" type="submit" onClick={handleSubmit}>
        update
    </Button>
    </Form>
    </div>
    </div>
  </>
}

export default Editusers;
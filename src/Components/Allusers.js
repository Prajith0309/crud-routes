import React from 'react'
import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { UserContext } from '../App';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
function Allusers() {
    let navigate = useNavigate();
    let context = useContext(UserContext);

    const handleListClick =(e)=>{
        e.preventDefault();
        navigate('*')
    };
    const handleAddClick =(e)=>{
        e.preventDefault();
        navigate('/add-users')
    };
    const handleDelete = (i)=>{ 
        let newArray = [...context.users]
        newArray.splice(i,1);
        context.setUsers(newArray)
    }
  return <>
  <div className='container'>
   <div className='mt-5'></div>
   <div className='row'>
   <div className='fs-1 mb-2 col-10'>USER DETAILS:</div>
   <div className='col-2'>
   <Nav.Link className='fs-3 border border-dark text-center border-4' style={{ color: 'black',borderRadius: '10px' }} onClick={handleListClick}>Home</Nav.Link>
   &nbsp;
   &nbsp;
   <Nav.Link className='fs-3 border border-dark text-center border-4' style={{ color: 'black',borderRadius: '10px' }} onClick={handleAddClick}>ADD</Nav.Link>
   </div>
   </div>
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>User Name</th>
          <th>Email Address</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
            context.users.map((e,i)=>{
                return<>
                <div className='mt-2'></div>
                <tr key={i}></tr>
                <td>{i+1}</td>
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td><Button className='bg-warning' onClick={()=>navigate('/edit-users/'+i)}>Edit</Button></td>
                <td><Button className='bg-danger' onClick={()=>handleDelete(i)}>Delete</Button></td>
                </>
            })
        }
      </tbody>
    </Table>
    </div>
  </>
}

export default Allusers
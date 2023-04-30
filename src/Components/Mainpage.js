import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
function Mainpage() {
    let navigate = useNavigate();
    const handleListClick =(e)=>{
      e.preventDefault();
      navigate('/list-users')
    };
    const handleAddClick =(e)=>{
        e.preventDefault();
        navigate('/add-users')
    };
    const handleEditClick =(e)=>{
        e.preventDefault();
        navigate('/list-users')
    };
    const handleDeleteClick =(e)=>{
        e.preventDefault();
        navigate('/list-users')
    }
  return<>
  <div className='pt-5'></div>
   <div className='container border border-success border-5'>
    
    <div className=' mt-2 bg-success text-center p-5'>
     <h1>User Data Manager</h1>
     </div>
     <div className='mb-3'></div>
     
     <div className='row mb-5 py-4'>
        <div className='col-6 text-center'>
            <div>
                
                <Nav.Link className='fs-3' style={{ color: 'black' }} onClick={handleListClick}>List-Users</Nav.Link>
                <div className='fs-4'>List all users using this link!</div>
            </div>
        </div>
        <div className='col-6 text-center'>
            <div>
                <Nav.Link className='fs-3' style={{ color: 'green' }} onClick={handleAddClick}>Add-Users</Nav.Link>
                <div className='fs-4'>Add users using this link!</div>
            </div>
        </div>
     </div>
     <div className='row mt-5 py-4'>
        <div className='col-6 text-center'>
            <div>
                <Nav.Link className='fs-3' style={{ color: 'black' }} onClick={handleEditClick}>Edit-Users</Nav.Link>
                <div className='fs-4'>Edit users using this link!</div>
            </div>
        </div>
        <div className='col-6 text-center'>
            <div>
                <Nav.Link className='fs-3' style={{ color: 'red' }} onClick={handleDeleteClick}>Delete-Users</Nav.Link>
                <div className='fs-4'>Delete users using this link!</div>
            </div>
        </div>
     </div>
    </div>
  </>
}

export default Mainpage
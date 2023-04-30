import Mainpage from './Components/Mainpage';
import React,{useState} from 'react';
import Addusers from './Components/Addusers';
import Allusers from './Components/Allusers';
import Editusers from './Components/Editusers';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
export const UserContext = React.createContext();
function App() {

  const [users,setUsers] = useState([]);
  return<>
  <Router>
    <UserContext.Provider value={{users,setUsers}}>
      <Routes>
         <Route path='*' element={<Mainpage />}/>
         <Route path='/list-users' element={<Allusers />}/>
         <Route path='/add-users' element={<Addusers />}/>
         <Route path='/edit-users/:id' element={<Editusers />}/>
         {/* <Route path='/all-students' element={<Allstudents />}/> */}
      </Routes>
    </UserContext.Provider>
  </Router>
  </>
}

export default App;

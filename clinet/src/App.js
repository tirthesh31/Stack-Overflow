import { BrowserRouter as Router} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllQuestions } from './actions/question';
import './App.css'; 
import React from 'react';
import Navbar from './component/navbar/Navbar'
import Allroutes from './Allroutes';
import { fetchAllUsers } from './actions/users';
function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  },[dispatch])
  
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Allroutes/>
      </Router>
    </div>
  );
}

export default App;

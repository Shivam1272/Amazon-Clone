import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './Home'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/checkout'element={<Home />} />
          <Route path='/login'/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

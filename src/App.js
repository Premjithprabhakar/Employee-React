import './App.css';
import Home from './components/Home'
import Add from './components/Add'
import Edit from './components/Edit'
import Nav from './components/Nav'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/edit' element={<Edit/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import HomePage from './component/HomePage';
import Navbar from './component/Navbar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
<<<<<<< HEAD
import Destination from './component/Destination.jsx';
=======
import Destination from './component/Destination';
>>>>>>> dc79574cc8705daf830ffa32c12e7cdcf6c37790
import Technology from './component/Technology';
import Crew from './component/Crew';
function App() {
  return (
    <> 
    <Router>
       
       
       <Navbar/>
       <Routes>
         <Route exact path='/' element={<HomePage/>}/>
<<<<<<< HEAD
         <Route exact path='/destination' element={<Destination/>}/>
=======
         <Route exact path='/destination' element={< Destination/>}/>
>>>>>>> dc79574cc8705daf830ffa32c12e7cdcf6c37790
         <Route exact path='/technology' element={ <Technology/>}/>
         <Route exact path='/crew' element={<Crew/>}/>
       </Routes>
      </Router> 
 
<<<<<<< HEAD
  
=======
     
>>>>>>> dc79574cc8705daf830ffa32c12e7cdcf6c37790
    </>
  );
}

export default App;

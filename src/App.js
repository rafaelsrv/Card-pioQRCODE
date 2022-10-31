import Navbar from './components/Navbar/Navbar';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Cervejas from './components/pages/cervejas';
import Bebidas from './components/pages/bebidas';
import Espetos from './components/pages/espetos';
import Variados from './components/pages/variados';
import FotoBoteco from './components/pages/home/images/fotoboteco.jpeg'

function App() {
  return (  
    <div>
      
    <Router>
      <div className="centralizar">
      <img src={FotoBoteco} alt="FotoLogo"/>
      </div>
        
    <Navbar/>
    <div className="divCompleta">
      <div className="lateralEsquerda"></div>
      <div className="Meio">
      <Routes>
        <Route exact path = '/Bebidas' element={<Bebidas/>}></Route>
        <Route exact path = '/Cervejas' element={<Cervejas/>}></Route>
        <Route exact path = '/Espetos' element={<Espetos/>}></Route>
        <Route exact path = '/Variados' element={<Variados/>}></Route>
      </Routes>
      </div>
      <div className="lateralDireita"></div>
    </div>
      
    </Router>
    </div>
    
  );
}

export default App;

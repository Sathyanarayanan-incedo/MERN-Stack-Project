import './App.css';
import Search from './Components/Search';
import './Components/style.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Kheer from './Components/Kheer';
import Briyani from './Components/Briyani';
import Chappathi from './Components/Chappathi';
import Cholebature from './Components/CholeBature';
import Lassi from './Components/Lassi';
import Maggi from './Components/Maggi';
import Poha from './Components/Poha';
import Panipuri from './Components/Panipuri';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<Search/>}/>
         <Route path='/Kheer' element={<Kheer/>}/>
         <Route path='/briyani' element={<Briyani/>}/>
         <Route path='/chappathi' element={<Chappathi/>}/>
         <Route path='/cholebature' element={<Cholebature/>}/>
         <Route path='/lassi' element={<Lassi/>}/>
         <Route path='/maggi' element={<Maggi/>}/>
         <Route path='/poha' element={<Poha/>}/>
         <Route path='/panipuri' element={<Panipuri/>}/>
      </Routes>
      </BrowserRouter>
     </div>
  );
}

export default App;

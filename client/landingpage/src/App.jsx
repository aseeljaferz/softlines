
// import Cards from './component/Cards'
// import desktop from './images/desktop.png'
import Product from './component/Product';
import Home from './component/Home';
import About from './component/About';
import {BrowserRouter ,Router, Routes, Route, Link} from "react-router-dom";




function App() {
  return (
    
      <div>

      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/products' element={<Product/>}/>
          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;

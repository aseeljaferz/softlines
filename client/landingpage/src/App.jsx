
// import Cards from './component/Cards'
// import desktop from './images/desktop.png'
import Product from './component/Product';
import Home from './component/Home';
import About from './component/About';
import ContactForm from './component/ContactForm';
import {BrowserRouter ,Router, Routes, Route, Link} from "react-router-dom";
import ChatBot from './component/Chat-Bot/Chat_bot';




function App() {
  return (
    
      <div>

      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<ContactForm/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/products' element={<Product/>}/>
            <Route path='/chatbot' element={<ChatBot/>}/>
          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;

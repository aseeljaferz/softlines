
// import Cards from './component/Cards'
// import desktop from './images/desktop.png'
import Product from './component/Product';
import Home from './component/Home';
import About from './component/About';
import ContactForm from './component/ContactForm';
import Login from './component/Login';
import Admin from './component/Admin';
import AddProduct from './component/AddProduct';
import Sidebar from './component/Sidebar';
import {BrowserRouter ,Router, Routes, Route, Link} from "react-router-dom";
import ChatBot from './component/Chat-Bot/Chat_bot';
import AdminList from './component/AdminList';




function App() {
  return (
    
      <div>

      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<ContactForm/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>            
            <Route path='/admin' element={<Admin/>}/> 
            <Route path='/addproduct' element={<AddProduct/>}/> 
            <Route path='/list' element={<AdminList/>}/> 
            <Route path='/sidebar' element={<Sidebar/>}/> 
            <Route path='/products' element={<Product/>}/>
            <Route path='/chatbot' element={<ChatBot/>}/>
          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;

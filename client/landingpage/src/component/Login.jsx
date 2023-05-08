import React,{useState} from "react";
import './login.css'


const Login = () => {
  
  const[uname, setUname] = useState('');
  const[password, setPassword] = useState('');
  
  function SubmitButton(){
    if (uname==="admin" && password==="admin"){
      alert("Logging in as Admin")

      return <button type="button">Login</button>
    } else {
      alert("Invalid Credentials!")
      return <button type="button" disabled>Login</button>
    };
  };

  return (
    
    <div id="loginform">
    <FormHeader title="Login" />
    <div class="row">
    <input value={uname} onChange={ e => setUname(e.target.value)} placeholder="Enter your username"/>
    <br />
    <input value={password} type="password" onChange={ e => setPassword(e.target.value)} placeholder="Enter your password" />
    <br />
    <br />
    <button type="button" onClick={SubmitButton}>Login</button>
    {/* <SubmitButton/> */}
    <br />
    </div>
    </div>
    
  );
};

const FormHeader = props => (
  <h2 id="headerTitle">{props.title}</h2>
);

const Form = props => (
  <div>
   
    <div class="row">
    <label>Username</label>
    <input type="text" placeholder="Enter your username" required/>
    <br />
    <label>Password</label>
    <input type="password" placeholder="Enter your password" required/>

    <div id="button">
      <input type="submit" value="Login" />
    </div>

    </div>  
    
  </div>
);


export default Login;

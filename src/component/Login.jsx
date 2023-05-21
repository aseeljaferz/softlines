import React,{useState} from "react";
import './login.css'
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';

const Login = () => {
  
  const[uname, setUname] = useState('');
  const[password, setPassword] = useState('');
  const navigate = useNavigate();
  
  function SubmitButton(){
    if (uname==="admin" && password==="admin"){
      alert("Logging in as Admin")
      navigate('/admin')
      return <button type="button">Login</button>
    } else {
      alert("Invalid Credentials!")
      return <button type="button" disabled>Login</button>
    };

    
  };

 

  return (
    
    
    // <FormHeader title="Login" />
    
    
    <div className="login_body">
      <MDBContainer fluid>

        <MDBRow className='column d-flex justify-content-center align-items-center h-100'>
          <MDBCol  col='12'>

            <MDBCard className=' bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
              <MDBCardBody className=' p-5 d-flex flex-column align-items-center mx-auto w-100'>

                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="login_text text-white-50 mb-5">Please enter your login and password!</p>

                  <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' value={uname}  onChange={ e => setUname(e.target.value)}  size="lg" required/>
                  
                  <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' value={password} type="password" onChange={ e => setPassword(e.target.value)} size="lg" required/>

                  {/* <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p> */}
                  {/* <MDBBtn outline className='button_login mx-2 px-5' color='' size='lg' type="button" onClick={SubmitButton}>
                    Login
                  </MDBBtn> */}
                  <button class="btn-82" type="button" onClick={SubmitButton}>
                    <span>Login</span>
                  </button>

                  {/* <div className='d-flex flex-row mt-3 mb-5'>
                  <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                    <MDBIcon fab icon='facebook-f' size="lg"/>
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                    <MDBIcon fab icon='twitter' size="lg"/>
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                    <MDBIcon fab icon='google' size="lg"/>
                  </MDBBtn>
                </div> */}

                {/* <div>
                  <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>
                </div> */}
              </MDBCardBody>
            </MDBCard>

          </MDBCol>
        </MDBRow>

      </MDBContainer>
    </div>
    
  );
};

// const FormHeader = props => (
//   <h2 id="headerTitle">{props.title}</h2>
// );

// const Form = props => (
//   <div>
   
//     <div class="row">
//     <label>Username</label>
//     <input type="text" placeholder="Enter your username" required/>
//     <br />
//     <label>Password</label>
//     <input type="password" placeholder="Enter your password" required/>

//     <div id="button">
//       <input type="submit" value="Login" />
//     </div>

//     </div>  
    
//   </div>
// );


export default Login;

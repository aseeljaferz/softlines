import React, { useState } from 'react'
import './contactForm.css'
import emailjs from '@emailjs/browser';
import { Footer } from './Footer';

const Result = ()=>{
	return(
		<p>Your message has been sent successfully</p>
	)
}
export default function ContactForm() {
   
    const [result,showResult] = useState(false);
	const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n7asksi', 'template_yma5f7t', e.target, 'ULCueRPsfA-d9NvKa')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
	  e.target.reset();
	  showResult(true);
  };


  return (
    <>
    <div className='contactform'>
    <form onSubmit={sendEmail} >
      <div class="container">
	<div class="row">
			<h1 id='contactUs'>Contact Us</h1>
	</div>
	<div class="row">
			<h4 className='h4' style = {{textAlign : 'center'}}>Feel Free to Contact Us!</h4>
	</div>
	<div class="row input-container">
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="text" className='input' name ="fullName"  required />
					<label>Name</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input wide">
					<input type="email" className='input' name='email' required />
					<label>Email</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input wide" style={{float : 'right'}}>
					<input type="tel" className='input' name='phone' required />
					<label>Phone Number</label> 
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<textarea name='message' className='textarea' required></textarea>
					<label>Message</label>
				</div>
			</div>
			<div class="col-xs-12">
			<button type="submit" class="btn-lrg submit-btn">Send Message</button>
				
			</div>
			<div className='row'>
			{result ? <Result/> : null}
			</div>	
	</div>
</div>
</form>
    </div>
<Footer/>
</>
  )
}

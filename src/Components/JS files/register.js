import React from 'react'
import '../CSS files/register.css';
const Register = () => {
  return (
    <div>
    <form>
       <div className='form-container'>
         <div className='form-title' >
           <h2>Register</h2>
         </div>
         <div className='mb-2'>
          <label htmlFor='usr' className='form-label'>Name</label>
          <input type='text' className='form-control' id='inputName' placeholder='Enter your name'></input>
         </div>
         <div className="mb-2">
           <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
           <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter Email' aria-describedby="emailHelp" required/>
         </div>
         <div classname="mb-2">
           <label htmlFor="inputPassword5" className="form-label">Password</label>
           <input type="password" id="inputPassword5" className="form-control" placeholder='Enter password' aria-describedby="passwordHelpBlock" required />
           <div id="passwordHelpBlock" className="form-text">
               Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
           </div>
         </div>
         <div className="mb-3 form-check">
           <input type="checkbox" className="form-check-input" id="exampleCheck1" />
           <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
         </div>
         <button type="submit" className="btn btn-primary">Submit</button>
       </div>
     </form>
   </div>

  )
}

export default Register

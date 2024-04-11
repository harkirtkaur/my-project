import React from 'react'
import '../CSS files/login.css';
// import sea from '../Images/sea.jpg';
const Login = () => {
  return (
    <div>
     <form>
          {/* <div className='loginSideImg'>
            <img src={sea} alt='oops' width={300} height={400}></img>
          </div> */}
        <div className='form-container'>
          <div className='form-title' >
            <h2>Login</h2>
          </div>
          <div className="mb-2">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter Email' aria-describedby="emailHelp" required/>
          </div>
          <div classname="mb-2">
            <label htmlFor="inputPassword5" className="form-label">Password</label>
            <input type="password" id="inputPassword5" className="form-control" placeholder='Enter password' aria-describedby="passwordHelpBlock" required />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login

import React from 'react'
import { Link } from 'react-router-dom'
import "./Driverlogin.css"
const Driverlogin = () => {
    return (
        <div className='boxcontainer'>
            <div className="logincontainer">
                <h3>LOGIN IF ALREADY SIGNED-UP</h3>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"><h6>Email address</h6></label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label"><h6>Password</h6></label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="signupcontainer">
                <h4>PRESS SIGN-UP IF NEW-USER</h4>
                <Link to='/driversignup'><button type="submit" className="btn btn-primary">SIGN-UP</button></Link>
            </div>
        </div>

    )
}

export default Driverlogin;
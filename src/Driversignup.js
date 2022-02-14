import React from 'react'
import "./Driversignup.css"
const Driversignup = () => {
  return (
    <>
      <div className="containersignup">
        <h4>Sign up by filling this form</h4>
        <form>
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputName"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputAge" className="form-label">Age</label>
            <input type="number" className="form-control" id="exampleInputAge" />
          </div>
          <div className="mb-3">
            <label for="exampleInputTrucknumber" className="form-label">Truck Number</label>
            <input type="text" className="form-control" id="exampleInputTrucknumber" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label for="exampleInputPhno" className="form-label">Phone Number</label>
            <input type="number" className="form-control" id="exampleInputPhno" />
          </div>
          <div className="mb-3">
            <label for="exampleInputTruckcap" className="form-label">Truck Capacity</label>
            <input type="number" className="form-control" id="exampleInputTruckcap" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label for="exampleInputTransname" className="form-label">Transporter Name</label>
            <input type="text" className="form-control" id="exampleInputTransname" />
          </div>
          <div className="mb-3">
            <label for="exampleInputExpi" className="form-label">Driving Experience</label>
            <input type="number" className="form-control" id="exampleInputExpi" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label for="exampleInputRoutes" className="form-label">3 Interested Routes(FROM/TO)</label>
            <input type="text" className="form-control uni" id="exampleInputRoute1" />
            <input type="text" className="form-control uni" id="exampleInputRoute2" />
            <input type="text" className="form-control uni" id="exampleInputRoute3" />
          </div>
          <button type="submit" className="btn btn-primary">Sign-Up</button>
        </form>
      </div>
    </>
  )
}

export default Driversignup;
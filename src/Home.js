import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
const Home =() => {
    return (
        <div className='containerhome'>
            <div className="driverbox">
                <h4>Click below if you are a Driver</h4>
                <Link to='/driverlogin'><button type="submit" className="btn btn-primary">Click</button></Link>
            </div>
            <div className="dealerbox">
                <h4>Click below if you are a Dealer</h4>
                <Link to='/dealerlogin'><button type="submit" className="btn btn-primary">Click</button></Link>
            </div>
        </div>
    )
}

export default Home
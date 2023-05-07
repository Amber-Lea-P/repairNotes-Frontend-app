import "./Navbar.css"
import { Link } from 'react-router-dom'


function Navbar()  {
    return (
        <div className= "navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/" className="link"> 
                    <span className="text">Raimo's Auto Repair</span>
                    </Link>
                </div>
                <div className="links">
                <Link to="/ContactUs" className="link"> 
                <span className="text">Contact Us</span>
                    </Link>
                </div>
            </div>
        </div>
    )
    }

export default Navbar
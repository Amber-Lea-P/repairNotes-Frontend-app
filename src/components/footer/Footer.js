import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer">
      <div className="bottom">
          <div className="leftsocial">
              <Link to="/login">Employee Login</Link>
          </div>


          <div className="rightsocial">
              <div className="social">
                  <img src="/img/twitter.png" alt="" />
                  <img src="/img/facebook.png" alt="" />
                  <img src="/img/linkedin.png" alt="" />
                  <img src="/img/instagram.png" alt="" />
              </div>
          </div>
      </div>
   </div> 
  )
}

export default Footer
import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
     <footer
     className={
         isHomePage ? "homePage_footer otherPage_footer" : "otherPage_footer"
       }
     >
      <div className="container">
            <h4>LUXURY RENTALS</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, commodi doloremque provident nostrum cum reiciendis enim quod assumenda, totam eligendi natus deleniti, illo repellat quaerat accusantium ipsam est recusandae iusto!</p>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/termsandcoditions"}>Terms And Conditions</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
      </div>
      <div className="container">
        <h4>Connect with us</h4>
        <p>000 000 000 0</p>
        <p>fb@gmail.com</p>
        <p>All Rights Reserved</p>
      </div>
     </footer>

    </>
  )
}

export default Footer
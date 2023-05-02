import { Link } from 'react-router-dom';
import logo from "../../assets/logo2.png"
import "../Navbar_default/Navbar.css"

const Navbar = (props) => {

  return (
   <nav className="main-nav">
    <div className="navbar">
    <Link to="/" className='nav-item' >
     <img className='nav-logo' src={logo} alt="logo" />
   </Link>

  <Link onClick={props.handleClick}  className="nav-item nav-links company-btn" to="/companyauth">{props.login ? "SIGN UP" : "LOGIN"}</Link> 
    </div>
   </nav>
  )
}

export default Navbar

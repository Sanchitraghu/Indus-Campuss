import './loginCard.css'
import image from "../../assets/LogincardImg/companyLogo.png"
import { Link } from 'react-router-dom'
const LoginAsCompany = ({onSelect})=>{

    return(
      <Link className="card"  style={{textDecoration : 'none'}} to="/companyAuth">
        <div onClick={()=>onSelect('Company')}>
           <div className='logoContainer c1'><img src={image} alt='Company Logo' /></div> 
             <h3 style={{color : 'white', margin : 'auto',fontSize:'40px', marginBottom : '10px'}}>Company</h3>
      <p style={{margin:'auto', paddingLeft:'10px', marginTop : '0px'}}>Click here if you are a company Admin</p>

        </div>
        </Link>
    )
}

export default LoginAsCompany;
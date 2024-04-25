import './loginCard.css'
import image from "../../assets/LogincardImg/collegeLogo.png"
import { Link } from 'react-router-dom'

const LoginAsUniversityAdmin = ({onSelect})=>{

    return(
        <Link className="card"  style={{textDecoration : 'none'}} to="/companyAuth">
        <div onClick={()=>onSelect('University Admin')}>
            <div className='logoContainer u1'>
            <img   src={image} alt='student Logo'/>
            </div>
             
             <h3 style={{color : 'white', margin : 'auto',fontSize:'40px',marginBottom:'10px'}}>University</h3>
      <p style={{ textAlign:'centre', margin:'auto', paddingLeft:'10px', marginTop : '0px'}}>Click here if you are a University Admin</p>

        </div>
           </Link>
    )
}

export default LoginAsUniversityAdmin;
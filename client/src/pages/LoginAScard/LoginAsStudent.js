import './loginCard.css'
import image from "../../assets/LogincardImg/studentLogo.png"
import { Link } from 'react-router-dom';
const LoginAsStudent = ({onSelect})=>{

    return(
        <Link className="card" style={{textDecoration : 'none'}} to="/companyAuth">
        <div  onClick={()=>onSelect('student')}>
            <div className='logoContainer s1'><img src={image} alt='student Logo'/></div>
            
             <h3 style={{color : 'white', margin : 'auto 0px  10px 20px',fontSize:'40px' , textAlign : 'cetre'}}>Student</h3>
              <p style={{marginLeft:'10px', paddingLeft:'10px', marginTop : '0px'}}>Click here if you are a student</p>
     

        </div>
        </Link>
    )
}

export default LoginAsStudent;
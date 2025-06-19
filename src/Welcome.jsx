import {useNavigate} from "react-router-dom";
import "./Welcome.css"
export default function Welcome(){
    const navigate=useNavigate();
    return (<div className="Welcome">
        <h2>Welcome to PopX</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        
            <button className="btn1" onClick={()=>navigate("/Singnup")}>Create Account</button>
            
            <button className="btn2" onClick={()=>navigate("/Login")}>Already Registered? Login</button>
        
    </div>
)}
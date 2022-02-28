import SignUp from "./signup"
import  Login  from "./login";
import { Container } from 'react-bootstrap';
import Dashboard from "./dashboard";
import ForgotPassword from "./forgotPassword";
import UpdateProfile from './updateProfile'

const MyForm = (props) => {
    return(                
        <Container className="w-100 d-flex justify-content-center align-items-center myform"
            style={{minHeight: "100vh"}}
            >
        <div className="w-100" style={{maxWidth: "400px"}}>
            
            {props.name === "signup" ? <SignUp /> : 
                props.name === "login" ? <Login /> : 
                props.name === "dashboard" ? <Dashboard /> :
                props.name === "forgot-password" ? <ForgotPassword /> : 
                props.name === "update-profile" ? <UpdateProfile /> : <></>
            }
            
        </div>
        </Container>              
    )
}

export default MyForm
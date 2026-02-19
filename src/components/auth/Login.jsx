import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useAlert } from "../context/AlertContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Form, Button, Spinner } from "react-bootstrap";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";


const Login = () => {

    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const [loading, setLoading] = useState(false)

    const {showAlert} = useAlert();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        setLoading(true);
            
        try {
            const response = await fetch('http://localhost:3000/api/v1/auth/login', {
                'method': "POST",
                'headers': {
                    'content-type': 'application/json',
                    'accept': 'application/json',

                },
                'body': JSON.stringify({
                    "email": email,
                    "password": password
                }),

            })

            const data = await response.json();
            if(!response.ok) {            
                throw new Error(data.msg);
            }


            // load data
            login(data.user)
            localStorage.setItem("token", data.token)

            showAlert(`Welcom back, ${data.user.name}`, 'success') 
            const from = location.state?.from?.pathname || "/";
            navigate(from, { replace: true });

            setEmail('');
            setPassword('')
        }
        catch(error){
            console.error(error);
            showAlert(error.message, 'danger')
        } 
        finally {
            setLoading(false);
        }
    }


    return(
        <div className='login-frame'>

            <h3 className="mb-4">Sign in to your account</h3>
            <Form onSubmit={handleSubmit}>

                <EmailInput email={email} setEmail={setEmail} emailError={emailError} setEmailError={setEmailError} />
                <PasswordInput password={password} setPassword={setPassword} passwordError={passwordError} setPasswordError={setPasswordError} />
                <Button type="submit" disabled={ loading || emailError!=="" || passwordError!=="" || email==="" || password==="" }>
                    {loading? <Spinner size="sm"/> : "Sign In" }
                </Button>

            </Form>
            <div>Forgot your password?</div>
            <Link 
            // to={`/signup`}
            >

                Create an account

            </Link>
        </div>


    )
}
export default Login



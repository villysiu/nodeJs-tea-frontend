import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Form, Button, Spinner, Modal } from "react-bootstrap";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import NameInput from "./NameInput";



const Signup = () => {

    const { register, show, setShow } = useAuth();

console.log(show)
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")



    const handleSubmit = async(e) =>{
        e.preventDefault();
        const success = await register({
                    "name": name,
                    "email": email,
                    "password": password
                })
        if(success){
            setEmail('')
            setName('')
            setPassword('')
        }
    }
    
    return(
        <Form onSubmit={handleSubmit} style={{ width: '100%'}}>
            <Modal.Header closeButton>
                <Modal.Title>Sign up a new account</Modal.Title>
            </Modal.Header>

            <Modal.Body >
                <Form.Label><b>User Name</b></Form.Label>
                <NameInput name={name} setName={setName} nameError={nameError} setNameError={setNameError}/>
                <div className='my-3'></div>
                <Form.Label><b>Email</b></Form.Label>
                <EmailInput email={email} setEmail={setEmail} emailError={emailError} setEmailError={setEmailError} />
                <div className='my-3'></div>
                <Form.Label><b>Password</b></Form.Label>
                <PasswordInput password={password} setPassword={setPassword} passwordError={passwordError} setPasswordError={setPasswordError} />
         
                
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between align-items-center">
                <span>Already have an account,{' '}
                <Link onClick={()=>setShow('login')} >
                    login here
                </Link>
                </span>
                <Button type="submit" 
                            disabled={ 
                                    emailError!=="" || 
                                    passwordError!=="" || 
                                    email==="" || 
                                    password==="" || 
                                    name==="" || 
                                    nameError!==""
                                    }
                    >
                       Sign Up
                    </Button>
            </Modal.Footer>
        </Form>
    )
}
export default Signup



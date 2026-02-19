import {FloatingLabel, Form, InputGroup} from "react-bootstrap";
import {useState} from "react";
import {Eye, EyeSlash} from "react-bootstrap-icons";

const PasswordInput = ({password, setPassword, passwordError, setPasswordError}) => {

    const [showPassword, toggleShowPassword] = useState(false)

    const handleChange = (e) => {
        setPassword(e.target.value)
        if(passwordError)
            validatePassword(e.target.value)
    }
    const validatePassword = (pa) =>{
        console.log("validate password")
        const re = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}/
        if(pa === "")
            setPasswordError("Password is required")
        else if(!re.test(pa)) {
            setPasswordError("Password must be 6-20 characters long, include at least one letter and one number")
        }
        else
            setPasswordError("")

    }
    return (
        <>
        <div style={{ position: 'relative'}}>
            <FloatingLabel controlId="floatingPasswordInput" label="Password"
                className="flex-grow-1"

            >
                
                <Form.Control type={showPassword ? "text" : "password"}
                              placeholder=""
                            maxLength={20}
                              value={password}
                              onChange={handleChange}
                              onBlur={e=>validatePassword(e.target.value)}
                />
                <InputGroup.Text 
                    style={{ cursor: 'pointer', 
                        position: 'absolute', 
                        right: 0, top: 0, height: '100%', aspectRatio: "1/1",
                    display: 'flex',  alignItems: "center",
    justifyContent: "center"}}
                    onClick={()=>toggleShowPassword(!showPassword)}

                >
                    {showPassword ? <EyeSlash /> : <Eye />}
                </InputGroup.Text>
              
            </FloatingLabel>
        </div>

            {passwordError && <p className="text-danger">{passwordError}.</p>}
        </>

    )
}
export default PasswordInput
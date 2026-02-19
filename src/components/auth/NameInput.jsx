import {FloatingLabel, Form} from "react-bootstrap";
import {useState} from "react";

const NameInput = ({name, setName, nameError, setNameError}) => {
    const handleChange = e =>{
        setName(e.target.value)
        if(nameError)
            validateName(e.target.value)
    }
    const validateName = (name) =>{

        const re = /^[a-zA-Z0-9.-]{2,20}$/

        if(name === "")
            setNameError("Name is required")
        else if(!re.test(name))
            setNameError("Name must be between 2 and 20 letters and  must contain only alphanumeric characters and -.")
        else
            setNameError("")
    }
    return (
        <>
        <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
            <Form.Control type="text" 
                          placeholder="Name" 
                          value={name}
                          onChange={handleChange}
                          onBlur={e=>validateName(e.target.value)}
            />
        </FloatingLabel>
    {nameError && <p className="text-danger">{nameError}.</p>}
    </>
    )
}
export default NameInput
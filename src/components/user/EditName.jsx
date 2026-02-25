import { useState } from 'react';
import {Button, Row, Col, Form} from 'react-bootstrap';
import {useAuth} from '../context/AuthContext';
import NameInput from '../auth/NameInput'

const EditName = () =>{

    const { user, updateCredential } = useAuth();

    const [edit, showEdit] = useState(false);
    const [name, setName]= useState(user.name);
    const [nameError, setNameError] = useState('')
    
    const handleClick = () => {
        showEdit(true)
    };

    const handleSave = async (e) =>{
        e.preventDefault();
        console.log(name)
        const success = await updateCredential({'name': name});
        if(success)
            showEdit(false);
    }

    if(!edit) {
        return(
            <Row className="d-flex align-items-center py-3 border-bottom border-1">
                <Col xs={9} className='text-start'>
                    <div><b>Name</b></div>
                    <div>{name}</div>
                </Col>
                <Col xs={3} className='text-end'>
                    <Button onClick={handleClick}>Edit</Button>
                </Col>
            </Row>
        )
         
    }
    return (
        <Col xs={12} md={6}>
            <Form className="p-3 mb-3 text-start border-bottom border-1" >
                <Form.Label ><b>Name</b></Form.Label>
                <NameInput name={name} setName={setName} nameError={nameError} setNameError={setNameError}/>
                <div className='my-3'></div>
                <Button onClick={handleSave}
                        type="submit" 
                        disabled={ 
                                    name==="" || 
                                    nameError!=="" ||
                                    name === user.name
                                }
                >
                    Save
                </Button>
                <Button className='ms-3' onClick={()=>showEdit(false)}> Cancel</Button>
            </Form>
         </Col>
    )
    
}
export default EditName;
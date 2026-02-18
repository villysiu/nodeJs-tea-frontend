// import { useMenu } from "./MenuContext";
import { useState, useDispatch } from 'react'

import CustomizeSize from './CustomizeSize'
import CustomizeTemperature from './CustomizeTemperature'
import CustomizeMilk from './CustomizeMilk'
import CustomizeSugar from './CustomizeSugar'
import Quantity from './Quantity'

import {Modal, Button} from 'react-bootstrap'

const CustomizeItemModal = ({handleClose, item}) => {

    if (!item) return null;
    console.log(item)

    // const [menuitem, setMenuitem] = useState(item.menuitem)
    const [temperature, setTemperature] = useState(item.temperature ) 
    const [size, setSize] =useState(item.size || null)
    const [milk, setMilk] = useState(item.milk)

    const [sugar, setSugar] = useState(item.sugar)

    const [quantity, setQuantity] = useState(1)

    
    return(
       
            <Modal show={true} onHide={handleClose} size="lg"  >
            
                <Modal.Header className='customize_header' closeButton>
                    <Modal.Title>Customize {item.title} </Modal.Title>
                </Modal.Header>

                <Modal.Body className='customize_list'>
                    <CustomizeTemperature temperature={temperature} setTemperature={setTemperature} />
                    <CustomizeSize size={size} setSize={setSize} />
                    <CustomizeMilk milk={milk} setMilk={setMilk} />
                    <CustomizeSugar sugar={sugar} setSugar={setSugar} />
                </Modal.Body>


                <Modal.Footer>
  <Quantity quantity={quantity} setQuantity={setQuantity} />
  <Button className="ms-auto">
    Add to cart
  </Button>

                {/*     {
                        itemToCustomize.id === null ?
                            <AddCartButton
                                customizedItem={{
                                    'menuitem': itemToCustomize.menuitem,
                                    'quantity': quantity,
                                    'temperature': temperature,
                                    'sugar': sugar,
                                    'size': size,
                                    'milk': milk
                                }}
                                handleHide={handleHide} 
                            />
                            :
                            <UpdateCartButton
                                customizedItem={{
                                    'id':itemToCustomize.id,
                                    'menuitem': itemToCustomize.menuitem,
                                    'quantity': quantity,
                                    'temperature': temperature,
                                    'sugar': sugar,
                                    'size': size,
                                    'milk': milk
                                }}
                                handleHide={handleHide}
                            />


                    }
*/}
                            
            
                </Modal.Footer> 
                
            </Modal>

    )
}

export default CustomizeItemModal
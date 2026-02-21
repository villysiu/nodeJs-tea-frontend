import { useState, useEffect } from 'react'
import { Row, Col, Image, Spinner, Form } from 'react-bootstrap'
import CartEditIcon from './CartEditIcon'
import CartDeleteIcon from './CartDeleteIcon'
import { useMenu } from '../context/MenuContext'

const CartItem = ({ cart }) => {
    // {
	// 		"quantity": 1,
	// 		"unitPrice": 5,
	// 		"_id": "69992f2140affd8172d3bcb3",
	// 		"createdBy": "69798350eeeb07d2f32fae2b",
	// 		"temperature": "HOT",
	// 		"sugar": "0%",
	// 		"createdAt": "2026-02-21T04:05:53.549Z",
	// 		"updatedAt": "2026-02-21T04:05:53.549Z",
	// 		"__v": 0,
	// 		"menuitemId": "6981457efd04af387993d3f2",
	// 		"milkId": "69814750fd04af387993d404",
	// 		"sizeId": "698142fbfd04af387993d3e4"
	// 	},

    const {menuitems, milks, sizes } = useMenu();
    const menuitem = menuitems.find(m=>m._id === cart.menuitemId);
    const milk = milks.find(m=>m._id === cart.milkId);
    const size = sizes.find(s=>s._id === cart.sizeId);
    

    return (
        <Row key={cart._id} className='px-2 py-3' style={{ borderBottom: '1px solid black' }}>
            

            <Col xs={2} className='p-0'>
                <Image 
                    // src={menuitem.imageUrl} 
                    src='https://github.com/villysiu/nodeJs-tea-frontend/blob/main/public/Chamomile-Tea.webp?raw=true'
                    alt={menuitem.title}
                    style={{ 
                    width: "100%", 
                    aspectRatio: "1/1",
                    objectFit: "cover",
                    
                }}
                />
            </Col>

            <Col>
                <b>{menuitem.title}</b>
                <div style={{fontSize: '12px'}}>
                    {size.title} 
                    { milk.title !== 'NA' &&  <> | {milk.title}</>}
                    { cart.sugar !== 'NA' &&  <> | {cart.sugar}</>}
                    { cart.temperature !== 'NA' &&  <> | {cart.temperature}</>}
            
                </div>
                <div>@${cart.unitPrice.toFixed(2)}</div>
            </Col>
            <Col xs={3} className="d-flex align-items-center gap-2 px-0">
                <Form.Control type="text" 
                    placeholder="hhh" 
                    value={cart.quantity}
                    // onChange={handleChange}
                    // onBlur={e=>validateName(e.target.value)}
                />
                <EditQuantityInput 
                <CartEditIcon cart={{...cart,
                                        menuitem: {
                                            _id: menuitem._id,
                                            title: menuitem.title,
                                            price: menuitem.price
                                        }
                                    }} 
                />
                <CartDeleteIcon cartId={cart._id} />
                
            </Col>
        </Row>
    )
}
export default CartItem
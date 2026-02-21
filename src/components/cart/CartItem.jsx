import { useState, useEffect } from 'react'
import { Row, Col, Image, Spinner, Form } from 'react-bootstrap'
import CartEditIcon from './CartEditIcon'
import CartDeleteIcon from './CartDeleteIcon'

const CartItem = ({ cart }) => {

    return (
        <Row key={cart._id} className='px-2 py-3' style={{ borderBottom: '1px solid black' }}>
            

            <Col xs={2} className='p-0'>
                <Image 
                    // src={item.imageUrl} 
                    src='https://github.com/villysiu/nodeJs-tea-frontend/blob/main/public/Chamomile-Tea.webp?raw=true'
                    alt={cart.menuitem.title}
                    style={{ 
                    width: "100%", 
                    aspectRatio: "1/1",
                    objectFit: "cover",
                    
                }}
                />
            </Col>

            <Col>
                <b>{cart.menuitem.title}</b>
                <div style={{fontSize: '12px'}}>
                    {cart.milk.title} | {cart.size.title} | {cart.sugar} | {cart.temperature}
                </div>
                <div>${cart.unitPrice.toFixed(2)}</div>
            </Col>
            <Col xs={3} className="d-flex align-items-center gap-2 px-0">
                <Form.Control type="text" 
                    placeholder="hhh" 
                    value={cart.quantity}
                    // onChange={handleChange}
                    // onBlur={e=>validateName(e.target.value)}
                />
                <CartEditIcon cart={cart} />
                <CartDeleteIcon cartId={cart._id} />
                
            </Col>
        </Row>
    )
}
export default CartItem
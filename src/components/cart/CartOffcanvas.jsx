import { useState, useEffect } from 'react'
import CartItem from './CartItem'
import { Offcanvas, Button, Spinner } from 'react-bootstrap'
import { useCart } from '../context/CartContext'


const CartOffcanvas = () => {
    

    const { carts, subtotal, show, setShow, loading } = useCart();

    console.log(show)

    console.log("loading: ", loading)
    return (
        <Offcanvas  show={show} onHide={() => setShow(false)} 
                    placement="end"
                    style={{
                        top: '3rem', 
                        bottom: '3rem', 
                        right: '1rem', 
                        height: 'auto', 
                        borderRadius: '12px',
                        boxShadow:'0 10px 30px rgba(0,0,0,0.3)',
                    }} 
        >
            {loading && (
                <div style={{   position: "absolute",
                                inset: 0,
                                backgroundColor: "rgba(0, 0, 0, 0.4)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                zIndex: 10,
                            }}
                >
                    <Spinner animation="border" variant="light" />
                </div>
            )}

            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Your Cart ({carts.length} items)</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
            {   
                carts.map(cart => {
                    return <CartItem cart={cart} />
                })
            }
            </Offcanvas.Body>
            
            <div className="border-top p-3">
                Subtotal: ${subtotal.toFixed(2)}
                <Button variant="primary" className="w-100">
                    Checkout
                </Button>
            </div>
        </Offcanvas>
    )
}
export default CartOffcanvas
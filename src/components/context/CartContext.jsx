import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from './AuthContext'
import { useAlert } from './AlertContext';

const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const backendApi = 'http://localhost:3000'

    const { user } = useAuth();
    const { showAlert } = useAlert();
    const [carts, setCarts] = useState([])
    const [subtotal, setSubtotal] = useState(0)
    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(false)

    console.log(carts)
    const getCarts = async () => {
        setLoading(true)
        // setFetchCartsStatus('loading')
        try {
            const response = await fetch(`${backendApi}/api/v1/carts`, {
                'method': "GET",
                'headers': {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            const data = await response.json()
            if(!response.ok) {
                console.log("Failed to fetch carts");
                throw new Error(data.msg);
            }
            setCarts(data.carts)
            setSubtotal(data.subtotal)
            
        
        } catch (error) {
            console.error(error);
            showAlert(error.message, 'danger')
            // setFetchCartsStatus('failed')
        }
        finally{
            setLoading(false)
        }
    }
    
    const addCart = async (item) => {
        console.log(item)
        setLoading(true)
        try {
            const response = await fetch(`${backendApi}/api/v1/carts`, {
                'method': "POST",
                'headers': {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
                'body': JSON.stringify(item)
            })
            const data = await response.json()
            if(!response.ok) {
 
                throw new Error(data.msg || "Failed to add item");
            }
            console.log('new item added:', data.cart);
            
            await getCarts()
            setShow(true)

        } catch (error) {
            console.error(error);
            showAlert(error.message, 'danger')
        }
        finally{
            setLoading(false)
        }
    }
    // const updateCart = async () => {
        
    // }
    const deleteCart = async(cartId) => {
        console.log("delete cart")
        setLoading(true)
        
        try {
            await new Promise((resolve)=>setTimeout(resolve, 3000))
                
            const response = await fetch(`${backendApi}/api/v1/carts/${cartId}`, {
                'method': 'DELETE',
                'headers': {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })

            const data = await response.json();
            if(!response.ok) {
                throw new Error(data.msg || "Failed to delete cart item")
            }
            await getCarts()
            // setShow(true)

            
        } catch (error) {
            console.error(error.message)
            showAlert(error.message, 'danger')
        }
        finally {
            setLoading(false)
        }
    }

    
    
    useEffect(()=>{
        if(user === null){
            setCarts([])
            // setFetchCartsStatus('idle')
            setShow(false)
            return;
        }
        getCarts();
    }, [user])

    

    return (
        <CartContext.Provider 
            value={{ 
                carts, 
                subtotal, 
                show, setShow, 
                addCart,
                deleteCart, 
                // updateCart,
                loading 
        }}>
            {children}
        </CartContext.Provider> 
    )
}

export const useCart = () => useContext(CartContext)
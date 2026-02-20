import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from './AuthContext'

const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const backendApi = 'http://localhost:3000'

    const { user } = useAuth();
    const [carts, setCarts] = useState([])
    const [subtotal, setSubtotal] = useState(0)
    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(false)

    const getCarts = async () => {
        setLoading(true)
        try {
            const response = await fetch('http://localhost:3000/api/v1/carts', {
                'method': "GET",
                'headers': {
                    'content-type': 'application/json',
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
        }
        finally{
            setLoading(false)
        }
    }
    
    // const addCart = async () => {
        
    // }
    // const updateCart = async () => {
        
    // }
    // const deleteCart = async () => {

    // }


    useEffect(()=>{
        console.log(show)
    }, [show])
    
    useEffect(()=>{
      getCarts();
    }, [user])

  useEffect(() => {
    console.log("Carts changed:", carts);
    }, [carts]);

    return (
        <CartContext.Provider value={{ carts, subtotal, show, setShow,
        //  addCart, deleteCart, updateCart,
          loading }}>
            {children}
        </CartContext.Provider> 
    )
}

export const useCart = () => useContext(CartContext)
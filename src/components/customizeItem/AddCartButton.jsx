 import { Button, Spinner } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import {useAuth} from '../context/AuthContext'
import { useNavigate, useLocation } from 'react-router-dom'
import { useMenu } from '../context/MenuContext'

const AddCartButton = ({item, handleClose}) => {
    console.log(item)
    const { user, setShow } = useAuth();
    const { addCart, loading, setPendingItem } = useCart();
    const { sizes, milks } = useMenu();
    const navigate = useNavigate();
    const location = useLocation();

    const [price, setPrice]= useState(0)
    
    const milk = milks.find(m=>m._id === item.milkId);
    const size = sizes.find(s=>s._id === item.sizeId);

    const handleClick = () => {
        console.log("adding item")
        const selectedItem = {
            menuitemId: item.menuitem._id,
            milkId: item.milkId,
            sizeId: item.sizeId,
            sugar: item.sugar,
            temperature: item.temperature,
            quantity: item.quantity,
       }
       
       // habdle no user login
       if(user === null){
            setPendingItem(selectedItem)
            
            setShow('login')
            handleClose();
            return;
       }
       addCart(selectedItem);
       handleClose();


    }
    useEffect(()=>{
        setPrice(item.quantity * (item.menuitem.price + size.price+ milk.price));
    }, [item, size.price, milk.price])

    // useEffect(()=> {
    //     if(user && pendingItem){
    //         addCart(pendingItem)
    //         setPendingItem(null)
    //     }
    // },[user, pendingItem, addCart, handleClose]);

    return (
        <Button
            style={{ minWidth: "2rem" }}
            disabled={loading}
            onClick={handleClick}
            className="ms-auto d-flex align-items-center justify-content-center"
        >
        {loading ? (
            <Spinner animation="border" size="sm" />
        ) : (
            <>Add to Cart ${price.toFixed(2)}</>
        )}
        </Button>
    )
}
export default AddCartButton
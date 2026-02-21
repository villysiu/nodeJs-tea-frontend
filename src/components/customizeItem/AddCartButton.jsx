 import { Button, Spinner } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import {useAuth} from '../context/AuthContext'
import { useNavigate, useLocation } from 'react-router-dom'

const AddCartButton = ({item, handleClose}) => {
    console.log(item)
    const { user } = useAuth();
    const { addCart, loading } = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const [price, setPrice]= useState(0)

    const handleClick = () => {
        console.log("adding item")
       // habdle no user login
       if(user === null){
            return;
       }
       addCart({
            menuitemId: item.menuitem._id,
            milkId: item.milk._id,
            sizeId: item.size._id,
            sugar: item.sugar,
            temperature: item.temperature,
            quantity: item.quantity,
       });

       handleClose();
    }
    useEffect(()=>{
        setPrice(item.quantity * (item.menuitem.price + item.size.price+ item.milk.price));
    }, [item])

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
 import {Button} from 'react-bootstrap'
import {useState, useEffect} from 'react'

const AddCartButton = ({item, handleClose}) => {
    console.log(item)
    const [price, setPrice]= useState(0)
    useEffect(()=>{
        setPrice(item.quantity * (item.menuitem.price + item.size.price+ item.milk.price))
    }, [item])

    
    return(

        <>
        {console.log(typeof price)}
            <Button className="ms-auto">
                Add to Cart ${price.toFixed(2)}
            </Button>
        </>

    )
}
export default AddCartButton
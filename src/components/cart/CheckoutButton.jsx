import { Button, Spinner } from 'react-bootstrap'
import { useOrder } from '../context/OrderContext'
import { useCart } from '../context/CartContext'

const CheckoutButton = () => {
    const { addOrder } = useOrder();
    const { setShow } = useCart();

    const handleClick = () => {
        addOrder();
        setShow(false)
    }
    return (
        <Button 
            onClick={handleClick}
            variant="primary" className="w-100"
        >
            Checkout
        </Button>
    )

}
export default CheckoutButton
import { useState } from 'react'
import { PencilSquare } from 'react-bootstrap-icons'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomizeItemModal  from '../customizeItem/CustomizeItemModal'

const CartEditIcon = ({cart, menuitem}) =>{

    const [selectedItem, setSelectedItem,] = useState(null)
    console.log(cart)
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
    const handleClose = () =>{
        setSelectedItem(null)
    }

   
    return (
        <>
        <CustomizeItemModal handleClose={handleClose} item={selectedItem} />

        <Nav.Link as={Link} 
            onClick={()=>setSelectedItem(
                {
                    cartId: cart._id,
                    menuitem: cart.menuitem,
                    sugar: cart.sugar,
                    temperature: cart.temperature,
                    sizeId: cart.sizeId,
                    milkId: cart.milkId,
                    quantity: cart.quantity
                }
            )} >
            <PencilSquare />
        </Nav.Link>
        </>
    )
}
export default CartEditIcon
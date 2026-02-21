import { useMenu } from "../context/MenuContext";
import { Form } from 'react-bootstrap'

const CustomizeSize = ({sizeId, setSizeId}) => {
    const { sizes } = useMenu();
    console.log(sizes)
    return (
        <div>
            <b>Drink Size</b>
            <div>Required - Choose 1. </div>
            
            <Form>
            {
                sizes.map(sz=>{
                    const priceText = sz.price > 0 ? `+$${sz.price}.00` : ""
                    const labelText = `${sz.title} ${priceText}`
                    return(
                        
                        <Form.Check 
                            key={sz._id}
                            className='customize_item_choice'
                            onChange={()=>setSizeId(sz._id)}
                            inline
                            type="radio"
                            defaultChecked = {sizeId!==null && sz._id===sizeId}
                            name="size"
                            label={labelText}
                            id={`size-radio-${sz._id}`}
                        />
                        
                    )
                })
            }

            </Form>     
        </div>
    )
}
export default CustomizeSize
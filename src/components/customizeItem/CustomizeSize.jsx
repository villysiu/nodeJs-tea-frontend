import { useMenu } from "../MenuContext";
import { Form } from 'react-bootstrap'

const CustomizeSize = ({size, setSize}) => {
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
                            onChange={()=>setSize(sz)}
                            inline
                            type="radio"
                            defaultChecked = {size!==null && sz._id===size._id}
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
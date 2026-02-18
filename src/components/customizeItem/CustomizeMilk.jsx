import { useMenu } from "../MenuContext";
import { Form } from 'react-bootstrap'

const CustomizeMilk = ({milk, setMilk}) => {
    const { milks } = useMenu();

    console.log(milk)
    if(milk.title === 'NA')
        return null

    return (

        <div>
            <b>Milk</b>
            <div> Optional, default choice - No milk</div>
            
            <Form>

                {milks.map(mk =>{
                    if(mk.title === 'NA') return null
                    const price = mk.price > 0 ? `+$${mk.price}` : ""
                    const mkTitle = `${mk.title}  ${price}`
                    return(
                        
                        <Form.Check key={mk._id}
                            // className='customize_item_choice'
                            onChange={()=>setMilk(mk)}
                            inline
                            type="radio"
                            defaultChecked = {milk.id=== mk._id}
                            name="milk"
                            label={mkTitle}
                            id={`milk-radio-${mk._id}`}
                        />
                        
                    )
                })
            }
            
            </Form>    
     
            </div>
            
        
        
    )
}
export default CustomizeMilk
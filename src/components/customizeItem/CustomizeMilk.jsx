import { useMenu } from "../context/MenuContext";
import { Form } from 'react-bootstrap'

const CustomizeMilk = ({milkId, setMilkId}) => {
    const { milks } = useMenu();

    console.log(milks)
    
    if(milkId === milks.find(m=>m.title === 'NA')._id)
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
                            onChange={()=>setMilkId(mk._id)}
                            inline
                            type="radio"
                            defaultChecked = {milkId===mk._id}
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
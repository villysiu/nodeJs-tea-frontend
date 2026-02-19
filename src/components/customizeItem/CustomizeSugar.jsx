import { useMenu } from "../context/MenuContext";
import { Form } from 'react-bootstrap'

const CustomizeSugar = ({sugar, setSuga}) => {
    const { sugars } = useMenu();

    if(sugar === "NA")
        return null;

    return (
        <div>
            <b>Sweetness</b>
            <div>Optional, default choice - No sugar</div>
            <Form className='customize_item_choices'>
            {
                
                sugars.map(sgr=> {
                    if(sgr === 'NA') return null

                    return (
                        <Form.Check key={sgr}
                                    
                                    onChange={() => setSugar(sgr)}
                                    inline
                                    type="radio"
                                    checked={sgr === sugar}
                                    name="sugar"
                                    label={sgr}
                                    id={`sugar-radio-${sgr}`}
                        />
                    )
                })

                        
            }

            </Form>     
        </div>
    )
}
export default CustomizeSugar
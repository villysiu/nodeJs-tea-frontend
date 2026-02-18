import { useMenu } from "../MenuContext";
import { Form } from 'react-bootstrap'

const CustomizeTemperature = ({temperature, setTemperature}) => {
    const { temperatures } = useMenu();

    if(temperature === 'NA')
        return null

    return (
        <div className='customize_item required'>
            <b>Hot Or Iced</b>
            <div>Required - Choose 1.</div>
            <Form>
                {
                    temperatures.map((temp) => {
                        if(temp === 'NA')
                            return null;
                        return (

                            <Form.Check
                                key={temp}
                                className='customize_item_choice'
                                onChange={() => setTemperature(temp)}
                                
                                inline
                                type="radio"
                                defaultChecked={temperature === temp}
                                name="temp"
                                label={temp[0]+temp.slice(1).toLowerCase()}
                                id={`temp-radio-${temp}`}
                            />

                        )
                    })

                }

            </Form>
        </div>
    ) 

}
export default CustomizeTemperature
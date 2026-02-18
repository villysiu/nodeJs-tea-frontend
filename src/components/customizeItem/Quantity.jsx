const Quantity =({quantity, setQuantity})=>{
    const handleClick = (sign) =>{
        if(sign==='-')
            setQuantity(q=>q-1)
        else
            setQuantity(q=>q+1)
    }
    return(
        <div>
            <div>Quantity</div>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                
                <button onClick={()=>handleClick('-')} disabled={quantity===1}> - </button>
                <div style={{ 
                    width: '3rem', 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center' 
                }}>
                    {quantity}
                </div>
                <button onClick={()=>handleClick('+')}  disabled={quantity===6}> + </button>
                
            </div>
        </div>
    )
}
export default Quantity
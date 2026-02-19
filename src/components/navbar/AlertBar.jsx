import React, {useEffect}from 'react'
import {Alert } from 'react-bootstrap'
import { useAlert } from "../context/AlertContext"

const AlertBar = () => {
    const {alerts } = useAlert();

    useEffect(()=>{
        console.log(alerts)
    }, [alerts])

    return (
        <div>
        {
            alerts.map(alert => {
            return (
                <Alert
                    key={alert.id}
                    variant={alert.variant}
                    style={{textAlign: 'left'}}
                >
                    {alert.message}
                </Alert>
            )
            
            })
        }
        </div>
    )
}
export default AlertBar
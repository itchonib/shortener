import React, {useEffect, useState} from 'react'
import './Notification.scss'

const Toast = ({type, message, clearFn}) => {
    const [showToast, setShowToast] = useState(false)

    useEffect(()=>{
        setShowToast(true)
        return setTimeout(() => {
            setShowToast(false)
            clearFn()
        },3500)
    },[message, clearFn])

    if (!showToast) {
        return <></>
    }

    return (
        <div className={`toast`}> 
            <div className='toast__message-wrapper'>
                <p className={`toast__message toast__message--${type}`}> {message} </p>
            </div>
        </div>
    )
}

export default Toast

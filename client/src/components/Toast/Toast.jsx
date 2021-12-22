import React, {useEffect, useState} from 'react'
import './Toast.scss'

const Toast = ({type, message, clearFn}) => {
    const [showToast, setShowToast] = useState(false)

    useEffect(()=>{
        setShowToast(true)
        return setTimeout(() => {
            setShowToast(false)
            clearFn()
        },3500)
    },[message])

    if (!showToast) {
        return <></>
    }

    return (
        <div className={`toast toast--${type}`}> 
            <div className='toast__message-wrapper'>
                <p className='toast__message'> {message} </p>
            </div>
        </div>
    )
}

export default Toast

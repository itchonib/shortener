import React from 'react'
import './InputField.scss'

const InputField = ({id, label, shortUrl, error}) => {
    return (
        <div className="input">
            <label className='input__label'>{label}</label>
            <input id={id} className='input__field' type="text" defaultValue={shortUrl}/>
            {error && <p className="input__error"> {error} </p> }
        </div>
    )
}

export default InputField

import React from 'react'
import './InputField.scss'

const InputField = ({id, label, shortUrl}) => {
    return (
        <div className="input">
            <label className='input__label'>{label}</label>
            <input id={id} className='input__field' name={id} type="text" defaultValue={shortUrl} autoFocus/>
        </div>
    )
}

export default InputField

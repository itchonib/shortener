import React from 'react'
import Toast from '../Toast/Toast'
import './InputField.scss'

const InputField = ({id, label, shortUrl, error}) => {
    return (
        <div className="input">
            <label className='input__label'>{label}</label>
            <input id={id} className='input__field' name={id} type="text" defaultValue={shortUrl}/>
            {/* {error && <p className="input__error"> {error} </p> } */}
            {/* {error && <Toast type="fail" message={error}/>  } */}
        </div>
    )
}

export default InputField

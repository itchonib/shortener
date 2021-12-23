import React from 'react'
import Logo from '../../assets/snipit-logo-lg.svg'
import './NavigationBar.scss'
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
    let navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/");
    }

    return (
        <div className='navigation'>
            <img onClick={()=> handleNavigate()} className="navigation__logo" alt="snip it with scissors logo" src={Logo}/>
        </div>
    )
}

export default NavigationBar

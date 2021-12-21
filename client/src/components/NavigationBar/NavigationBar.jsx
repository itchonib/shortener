import React from 'react'
import Logo from '../../assets/snipit-logo-lg.svg'
import './NavigationBar.scss'

const NavigationBar = () => {
    return (
        <div className='navigation'>
            <img className="navigation__logo" alt="snip it with scissors logo" src={Logo}/>
        </div>
    )
}

export default NavigationBar

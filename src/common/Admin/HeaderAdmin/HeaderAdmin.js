import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import './HeaderAdmin.scss'

function HeaderAdmin() {


    // function toggle class
    const sliderbarBtn = () => {
        document.querySelector('.wrapper').classList.toggle('collapse-slide');
    };

    return (
        <div className="header-admin my-shadow">
            <div className="header-menu">
                <NavLink className="logo d-flex align-items-center" to="/home">
                        <img src="/images/logo_education.png" alt="logo" />Cyber Education
                </NavLink>
                <div className="slidebar-btn" onClick = {sliderbarBtn}>
                    <i className="fas fa-bars" />
                </div>
                <ul>
                    <li><NavLink to="/home" title="Log out"><i className="fas fa-power-off" /></NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderAdmin;
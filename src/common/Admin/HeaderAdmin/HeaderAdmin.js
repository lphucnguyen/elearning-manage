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
                <h1 className="title">
                    Cyber Education
                </h1>
                <div className="slidebar-btn" onClick = {sliderbarBtn}>
                    <i className="fas fa-bars" />
                </div>
                <ul>
                    <li><NavLink to="/" title="Đăng xuất"><i className="fas fa-power-off" /></NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderAdmin;
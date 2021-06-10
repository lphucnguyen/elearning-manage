import React, {useEffect} from 'react'
import './HeaderAdmin.scss'

function HeaderAdmin() {

    // function toggle class
    const sliderbarBtn = () => {
        document.querySelector('.wrapper').classList.toggle('collapse-slide');
    };

    return (
        <div className="header my-shadow">
            <div className="header-menu">
                <h1 className="title">
                    Cyber Education
                </h1>
                <div className="slidebar-btn" onClick = {sliderbarBtn}>
                    <i className="fas fa-bars" />
                </div>
                <ul>
                    <li><a href="#" title="Đăng xuất"><i className="fas fa-power-off" /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderAdmin;
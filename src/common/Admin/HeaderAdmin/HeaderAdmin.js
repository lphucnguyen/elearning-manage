import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './HeaderAdmin.scss'
import { history } from '../../../App';

function HeaderAdmin() {

    const dispatch = useDispatch()

    // function toggle class
    const sliderbarBtn = () => {
        document.querySelector('.wrapper').classList.toggle('collapse-slide');
    };

    const logout = () => {
        dispatch({
            type: 'DANG_XUAT'
        })

        history.replace("/home")
    }

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
                    <li><a onClick={logout} title="Đăng xuất"><i className="fas fa-power-off" /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderAdmin;
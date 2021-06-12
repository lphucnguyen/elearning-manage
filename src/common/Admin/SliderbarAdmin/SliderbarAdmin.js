import React from 'react'
import './SliderbarAdmin.scss'

function SliderbarAdmin() {
    return (
        <div className="slidebar">
            <div className="slidebar-menu">
                <li className="item">
                    <a href="#" className="menu-btn">
                        <i className="fa fa-book"></i><span>Quản lý khóa học</span>
                    </a>
                </li>
                <li className="item">
                    <a href="#" className="menu-btn">
                        <i className="fa fa-users"></i><span>Quản lý người dùng</span>
                    </a>
                </li>
            </div>
        </div>
    )
}

export default SliderbarAdmin;
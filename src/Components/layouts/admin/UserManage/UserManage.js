import React from 'react'
import HeaderAdmin from '../../../../common/Admin/HeaderAdmin/HeaderAdmin';
import SliderbarAdmin from '../../../../common/Admin/SliderbarAdmin/SliderbarAdmin';
import MainUserManage from '../MainUserManage/MainUserManage';
import './UserManage.scss'

function UserManage() {

    return (
        <div className="wrapper collapse-slide">
            <HeaderAdmin/>
            <SliderbarAdmin/>
            <MainUserManage/>
        </div>

    )
}

export default  UserManage;
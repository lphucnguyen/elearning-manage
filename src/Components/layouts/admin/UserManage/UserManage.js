import React from 'react'
import { Fragment } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import HeaderAdmin from '../../../../common/Admin/HeaderAdmin/HeaderAdmin';
import SliderbarAdmin from '../../../../common/Admin/SliderbarAdmin/SliderbarAdmin';
import MainUserManage from '../MainUserManage/MainUserManage';
import './UserManage.scss'

function UserManage() {

    return (
        <Fragment>
            <ToastProvider
                    autoDismiss
                    autoDismissTimeout={2000}
                    placement="bottom-right"
                >
                <div className="wrapper collapse-slide">
                    <HeaderAdmin/>
                    <SliderbarAdmin/>
                    <MainUserManage/>
                </div>
            </ToastProvider>
        </Fragment>
    )
}

export default  UserManage;
import React from 'react'
import { Route } from 'react-router';
import 'antd/dist/antd.css'
import HeaderAdmin from '../common/Admin/HeaderAdmin/HeaderAdmin';

export default function AdminTemplate(props) {

    let {Component,...restRoute} = props;

    return <Route {...restRoute} render={(propsRoute) => {
        return <div>
            <Component {...propsRoute} />
        </div>
    }}/>
}

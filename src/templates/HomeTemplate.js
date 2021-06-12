import React from 'react'
import { Route } from 'react-router';

export const HomeTemplate = (props) => {

    let {Component,...restRoute} = props;

    return <Route {...restRoute} render={(propsRoute) => {
        return <div>
            <Component {...propsRoute} />
        </div>
    }}/>
}

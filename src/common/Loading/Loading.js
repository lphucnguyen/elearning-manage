import React from 'react'
import { Fragment } from 'react';
import { useSelector } from 'react-redux'
import './Loading.scss'

export default function Loading() {

    const isLoading = useSelector(state => state.LoadingReducer.loading);

    const rederLoading = () => {
        if(isLoading) return (<div class="lds-dual-ring"></div>)
    }

    return (
        <Fragment>
            {rederLoading()}
            {/* <div class="lds-dual-ring"></div> */}
        </Fragment>
    )
}

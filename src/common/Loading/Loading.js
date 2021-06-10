import React from 'react'
import { Fragment } from 'react';
import { useSelector } from 'react-redux'
import './Loading.scss'

export default function Loading() {

    const isLoading = useSelector(state => state.LoadingReducer.loading);

    const renderLoading = () => {
        if(isLoading) {
            return <div className='body'>
                        <div className="container-loading">
                            <div className="wrapper-loading">
                                <div className="loader">
                                    <div className="dot" />
                                </div>
                                <div className="loader">
                                    <div className="dot" />
                                </div>
                                <div className="loader">
                                    <div className="dot" />
                                </div>
                                <div className="loader">
                                    <div className="dot" />
                                </div>
                                <div className="loader">
                                    <div className="dot" />
                                </div>
                            </div>
                            <div className="text">Please wait</div>
                        </div>
                    </div>
        }
        return '';
    };

    return (
        <Fragment>
            {renderLoading()}
        </Fragment>
    )
}

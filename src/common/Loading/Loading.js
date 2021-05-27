import React from 'react'
import './Loading.scss'

export default function Loading() {
    return (
        <div className='body'>
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
    )
}

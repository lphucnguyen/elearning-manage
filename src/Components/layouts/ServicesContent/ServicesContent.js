import React from 'react'
import ServiceItem from '../ServiceItem/ServiceItem'
import './ServicesContent.scss';
import { NavLink } from 'react-router-dom'

function ServicesContent() {
    return (
        <div className="service-contain course-introduce" id="services">
            <div className="container">
                <h4 className="course-introduce-subtitle">SERVICES</h4>
                <h1 className="course-introduce-title">Amazing Services <br /> For You</h1>
                <div className="course-introduce-all">
                    <NavLink to="/courses">View all</NavLink>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <ServiceItem />
                    </div>
                    <div className="col-md-4">
                        <ServiceItem />
                    </div>
                    <div className="col-md-4">
                        <ServiceItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesContent;

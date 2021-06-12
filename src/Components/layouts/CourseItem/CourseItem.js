import React from 'react'
import { NavLink } from 'react-router-dom';
import './CourseItem.scss'

function CourseItem(props) {

    const {name, views, img, maKhoaHoc} = props;

    return (
        <div className="product-item my-shadow">
            <div className="card-img-top p-3">
                <img src={img} alt={name} />
            </div>
            <div className="card-body">
                <div className="rate">
                    <input type="radio" id="star1" name="rate" defaultValue={1} />
                    <label htmlFor="star1" title="text">1 star</label>
                    <input type="radio" id="star2" name="rate" defaultValue={2} />
                    <label htmlFor="star2" title="text">2 stars</label>
                    <input type="radio" id="star3" name="rate" defaultValue={3} />
                    <label className="checked" htmlFor="star3" title="text">3 stars</label>
                    <input type="radio" id="star4" name="rate" defaultValue={4} />
                    <label className="checked" htmlFor="star4" title="text">4 stars</label>
                    <input type="radio" id="star5" name="rate" defaultValue={5} />
                    <label className="checked" htmlFor="star5" title="text">5 stars</label>
                </div>
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{views} views</p>
                <div className="footer">
                    <span><i className="fa fa-share-alt" /></span>
                    <span><i className="fa fa-heart" /></span>
                    <NavLink className="read-more btn-read-more" to={`/details/:${maKhoaHoc}`}>Read more...</NavLink>
                </div>
            </div>
        </div>

    )
}

export default  CourseItem;
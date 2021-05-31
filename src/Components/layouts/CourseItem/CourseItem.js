import React from 'react'
import './CourseItem.scss'

function CourseItem() {
    return (
        <div className="card-product shadow">
            <img className="card-img-top p-3" src="./images/images.jfif" alt />
            <div className="card-body">
                <div className="rate">
                    <input type="radio" id="star1" name="rate" defaultValue={1} />
                    <label htmlFor="star1" title="text">1 star</label>
                    <input type="radio" id="star2" name="rate" defaultValue={2} />
                    <label htmlFor="star2" title="text">2 stars</label>
                    <input type="radio" id="star3" name="rate" defaultValue={3} />
                    <label htmlFor="star3" title="text">3 stars</label>
                    <input type="radio" id="star4" name="rate" defaultValue={4} />
                    <label htmlFor="star4" title="text">4 stars</label>
                    <input type="radio" id="star5" name="rate" defaultValue={5} />
                    <label htmlFor="star5" title="text">5 stars</label>
                </div>
                <h4 className="card-title">Web development</h4>
                <p className="card-text">2321 views</p>
                <div className="footer">
                    <span><i className="fa fa-share-alt" /></span>
                    <span><i className="fa fa-heart" /></span>
                    <span className="read-more btn-read-more">Read more...</span>
                </div>
            </div>
        </div>

    )
}

export default  CourseItem;
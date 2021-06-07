import React from 'react'
import './OfferItem.scss'

function OfferItem() {
    return (
        <div className="offer-item">
            <h6 className="offer-item-subtitle">SPECIAL OFFER</h6>
            <div className="offer-item-discount">50% off</div>
            <h6 className="offer-item-content">Sign up now and get discount</h6>
            <a href=""className="offer-item-btn">SignUp</a>
        </div>
    )
}

export default OfferItem;
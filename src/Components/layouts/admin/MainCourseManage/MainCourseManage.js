import React from 'react'
import './MainCourseManage.scss'

function MainCourseManage() {
    return (
        <main className="main-container">
            <div className="row">
                <div className="col-md-5 pl-0">
                    <div className="list-users">
                        <div className="group-select-info d-flex justify-content-between  align-items-center p-3">
                            <button className="btn-add shadow"><i className="fa fa-plus" /></button>
                            <div className="count-user d-flex justify-content-center align-items-center">
                                <span className="icon-avatar"><i className="fa fa-user-circle" /></span>
                                <span className="content">179 users was found!!</span>
                                <span className="icon-check"><i className="fa fa-check" /></span>
                            </div>
                            <div className="select-group">
                                <select>
                                    <option value={0}>Group 01</option>
                                    <option value={1}>Group 02</option>
                                    <option value={2}>Group 03</option>
                                    <option value={3}>Group 04</option>
                                    <option value={4}>Group 05</option>
                                    <option value={5}>Group 06</option>
                                    <option value={6}>Group 07</option>
                                    <option value={7}>Group 08</option>
                                </select>
                                <div className="custom-arrow" />
                            </div>
                        </div>
                        <div className="search-user">
                            <div className="search-user--input d-flex p-3">
                                <input type="text" placeholder="Search User..." />
                            </div>
                        </div>
                        <div className="list-user--item">
                            <div className="user d-flex justify-content-around align-items-center flex-wrap px-3 py-2" data-toggle="modal" data-target="#exampleModal">
                                <div class="product-item-admin mb-3">
                                    <div class="item-body">
                                        <img src="./images/images.jfif" alt="" />
                                        <div class="title">The Complete Android Oreo</div>
                                    </div>
                                    <div class="item-footer">
                                        <span><i class="fa fa-trash"></i></span>
                                        <span><i class="fa fa-edit"></i></span>
                                    </div>
                                </div>
                                <div class="product-item-admin mb-3">
                                    <div class="item-body">
                                        <img src="./images/images.jfif" alt="" />
                                        <div class="title">The Complete Android Oreo</div>
                                    </div>
                                    <div class="item-footer">
                                        <span><i class="fa fa-trash"></i></span>
                                        <span><i class="fa fa-edit"></i></span>
                                    </div>
                                </div>
                                <div class="product-item-admin mb-3">
                                    <div class="item-body">
                                        <img src="./images/images.jfif" alt="" />
                                        <div class="title">The Complete Android Oreo</div>
                                    </div>
                                    <div class="item-footer">
                                        <span><i class="fa fa-trash"></i></span>
                                        <span><i class="fa fa-edit"></i></span>
                                    </div>
                                </div>
                                <div class="product-item-admin mb-3">
                                    <div class="item-body">
                                        <img src="./images/images.jfif" alt="" />
                                        <div class="title">The Complete Android Oreo</div>
                                    </div>
                                    <div class="item-footer">
                                        <span><i class="fa fa-trash"></i></span>
                                        <span><i class="fa fa-edit"></i></span>
                                    </div>
                                </div>
                                <div class="product-item-admin mb-3">
                                    <div class="item-body">
                                        <img src="./images/images.jfif" alt="" />
                                        <div class="title">The Complete Android Oreo</div>
                                    </div>
                                    <div class="item-footer">
                                        <span><i class="fa fa-trash"></i></span>
                                        <span><i class="fa fa-edit"></i></span>
                                    </div>
                                </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* modal box */}
                    
                </div>
            </main>
    )
}

export default MainCourseManage;
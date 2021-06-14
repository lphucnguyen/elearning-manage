import React, { useEffect, useState } from 'react'
import './CourseDetailInfo.scss'
import { useSelector, useDispatch } from 'react-redux'
import { layChiTietKhoaHoc } from '../../../redux/actions/CourseAction';

import Loading from '../../../common/Loading/Loading';

function CourseDetailInfo(props) {
    const maKH = props.maKH;

    const dispatch = useDispatch();
    const courseDetail = useSelector(state => state.CourseReducer.courseDetail)

    useEffect(() => {
        console.log(maKH)
        dispatch(layChiTietKhoaHoc(maKH));
    }, [])

    return (
        <div className="course-info">
            <div className="course-bg">
                <img src={courseDetail.hinhAnh} />
            </div>
            <div className="container text-center">
                    <Loading />
                    <div className="rate">
                        <label class="active" title="text"><i class="fa fa-star"></i></label>
                        <label class="active" title="text"><i class="fa fa-star"></i></label>
                        <label class="active" title="text"><i class="fa fa-star"></i></label>
                        <label title="text"><i class="fa fa-star"></i></label>
                        <label title="text"><i class="fa fa-star"></i></label>
                    </div>
                    <h1 className="course-title">{courseDetail.tenKhoaHoc}</h1>
                    <p className="course-subtitle">{courseDetail.moTa}</p>
                    <div className="author">
                        <div className="author-img">
                            <img src="/images/user.jpg" />
                        </div>
                        <div className="author-name">{courseDetail.nguoiTao?.hoTen}</div>
                    </div> 
                    <ul className="course-note">
                        <li>{courseDetail.ngayTao}</li>
                        <li><i class="fa fa-user"></i> {courseDetail.soLuongHocVien}</li>
                        <li><i class="fa fa-eye"></i> {courseDetail.luotXem}</li>
                    </ul>
                    <div className="course-price">$234</div>  
                    <div className="course-buy">Buy Now</div>
            </div>
        </div>
    )
}


export default CourseDetailInfo;

import React, { useEffect, useRef, useState, Fragment } from 'react'
import Loading from '../../../../common/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux'
import { layDanhSachKhoaHocAction, xoaKhoaHoc, uploadHinhAnhKhoaHoc, themKhoaHoc, capNhatKhoaHoc, layChiTietKhoaHocManage } from '../../../../redux/actions/CourseAction'
import { layDanhSachNguoiDungChuaGhiDanhAction, layDanhSachHocVienChoXetDuyetAction, layDanhSachHocVienKhoaHocAction } from '../../../../redux/actions/UserAction';
import { useToasts } from 'react-toast-notifications'
import ImageUploader from 'react-images-upload';
import './MainCourseManage.scss'
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { Select, Upload, Typography } from 'antd';


function MainCourseManage(props) {

    const dispatch = useDispatch()

    const modalBox = useRef()

    const { Option } = Select;
    const { Title, Paragraph, Text, Link } = Typography;
    const { TextArea } = Input;

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const { addToast, toastStack } = useToasts()

    let [dataControl, setDataControl] = useState({
        tenKH: "",
        maNhom: "GP01"
    })

    const courseList = useSelector(state => state.CourseReducer.arrCourse);
    const courseDetail = useSelector(state => state.CourseReducer.courseDetail)

    let [disable, setDisabled] = useState({})
    let [course, setCourse] = useState({
        "maKhoaHoc": "",
        "biDanh": "123124",
        "tenKhoaHoc": "",
        "moTa": "",
        "luotXem": "",
        "danhGia": "0",
        "hinhAnh": "",
        "maNhom": "GP01",
        "ngayTao": new Date().toString(),
        "maDanhMucKhoaHoc": "BackEnd",
        "taiKhoanNguoiTao": ""
    })
    let [pageTitle, setPageTitle] = useState()
    let [pictures, setPictures] = useState(null)

    let [addUser, setAddUser] = useState({})
    let [updateUser, setUpdateUser] = useState({})

    let [startDate, setStartDate] = useState(new Date());

    let [pendingUsers, setPendingUsers] = useState([])
    let [approvedUsers, setApprovedUsers] = useState([])
    let [availableUsers, setAvailableUsers] = useState([])

    const handleChange = (e) => {

        const value = e.target?.id

        setCourse({
            ...course,
            [value]: e.target.value
        });
    }

    const selectChange = (e) => {
        console.log(e)
    }

    const renderPages = () => {
        console.log("Render")
    }

    const searchCourse = () => {
        dispatch(layDanhSachKhoaHocAction(dataControl.tenKH, dataControl.maNhom))
    }

    const viewCourse = (maKH) => {
        console.log(maKH)
        layChiTietKhoaHocManage(maKH)
            .then((res) => {
                dispatch({
                    type: 'LAY_CHI_TIET_KHOA_HOC',
                    data: res.data
                })

            })
            .catch((err) => {
                addToast("Loi load khoa hoc", {
                    appearance: 'error',
                    autoDismiss: true,
                })
            });

        modalBox.current.classList.add("active")

        setDisabled({ disabled: "disabled" })

        setPageTitle({ mode: "view", "title": "Course Information" })
    }

    const editCourse = (maKH) => {
        console.log(maKH)
        layChiTietKhoaHocManage(maKH)
            .then((res) => {
                dispatch({
                    type: 'LAY_CHI_TIET_KHOA_HOC',
                    data: res.data
                })
            })
            .catch((err) => {
                addToast("Loi load du lieu", {
                    appearance: 'error',
                    autoDismiss: true,
                })
            });

        modalBox.current.classList.add("active")
        setDisabled({})
        setPageTitle({ mode: "edit", "title": "Edit Course Information" })
    }

    const addCourse = () => {
        modalBox.current.classList.add("active")
        console.log(course)
        setCourse({
            "maKhoaHoc": "",
            "biDanh": "41215",
            "tenKhoaHoc": "",
            "moTa": "",
            "luotXem": "",
            "danhGia": "0",
            "hinhAnh": "",
            "maNhom": "GP01",
            "ngayTao": new Date().toString(),
            "maDanhMucKhoaHoc": "BackEnd",
            "taiKhoanNguoiTao": ""
        })
        setDisabled({})
        setPageTitle("Add Course Information")

        setStartDate(new Date())

        setPageTitle({ mode: "add", "title": "Add Course Information" })

    }

    const deleteCourse = (maKH) => {
        xoaKhoaHoc(maKH)
            .then((res) => {
                dispatch({
                    type: 'XOA_KHOA_HOC',
                    data: maKH
                })
                addToast("Xóa khóa học thành công", {
                    appearance: 'success',
                    autoDismiss: true,
                })
            })
            .catch((err) => {
                console.log("errors:", err);
                addToast("Xóa khóa học thất bại", {
                    appearance: 'error',
                    autoDismiss: true,
                })
            });
    }

    const renderCourses = () => {
        return courseList.map((course, index) => {
            return (
                <div class="product-item-admin mb-3 my-box-shadow">
                    <div class="item-body" onClick={() => viewCourse(course.maKhoaHoc)}>
                        <img src={course.hinhAnh} alt="" />
                        <div class="title">{course.tenKhoaHoc}</div>
                    </div>
                    <div class="item-footer">
                        <span onClick={() => deleteCourse(course.maKhoaHoc)}><i class="fa fa-trash"></i></span>
                        <span onClick={() => editCourse(course.maKhoaHoc)}><i class="fa fa-edit"></i></span>
                    </div>
                </div>
            )
        })
    }

    const changeGroup = (e) => {
        let group = e.target.value

        setDataControl({
            ...dataControl,
            maNhom: group
        })
    }

    const changeKeywork = (e) => {
        let keyword = e.target.value

        setDataControl({
            ...dataControl,
            tenKH: keyword
        })
    }

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    const changePicture = (info) => {
        console.log(pictures)
        setPictures(info.file)
    }


    const submitAddCourse = async (e) => {
        e.preventDefault()

        if (pictures == null) {
            message.error("Them hinh anh")
            return
        }

        if (!course.maKhoaHoc) {
            message.error("Them ma khoa hoc")
            return;
        }
        if (!course.tenKhoaHoc) {
            message.error("Them ten khoa hoc")
            return;
        }
        if (!course.luotXem) {
            message.error("Them ma luot xem")
            return;
        }
        if (!course.moTa) {
            message.error("Them mo ta")
            return;
        }
        if (!course.taiKhoanNguoiTao) {
            message.error("Them nguoi tao")
            return;
        }

        let form = new FormData()

        form.append("file", pictures.originFileObj)
        form.append("tenKhoaHoc", course?.tenKhoaHoc)
        form.append("maNhom", course?.maNhom)

        course.hinhAnh = pictures.name

        try {
            const formUpload = await themKhoaHoc(course)
            const imageUpload = await uploadHinhAnhKhoaHoc(form)

            dispatch(layDanhSachKhoaHocAction(dataControl.tenKH, dataControl.maNhom))

            addToast("Them khoa hoc thanh cong", {
                appearance: 'success',
                autoDismiss: true,
            })
        } catch (err) {
            console.log(err)

            addToast(err.response.data, {
                appearance: 'error',
                autoDismiss: true,
            })
        }
    }

    const submitEditCourse = async (e) => {
        e.preventDefault()

        if (!course.maKhoaHoc) {
            message.error("Them ma khoa hoc")
            return;
        }
        if (!course.tenKhoaHoc) {
            message.error("Them ten khoa hoc")
            return;
        }
        if (!course.luotXem) {
            message.error("Them ma luot xem")
            return;
        }
        if (!course.moTa) {
            message.error("Them mo ta")
            return;
        }
        if (!course.taiKhoanNguoiTao) {
            message.error("Them nguoi tao")
            return;
        }

        console.log(course)

        try {
            const formUpload = await capNhatKhoaHoc(course)

            dispatch(layDanhSachKhoaHocAction(dataControl.tenKH, dataControl.maNhom))

            addToast("Cap nhat khoa hoc thanh cong", {
                appearance: 'success',
                autoDismiss: true,
            })
        } catch (err) {
            console.log(err)

            addToast(err.response.data, {
                appearance: 'error',
                autoDismiss: true,
            })
        }
    }

    const availableUser = (maKH, e) => {

        document.querySelector(".details-course.not-registered").classList.toggle("show-list")

        layDanhSachNguoiDungChuaGhiDanhAction(maKH)
            .then((res) => {
                setAvailableUsers(res.data)

            })
            .catch((err) => {
                message.error(err.response.data)
            })
    }

    const approvedUser = (maKH, e) => {

        document.querySelector(".details-course.registered").classList.toggle("show-list")

        layDanhSachHocVienKhoaHocAction(maKH)
            .then((res) => {
                setApprovedUsers(res.data)
            })
            .catch((err) => {
                message.error(err.response.data)
            })
    }

    const pendingUser = (maKH, e) => {

        document.querySelector(".details-course.un-registered").classList.toggle("show-list")

        layDanhSachHocVienChoXetDuyetAction(maKH)
            .then((res) => {
                setPendingUsers(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                message.error(err.response.data)
            })
    }

    useEffect(() => {
        searchCourse()
    }, [dataControl])

    useEffect(() => {
        document.querySelector(".list-users .content").innerHTML = `${courseList.length} courses found`;
    }, [courseList])

    useEffect(() => {
        console.log(courseDetail)
        setCourse({
            "maKhoaHoc": courseDetail?.maKhoaHoc,
            "biDanh": courseDetail?.tenKhoaHoc,
            "tenKhoaHoc": courseDetail?.tenKhoaHoc,
            "moTa": courseDetail?.moTa,
            "luotXem": courseDetail?.luotXem,
            "danhGia": "0",
            "hinhAnh": courseDetail?.hinhAnh,
            "maNhom": courseDetail?.maNhom,
            "ngayTao": courseDetail?.ngayTao,
            "maDanhMucKhoaHoc": courseDetail.danhMucKhoaHoc?.maDanhMucKhoahoc,
            "taiKhoanNguoiTao": courseDetail?.nguoiTao?.taiKhoan
        });
    }, [courseDetail])

    return (
        <main className="main-container">
            <div className="row">
                <div className="col-md-5 pl-0">
                    <div className="list-users">
                        <div className="group-select-info d-flex justify-content-between  align-items-center p-3">
                            <button onClick={addCourse} className="btn-add shadow"><i className="fa fa-plus" /></button>
                            <div className="count-user d-flex justify-content-center align-items-center">
                                <span className="icon-avatar"><i className="fa fa-user-circle" /></span>
                                <span className="content">179 users was found!!</span>
                                <span className="icon-check"><i className="fa fa-check" /></span>
                            </div>
                            <div className="select-group" onChange={changeGroup}>
                                <select>
                                    <option value="GP01">Group 01</option>
                                    <option value="GP02">Group 02</option>
                                    <option value="GP03">Group 03</option>
                                    <option value="GP04">Group 04</option>
                                    <option value="GP05">Group 05</option>
                                    <option value="GP06">Group 06</option>
                                    <option value="GP07">Group 07</option>
                                    <option value="GP08">Group 08</option>
                                </select>
                                <div className="custom-arrow" />
                            </div>
                        </div>
                        <div className="search-user">
                            <div className="search-user--input d-flex p-3">
                                <input type="text" placeholder="Search User..." onKeyUp={changeKeywork} />
                            </div>
                        </div>
                        <div className="list-user--item">
                            <div className="user d-flex align-items-center flex-wrap px-3 py-2" data-toggle="modal" data-target="#exampleModal">
                                <Loading />
                                {renderCourses()}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-7">
                    <div className="modal-user pb-3" ref={modalBox} id="modalFormDetails">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="page-title">{pageTitle?.title}</h1>
                                <div className="modal-user--form">
                                    <div className="row">
                                        <div className={(pageTitle?.mode == "add") ? 'col-12' : 'col-lg-6'}>
                                            {(pageTitle?.mode != "add") ?
                                                <div className="image-course w-100">
                                                    <img src={courseDetail.hinhAnh} alt="image course" />
                                                    <div className="modal-user--course mt-3">
                                                        <div className="modal-user--course__pending d-flex justify-content-center align-items-center flex-column">
                                                            <div className="content d-flex justify-content-between align-items-center"
                                                                onClick={(e) => pendingUser(course.maKhoaHoc, e)}>
                                                                <p className="content-title">Pending Users</p>
                                                                <p className="note">Need approved to allow the user accessing</p>
                                                                <div className="custom-arrow-content un-registered">
                                                                    <span className="arrow-down"><i className="fa fa-angle-down" /></span>
                                                                </div>
                                                            </div>
                                                            <div className="details-course un-registered">
                                                                <div className="list-details">
                                                                    <ul>
                                                                        {pendingUsers.map((user, index) => {
                                                                            return <Fragment>
                                                                                <li className="list-details--item">
                                                                                    <div className="d-flex justify-content-center align-items-center">
                                                                                        <span className="icon-user"><i class="fa fa-folder"></i></span>
                                                                                        <span className="content">{user.taiKhoan}</span>
                                                                                        <div className="d-flex">
                                                                                            <span title="Ban" className="icon-delete"><i class="fa fa-ban"></i></span>
                                                                                            <span title="Approve" className="icon-like"><i class="fa fa-thumbs-up"></i></span>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                            </Fragment>
                                                                        })}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="modal-user--course__approved d-flex justify-content-center align-items-center flex-column">
                                                            <div className="content d-flex justify-content-between align-items-center"
                                                                onClick={(e) => approvedUser(course.maKhoaHoc, e)}>
                                                                <p className="content-title">Approved User</p>
                                                                <p className="note">The courses have already accessed by user</p>
                                                                <div className="custom-arrow-content registered">
                                                                    <span className="arrow-down"><i className="fa fa-angle-down" /></span>
                                                                </div>
                                                            </div>
                                                            <div className="details-course registered">
                                                                <div className="list-details">
                                                                    <ul>
                                                                        {approvedUsers.map((user, index) => {
                                                                            return <Fragment>
                                                                                <li className="list-details--item">
                                                                                    <div className="d-flex justify-content-center align-items-center">
                                                                                        <span className="icon-user"><i class="fa fa-folder"></i></span>
                                                                                        <span className="content">{user.taiKhoan}</span>
                                                                                        <span title="Ban" className="icon-delete"><i class="fa fa-ban"></i></span>
                                                                                    </div>
                                                                                </li>
                                                                            </Fragment>
                                                                        })}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="modal-user--course__available d-flex justify-content-center align-items-center flex-column">
                                                            <div className="content d-flex justify-content-between align-items-center"
                                                                onClick={(e) => availableUser(course.maKhoaHoc, e)}>
                                                                <p className="content-title">Available Users</p>
                                                                <p className="note">Registing a course quickly for user</p>
                                                                <div className="custom-arrow-content not-registered">
                                                                    <span className="arrow-down"><i className="fa fa-angle-down" /></span>
                                                                </div>
                                                            </div>
                                                            <div className="details-course not-registered">
                                                                <div className="list-details">
                                                                    <ul>
                                                                        {availableUsers.map((user, index) => {
                                                                            return <Fragment>
                                                                                <li className="list-details--item">
                                                                                    <div className="d-flex justify-content-center align-items-center">
                                                                                        <span className="icon-user"><i class="fa fa-folder"></i></span>
                                                                                        <span className="content">{user.taiKhoan}</span>
                                                                                        <span title="Approve" className="icon-like"><i class="fa fa-thumbs-up"></i></span>
                                                                                    </div>
                                                                                </li>
                                                                            </Fragment>
                                                                        })}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                : ""}
                                        </div>
                                        <div className={(pageTitle?.mode == "add") ? 'col-12' : 'col-lg-6'}>
                                            <form onSubmit={(pageTitle?.mode != "add") ? submitEditCourse : submitAddCourse}>
                                                <Form.Item>
                                                    <Input placeholder="Ma khoc hoc" onChange={handleChange} {...disable} id="maKhoaHoc" value={course.maKhoaHoc} />
                                                </Form.Item>
                                                <Form.Item>
                                                    <Input
                                                        type="text"
                                                        onChange={handleChange} {...disable} id="tenKhoaHoc"
                                                        placeholder="Ten khoa hoc"
                                                        value={course.tenKhoaHoc}
                                                    />
                                                </Form.Item>
                                                <Form.Item >
                                                    <Input
                                                        type="text"
                                                        onChange={handleChange} {...disable} id="taiKhoanNguoiTao"
                                                        placeholder="Nguoi tao"
                                                        value={course.taiKhoanNguoiTao}
                                                    />
                                                </Form.Item>
                                                <Form.Item>
                                                    <DatePicker className="form-control" onChange={(date, dateStr) => { setCourse({ ...course, "ngayTao": dateStr }) }} {...disable} defaultValue={moment(new Date(), 'DD/MM/YYYY')} format={'DD/MM/YYYY'} />
                                                </Form.Item>
                                                <Form.Item>
                                                    <Input
                                                        type="text"
                                                        placeholder="Luot xem"
                                                        onChange={handleChange} {...disable} id="luotXem"
                                                        value={course.luotXem}
                                                        className="mt-2"
                                                    />
                                                </Form.Item>
                                                <Form.Item>
                                                    <Select className="form-control" value={course.maNhom} onChange={(value) => setCourse({ ...course, "maNhom": value })} id="maLoaiNguoiDung" style={{ width: '100%' }} {...disable}>
                                                        <Option value="GP01">Group 01</Option>
                                                        <Option value="GP02">Group 02</Option>
                                                        <Option value="GP03">Group 03</Option>
                                                        <Option value="GP04">Group 04</Option>
                                                        <Option value="GP05">Group 05</Option>
                                                        <Option value="GP06">Group 06</Option>
                                                        <Option value="GP07">Group 07</Option>
                                                        <Option value="GP08">Group 08</Option>
                                                    </Select>
                                                </Form.Item>
                                                <Form.Item>
                                                    <Select value={course.maDanhMucKhoaHoc} onChange={(value) => setCourse({ ...course, "maDanhMucKhoaHoc": value })} id="maLoaiNguoiDung" style={{ width: '100%' }} {...disable}>
                                                        <Option value="BackEnd">Lập trình Backend</Option>
                                                        <Option value="Design">Thiết kế Web</Option>
                                                        <Option value="DiDong">Lập trình di động</Option>
                                                        <Option value="FrontEnd">Lập trình Front end</Option>
                                                        <Option value="FullStack">Lập trình Full Stack</Option>
                                                        <Option value="TuDuy">Tư duy lập trình</Option>
                                                    </Select>
                                                </Form.Item>
                                                <Form.Item>
                                                    <TextArea placeholder="Mo ta" rows={4} onChange={handleChange} {...disable} id="moTa" className="mt-2" value={course.moTa} />
                                                </Form.Item>
                                                {(pageTitle?.mode == "add") ? <Form.Item><Upload
                                                    name="avatar"
                                                    listType="picture-card"
                                                    className="avatar-uploader"
                                                    showUploadList={false}
                                                    onChange={changePicture}
                                                >
                                                    +
                                                </Upload></Form.Item> : ""}
                                                {(pageTitle?.mode == "add" || pageTitle?.mode == "edit") ?
                                                    <Form.Item>
                                                        <Button type="submit" htmlType="submit" className="form-control">
                                                            Submit
                                                        </Button>
                                                    </Form.Item>
                                                    : ""}
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainCourseManage;
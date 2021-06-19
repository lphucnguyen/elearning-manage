import React, { useEffect, useRef, useState } from 'react'
import Loading from '../../../../common/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux'
import { layDanhSachKhoaHocAction, xoaKhoaHoc, uploadHinhAnhKhoaHoc, themKhoaHoc } from '../../../../redux/actions/CourseAction'
import { layChiTietKhoaHoc } from '../../../../redux/actions/CourseAction';
import { useToasts } from 'react-toast-notifications'
import ImageUploader from 'react-images-upload';
import './MainCourseManage.scss'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { Select } from 'antd';
import { Typography } from 'antd';


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

    let [disable, setDisabled] = useState({});
    let [course, setCourse] = useState({})
    let [pageTitle, setPageTitle] = useState()
    let [pictures, setPictures] = useState(null)

    let [addUser, setAddUser] = useState({})
    let [updateUser, setUpdateUser] = useState({})

    let [startDate, setStartDate] = useState(new Date());

    const handleChange = (e) => {
        const value = e.target.id

        setCourse({
            ...course,
            [value]: e.target.value
        });
    }

    const renderPages = () => {
        console.log("Render")
    }

    const searchCourse = () => {
        dispatch(layDanhSachKhoaHocAction(dataControl.tenKH, dataControl.maNhom))
    }

    const viewCourse = (maKH) => {
        console.log(maKH)
        layChiTietKhoaHoc(maKH)
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

        setDisabled({ disabled: "disabled" })

        setPageTitle({ mode: "view", "title": "Course Information" })
    }

    const editCourse = (maKH) => {
        console.log(maKH)
        layChiTietKhoaHoc(maKH)
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
        setCourse({})
        setDisabled({})
        setPageTitle("Add Course Information")

        setStartDate(new Date())

        setPageTitle({ mode: "add", "title": "Add Course Information" })


        // document.getElementById("maKhoaHoc").value = ""
        // document.getElementById("tenKhoaHoc").value = ""
        // document.getElementById("hoTen").value = ""
        // document.getElementById("luotXem").value = ""
        // document.getElementById("maLoaiNguoiDung").getElementsByTagName("option")[0].selected = true;
        // document.getElementById("moTa").value = ""
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

    const onDrop = (picture) => {
        setPictures(picture)

        console.log(pictures)
    }


    const submitAddCourse = async (e) => {
        e.preventDefault()

        let error = false
        let errorStr = ""

        if (pictures == null) {
            addToast("Them hinh anh", {
                appearance: 'error',
                autoDismiss: true,
            })

            return
        }

        let form = new FormData()

        form.append("file", pictures[pictures.length - 1])
        form.append("tenKhoaHoc", course?.tenKhoaHoc)
        form.append("maNhom", course?.maNhom)

        const imageUpload = await uploadHinhAnhKhoaHoc(form)

        if (imageUpload.status == "200") {

            let addCourseJson = {
                "maKhoaHoc": course.maKhoaHoc,
                "biDanh": course.tenKhoaHoc,
                "tenKhoaHoc": course.tenKhoaHoc,
                "moTa": course.moTa,
                "luotXem": course.luotXem,
                "danhGia": course.danhGia,
                "hinhAnh": pictures[0].name,
                "maNhom": course.maNhom,
                "ngayTao": course.ngayTao,
                "maDanhMucKhoaHoc": course.maDanhMucKhoaHoc,
                "taiKhoanNguoiTao": course.nguoiTao?.taiKhoan
            }

            const formUpload = await themKhoaHoc(addCourseJson)

            if (formUpload.status == "200") {
                addToast("Them khoa hoc thanh cong", {
                    appearance: 'success',
                    autoDismiss: true,
                })
            }
        }

        addToast("Them khoa hoc that bai", {
            appearance: 'error',
            autoDismiss: true,
        })

        console.log(e)
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
            ...courseDetail
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
                                <div className="modal-user--form">
                                    <h1>{pageTitle?.title}</h1>
                                    {(pageTitle?.mode != "add") ?
                                        <div className="image-course">
                                            <img src={courseDetail.hinhAnh} alt="image course" />
                                        </div>
                                        : ""}

                                    <Form
                                        name="normal_login"
                                        className="login-form"
                                        initialValues={{ remember: true }}
                                        onFinish={onFinish}

                                    >
                                        <Form.Item
                                            name="username"
                                            rules={[{ required: true, message: 'Please input your Username!' }]}
                                        >
                                            <Input placeholder="Ma khoc hoc" onChange={handleChange} {...disable} id="maKhoaHoc" defaultValue={courseDetail.maKhoaHoc} />
                                        </Form.Item>
                                        <Form.Item
                                            name="text"
                                            rules={[{ required: true, message: 'Please input your Password!' }]}
                                        >
                                            <Input
                                                type="text"
                                                placeholder="Ten khoa hoc"
                                                onChange={handleChange} {...disable} id="tenKhoaHoc"
                                                defaultValue={courseDetail.tenKhoaHoc}
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <DatePicker onChange={handleChange} {...disable} className="form-control" id="ngayTao" defaultValue={moment(new Date(), 'DD/MM/YYYY')} format={'DD/MM/YYYY'} />
                                        </Form.Item>
                                        <Form.Item>
                                            <Select defaultValue="HV" id="maLoaiNguoiDung" className="form-control" style={{ width: 120 }} {...disable}>
                                                <Option value="HV" className="form-control" >Sinh Vien</Option>
                                                <Option value="GV" className="form-control"  >Giao Vu</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item
                                            name="luotXem"
                                            rules={[{ required: true, message: 'Please input your Password!' }]}
                                        >
                                            <Input
                                                type="text"
                                                placeholder="Luot xem"
                                                onChange={handleChange} {...disable} id="luotXem"
                                                defaultValue={courseDetail.luotXem}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="danhGia"
                                            rules={[{ required: true, message: 'Please input your Password!' }]}
                                        >
                                            <Input
                                                type="text"
                                                placeholder="Danh gia"
                                                onChange={handleChange} {...disable} id="danhGia"
                                                defaultValue={courseDetail.luotXem}
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <Select defaultValue="GP01" id="maLoaiNguoiDung" className="form-control" style={{ width: 120 }} {...disable}>
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
                                            <TextArea rows={4} onChange={handleChange} {...disable} id="moTa" value={courseDetail.moTa} />
                                        </Form.Item>
                                        {(pageTitle?.mode == "add") ? <Form.Item><ImageUploader
                                            withIcon={true}
                                            buttonText='Choose images'
                                            onChange={onDrop}
                                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                            maxFileSize={5242880}
                                            singleImage={false}
                                        /></Form.Item> : ""}
                                        {(pageTitle?.mode == "add" || pageTitle?.mode == "edit") ?
                                            <Form.Item>
                                                <Button type="primary" htmlType="submit" className="form-control">
                                                    Submit
                                                </Button>
                                            </Form.Item>
                                        : ""}
                                    </Form>
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
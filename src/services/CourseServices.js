import axios from "axios";
import {domain, token} from '../configs/settings';
import React from 'react'

function CourseServices() {

    const layDanhSachKhoaHoc = (data, group) => {
        return axios ({
            url: `${domain}/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${data}&MaNhom=${group}`,
            method: 'GET'
        });
    }

    const layDanhSachKhoaHoc_PhanTrang = (group,page) => {
      return axios({
        url: `${domain}/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=6&MaNhom=${group}`,
        method: "GET",
      });
    };

    // const timKiemKhoaHoc = (data, group) => {
    //     return axios ({
    //         url: `${domain}/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${data}&MaNhom=${group}`,
    //         method: 'GET'
    //     });
    // }
    
    const layChiTietKhoaHoc = (group) => {
        return axios ({
            url: `${domain}/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${group}`,
            method: 'GET'
        });
    }
    
    const layDanhMucKhoaHoc = () => {
        return axios ({
            url: `${domain}/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
            method: 'GET'
        });
    }
    
    const layKhoaHocTheoDanhMuc = () => {
        return axios ({
            url: `${domain}/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${group}&MaNhom=${group}`,
            method: 'GET'
        });
    }


    const dangKyKhoaHoc = ({maKhoaHoc,taiKhoan}) => {
        console.log({maKhoaHoc,taiKhoan})
        return axios({
          url: `${domain}/api/QuanLyKhoaHoc/DangKyKhoaHoc`,
          method: "POST",
          data:{maKhoaHoc,taiKhoan},
          headers: { Authorization: `Bearer ${token}` },
        });
    };
      
    const ghiDanhKhoaHoc = ({maKhoaHoc,taiKhoan}) => {
        return axios({
            url: `${domain}/api/QuanLyKhoaHoc/GhiDanhKhoaHoc`,
            method: "POST",
            data:{maKhoaHoc,taiKhoan},
            headers: { Authorization: `Bearer ${token}` },
        });
    };

    const huyGhiDanh = ({maKhoaHoc,taiKhoan}) => {
        return axios({
            url: `${domain}/api/QuanLyKhoaHoc/HuyGhiDanh`,
            method: "POST",
            data:{maKhoaHoc,taiKhoan},
            headers: { Authorization: `Bearer ${token}` },
        });
    };

    const themKhoaHoc = (course) => {
        return axios({
            url: `${domain}/api/QuanLyKhoaHoc/ThemKhoaHoc`,
            method: "POST",
            data: course,
            headers: { Authorization: `Bearer ${token}` },
        });
    };
    
    const capNhatKhoaHoc = (course) => {
        return axios({
            url: `${domain}/api/QuanLyKhoaHoc/CapNhatKhoaHoc`,
            method: "PUT",
            data: course,
            headers: { Authorization: `Bearer ${token}` },
        });
    };

    const xoaKhoaHoc = (id) => {
        return axios({
            url: `${domain}/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${id}`,
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
        });
    };

    const uploadHinhAnhKhoaHoc = (form) => {
        return axios({
            url: `${domain}/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc`,
            method: "POST",
            data:form,
        });
    };

    return (
        <div>
            
        </div>
    )
}

export default  CourseServices;
import axios from "axios";
import {domain, token} from '../configs/settings';

export class CourseServices {

    layDanhSachKhoaHoc = (data, group) => {
        return axios ({
            url: `${domain}/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc`,
            method: 'GET'
        });
    }

    layDanhSachKhoaHoc_PhanTrang = (group,page) => {
      return axios({
        url: `${domain}/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=6&MaNhom=${group}`,
        method: "GET",
      });
    };

    // timKiemKhoaHoc = (data, group) => {
    //     return axios ({
    //         url: `${domain}/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${data}&MaNhom=${group}`,
    //         method: 'GET'
    //     });
    // }
    
    layChiTietKhoaHoc = (group) => {
        return axios ({
            url: `${domain}/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${group}`,
            method: 'GET'
        });
    }
    
    layDanhMucKhoaHoc = () => {
        return axios ({
            url: `${domain}/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
            method: 'GET'
        });
    }
    
    layKhoaHocTheoDanhMuc = (data, group) => {
        return axios ({
            url: `${domain}/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${data}&MaNhom=${group}`,
            method: 'GET'
        });
    }


    dangKyKhoaHoc = ({maKhoaHoc,taiKhoan}) => {
        console.log({maKhoaHoc,taiKhoan})
        return axios({
          url: `${domain}/api/QuanLyKhoaHoc/DangKyKhoaHoc`,
          method: "POST",
          data:{maKhoaHoc,taiKhoan},
          headers: { Authorization: `Bearer ${token}` },
        });
    };
      
    ghiDanhKhoaHoc = ({maKhoaHoc,taiKhoan}) => {
        return axios({
            url: `${domain}/api/QuanLyKhoaHoc/GhiDanhKhoaHoc`,
            method: "POST",
            data:{maKhoaHoc,taiKhoan},
            headers: { Authorization: `Bearer ${token}` },
        });
    };

    huyGhiDanh = ({maKhoaHoc,taiKhoan}) => {
        return axios({
            url: `${domain}/api/QuanLyKhoaHoc/HuyGhiDanh`,
            method: "POST",
            data:{maKhoaHoc,taiKhoan},
            headers: { Authorization: `Bearer ${token}` },
        });
    };

    themKhoaHoc = (course) => {
        return axios({
            url: `${domain}/api/QuanLyKhoaHoc/ThemKhoaHoc`,
            method: "POST",
            data: course,
            headers: { Authorization: `Bearer ${token}` },
        });
    };
    
    capNhatKhoaHoc = (course) => {
        return axios({
            url: `${domain}/api/QuanLyKhoaHoc/CapNhatKhoaHoc`,
            method: "PUT",
            data: course,
            headers: { Authorization: `Bearer ${token}` },
        });
    };

    xoaKhoaHoc = (id) => {
        return axios({
            url: `${domain}/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${id}`,
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
        });
    };

    uploadHinhAnhKhoaHoc = (form) => {
        return axios({
            url: `${domain}/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc`,
            method: "POST",
            data:form,
        });
    };
}

export const courseServices = new CourseServices();
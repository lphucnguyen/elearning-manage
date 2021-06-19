import axios from "axios";
import {domain, token} from '../configs/settings';

export class UserServices {

    dangKy = (data) => {
        return axios({
          url: `${domain}/api/QuanLyNguoiDung/DangKy`,
          method: "POST",
          data,
        });
    };
    dangNhap = ({ taiKhoan, matKhau }) => {
        return axios({
            url: `${domain}/api/QuanLyNguoiDung/DangNhap`,
            method: "POST",
            data: { taiKhoan, matKhau },
        });
    };
    thongTinTaiKhoan = ({taiKhoan,matKhau}) => {
        return axios({
            url: `${domain}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
            method: "POST",
            data: {taiKhoan,matKhau},
            headers: { Authorization: `Bearer ${token}` },
        });
    };
    
    layDanhSachNguoiDung = (group, username) => {
        
        if (username === "") {
            return axios({
                url: `${domain}/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${group}`,
                method: "GET",
            });
        }

        return axios({
            url: `${domain}/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${group}&tuKhoa=${username}`,
            method: "GET",
        });
    };
  
    timKiemDanhSachNguoiDung = (group) => {
        return axios({
          url: `${domain}/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${group}`,
          method: "GET",
        });
      };
    
    layDanhSachNguoiDung_PhanTrang = (group,page) => {
        return axios({
            url: `${domain}/api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=${group}&page=${page}&pageSize=20`,
            method: "GET",
        });
    };

    themNguoiDung = (values) => {
        return axios({
            url: `${domain}/api/QuanLyNguoiDung/ThemNguoiDung`,
            method: "POST",
            data: values,
            headers: { Authorization: `Bearer ${token}` },
        });
    };
    capNhatThongTinNguoiDung = (value) => {
        console.log(value.maNhom);
        return axios({
            url: `${domain}/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
            method: "PUT",
            data: value,
            headers: { Authorization: `Bearer ${token}` },
        });
    };
    xoaNguoiDung = (id) => {
        return axios({
            url: `${domain}/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`,
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
        });
    };

    layDanhSachKhoaHocChuaGhiDanh = ({taiKhoan}) => {
        return axios({
            url: `${domain}/api/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh`,
            method: "POST",
            data: {taiKhoan},
            headers: { Authorization: `Bearer ${token}` },
        });
    };

    layDanhSachKhoaHocChoXetDuyet = ({taiKhoan}) => {
        return axios({
            url: `${domain}/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet`,
            method: "POST",
            data: {taiKhoan},
            headers: { Authorization: `Bearer ${token}` },
        });
    };

    layDanhSachKhoaHocDaXetDuyet = ({taiKhoan}) => {
        return axios({
            url: `${domain}/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`,
            method: "POST",
            data: {taiKhoan},
            headers: { Authorization: `Bearer ${token}` },
        });
    };
}

// export default UserServices;
export const userServices = new UserServices();
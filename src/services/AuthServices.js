import axios from "axios";
import {domain, token} from '../configs/settings';

export class AuthServices {

    login = (username, password) => {
        return axios({
            url: `${domain}/api/QuanLyNguoiDung/DangNhap`,
            method: "POST",
            data:{"taiKhoan" : username,"matKhau" : password},
            headers: {
              "Content-Type" : "application/json",
              "Content-Length" : 255,
              "charset" : "utf8"
            }
          });
    }

    register = (username, password, hoTen, sdt, maNhom, email) => {
      return axios({
          url: `${domain}/api/QuanLyNguoiDung/DangKy`,
          method: "POST",
          data:{
            "taiKhoan": username,
            "matKhau": password,
            "hoTen": hoTen,
            "soDT": sdt,
            "maNhom": maNhom,
            "email": email
          },
          headers: {
            "Content-Type" : "application/json",
            "Content-Length" : 255,
            "charset" : "utf8"
          }
        });
    }
}

export const authServices = new AuthServices();
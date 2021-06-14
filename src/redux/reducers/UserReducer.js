let userUpdate = {
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maNhom: "GP01",
    email: "",
    xacNhan: "",
    maLoaiNguoiDung: "HV",
};

let group = "GP01";

const stateDefault = {
    userUpdate: userUpdate,
    group:group
}

export const UserReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'CAP_NHAT_NGUOI_DUNG': {
            console.log(action.data);
            return {...state, userUpdate: {...action.data}};
        }
        case 'CHON_NHOM': {
            return {...state, group: action.data};
        }
        default: return {...state};
    }
}
import axios from "axios"

const server = "https://localhost:7076/api/"

export default {

    danhsachThamSo: server + 'ThamSo/DanhSach',
    chitietThamSo: server + 'ThamSo/ChiTiet',
    themmoiThamSo: server + 'ThamSo/ThemMoi',
    capnhatThamSo: server + 'ThamSo/CapNhap',
    xoaThamSo: server + 'ThamSo/Xoa?Id_ThamSo=',


    // Danh sách tham so
    DanhSachThamSo: async function (payload) {
        // khoi tao bien res
        let res = await axios.get(this.danhsachThamSo, payload)
        //tra ve bien res ket qua phan hoi cua api thong qua thu vien axios
        return res
    },
    ChiTietThamSo: async function (payload) {

        let res = await axios.get(this.chitietThamSo, payload)

        return res
    },
    ThemMoiThamSo: async function (payload) {
        let res = await axios.post(this.themmoiThamSo, payload)
        return res
    },
    CapNhatThamSo: async function (payload) {
        let res = await axios.put(this.capnhatThamSo, payload)
        return res
    },
    XoaThamSo: async function (payload) {
        let res = await axios.delete(this.xoaThamSo + payload)
        return res
    },


}
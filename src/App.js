// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React from 'react';
// import "./mycss.css";
// import MenuEdit from "../src/menu/";
// const { Header, Content, Sider } = Layout;


// const items1 = ['1', '2', '3'].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));
// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
//   const key = String(index + 1); 
//   return {
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: `subnav ${key}`,
//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = index * 4 + j + 1;
//       return {
//         key: subKey,
//         label: `option${subKey}`,
//       };
//     }),
//   };
// });

// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";
import Home from "./componets/home";
import ThamSo from "./componets/he-thong/ql-he-thong";
import PhanQuyen from "./componets/he-thong/phan-quyen";
import ChucNang from "./componets/he-thong/chuc-nang";
import CauHinh from "./componets/he-thong/cau-hinh";
import NguoiDung from "./componets/he-thong/nguoi-dung";
//
import BacHoc from "./componets/danh-muc/bac-hoc";
import Truong from "./componets/danh-muc/truong";
import KhoiHoc from "./componets/danh-muc/khoi-hoc";
import MonHoc from "./componets/danh-muc/mon-hoc";
//
import Mucdo from "./componets/cau-hoi/muc-do";
import Nhan from "./componets/cau-hoi/nhan";
import Biensoan from "./componets/cau-hoi/bien-soan";
import Matran from "./componets/cau-hoi/ma-tran";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="ql-he-thong" element={<ThamSo />}></Route>
        <Route path="phan-quyen" element={<PhanQuyen />}></Route>
        <Route path="chuc-nang" element={<ChucNang />}></Route>
        <Route path="cau-hinh" element={<CauHinh />}></Route>
        <Route path="nguoi-dung" element={<NguoiDung />}></Route>
        
        <Route path="truong" element={<Truong/>}></Route>
        <Route path="khoi-hoc" element={<KhoiHoc/>}></Route>
        <Route path="mon-hoc" element={<MonHoc/>}></Route>
        <Route path="bac-hoc" element={<BacHoc/>}></Route>

        <Route path="muc-do" element={<Mucdo/>}></Route>
        <Route path="nhan" element={<Nhan/>}></Route>
        <Route path="bien-soan" element={<Biensoan/>}></Route>
        <Route path="ma-tran" element={<Matran/>}></Route>


          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
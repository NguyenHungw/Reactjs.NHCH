import {
    MailOutlined,
    SettingOutlined,
    AppstoreOutlined,
  } from "@ant-design/icons";
  import { useState } from "react";
  import { Layout, Menu } from "antd";

// import Link from "antd/es/typography/Link";
import { Link } from 'react-router-dom'
  const { Sider } = Layout;
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem(<b>Quản lý hệ thống</b> , "sub4", <SettingOutlined />  , [
        getItem(<Link to="nguoi-dung">Quản lý người dùng</Link>, "9"),
        getItem(<Link to="chuc-nang">Quản lý chức năng</Link>, "10"),
        getItem(<Link to="phan-quyen">Phân Quyền</Link>, "11"),
        getItem(<Link to="cau-hinh">Quản lý cấu hình</Link>, "12"),
        getItem(<Link to="ql-he-thong">Quản lý hệ thống</Link>, "13"),
      ]),
    getItem(<b>Quản lý danh mục</b>, "sub2", <AppstoreOutlined />, [
      getItem(<Link to="bac-hoc">Danh mục bậc học</Link>, "5"),
      getItem(<Link to="truong">Danh mục trường</Link>, "6"),
      getItem(<Link to="khoi-hoc">Danh mục khối học</Link>, "7"),
      getItem(<Link to="mon-hoc">Danh mục môn học</Link>, "8"),
      
    ]),
    getItem(<b>Ngân Hàng Câu Hỏi</b>, "sub1", <MailOutlined />, [
        getItem(<Link to="muc-do">Quản lý mức độ câu hỏi</Link>, "1"),
        getItem(<Link to="nhan">Quản lý nhãn câu hỏi</Link>, "2"),
        getItem(<Link to="bien-soan">Biên soạn ngân hàng câu hỏi</Link>, "3"),
        getItem(<Link to="ma-tran">Quản lý ma trận đề</Link>, "4"),
      ]),
  ];
  
  // submenu keys of first level
  const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
  const Index = () => {
    const [openKeys, setOpenKeys] = useState(["sub1"]);
    const onOpenChange = (keys) => {
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    };
    return (
      <Sider
        width="auto"
        style={{
          background: "#ffff",
        }}
      >
        <div style={{ padding : " 0 28px", fontWeight: "bold"}}>
          Dashbloard
        </div>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{
            width: 266,
          }}
          items={items}
        />
      </Sider>
    );
  };
  export default Index;
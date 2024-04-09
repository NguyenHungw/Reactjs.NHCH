import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import "../../style/mycss.css";
import MenuEdit from "../../menu";
import { Outlet } from 'react-router-dom';
const { Header, Content, Sider, Footer } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});


function index(props) {
  return (
    <Layout>
      <Header className="header , titlaMain" style={{ background: "#ffff" }}>
        <div>Ngân Hàng Câu Hỏi</div>
      </Header>
      <Layout style={{ height: "850px" }}>
        <MenuEdit />
        <Layout
          style={{
            padding: '0 24px 24px',
            minHeight: 700
          }}
        >

          <Outlet />
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );

}

export default index;
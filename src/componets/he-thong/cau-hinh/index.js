import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Sider } = Layout;

function index(props) {
  return (
    <div>

      {"  "}
      <h5>QUẢN LÝ HỆ THỐNG</h5>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: "#ffff",
        }}
      >

        Quản lý cấu hình

      </Content>

    </div>);
}

export default index;
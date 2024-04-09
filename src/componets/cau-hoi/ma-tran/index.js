import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Sider } = Layout;

function index(props) {
    return (
    <div>
   
            {"  "}
            <h5>NGÂN HÀNG CÂU HỎI</h5>
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  background: "#ffff",
                }}
              >

                Quản lý ma trận đề
              </Content>

    </div>);
}

export default index;
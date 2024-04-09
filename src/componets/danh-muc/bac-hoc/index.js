import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Sider } = Layout;

function index(props) {
    return (
    <div>
   
            {"  "}
            <h5>QUẢN LÝ DANH MỤC</h5>
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  background: "#ffff",
                }}
              >

                Danh mục bậc học
              </Content>

    </div>);
}

export default index;
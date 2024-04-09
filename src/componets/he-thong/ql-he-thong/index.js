import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, Table, Button } from 'antd';

const { Header, Content, Sider } = Layout;

const DuLieuNguoiDung1 = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '3',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '4',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '5',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '6',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const DuLieuNguoiDung2 = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '3',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

function Index(props) {
  const [DanhSachNguoiDung, setDanhSachNguoiDung] = useState(DuLieuNguoiDung1);

  function updateNguoiDung() {
    setDanhSachNguoiDung(DuLieuNguoiDung1);
  }

  function resetNguoiDung() {
    setDanhSachNguoiDung(DuLieuNguoiDung2);
  }

  return (
    <div>
      {"  "}
      <h5>QUẢN LÝ HỆ THỐNG</h5>
      <button onClick={updateNguoiDung}>updateNguoiDung</button>
      <button onClick={resetNguoiDung}>rsNguoiDung</button>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 500,
          background: "#ffff",
        }}

      >
        <Table
          rowKey={(record) => record.key}
          columns={columns}
          dataSource={DanhSachNguoiDung}
          bordered
        />
      </Content>
    </div>
  );
}

export default Index;

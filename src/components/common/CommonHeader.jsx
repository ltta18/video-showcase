import {
  React,
} from 'react';
import {
  Menu,
  Dropdown,
} from 'antd';
import {
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { Header } from 'antd/lib/layout/layout';
import Search from 'antd/lib/input/Search';
import './common.css';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        Profile
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Sign out
      </a>
    </Menu.Item>
    <Menu.Divider />
  </Menu>
);

const onSearch = (value) => console.log(value);

const CommonHeader = () => (
  <Header className="header fl">
    <div className="logo">Haydenfilms</div>
    <Menu mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">Movies</Menu.Item>
      <Menu.Item key="3">Popular</Menu.Item>
    </Menu>
    <div className="common-header-right fl-center">
      <Search placeholder="Enter movie's name" onSearch={onSearch} enterButton />
      <Dropdown theme="dark" overlay={menu} className="fl-center common-dropdown">
        <button type="button" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <UserOutlined className="common-icon" />
          <DownOutlined className="common-icon" />
        </button>
      </Dropdown>
    </div>
  </Header>
);

export default CommonHeader;

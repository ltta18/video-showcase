import { Header } from 'antd/lib/layout/layout';
import { Menu, Dropdown } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import "./common.css";

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

function CommonHeader() {
  return (
        <Header className="header">
          <div className="logo">Haydenfilms</div>
          <Menu mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Movies</Menu.Item>
            <Menu.Item key="3">Popular</Menu.Item>
          </Menu>
          <Dropdown theme="dark" overlay={menu} className="common-dropdown">
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              <UserOutlined className="common-icon" />
              <DownOutlined className="common-icon" />
            </a>
          </Dropdown>
        </Header>
  );
}

export default CommonHeader;

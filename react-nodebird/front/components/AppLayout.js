import React from 'react';
import Link from 'next/link';
import { Menu, Input } from "antd";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode='horizontal'>
        <Menu.Item key='home'><Link href='/'><a>노드버드</a></Link></Menu.Item>
        <Menu.Item key='profile'><Link href='/profile'><a>프로필</a></Link></Menu.Item>
        <Menu.Item key='mail'>
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
};

export default AppLayout;

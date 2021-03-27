import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Button, Row, Col, Card, Avatar } from "antd";

const dummy = {
  nickname: 'Ubar',
  Post: [],
  Followings: [],
  Followers: [],
};

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
      <Link href='/signup'><a><Button>회원가입</Button></a></Link>
      <Row>
        <Col xs={24} md={6}>
          <Card
            actions={[
              <div key={"twit"}>짹짹<br />{dummy.Post.length}</div>,
              <div key={"twit"}>팔로잉<br />{dummy.Followings.length}</div>,
              <div key={"twit"}>팔로워<br />{dummy.Followers.length}</div>
            ]}
          >
            <Card.Meta
              avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
              title={dummy.nickname}
            />
          </Card>
        </Col>
        <Col xs={24} md={12}>

        </Col>
        <Col xs={24} md={6}>

        </Col>
      </Row>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.element,
};

export default AppLayout;

import React from 'react';
import {Button, Form, Input, Card,
  Icon, Avatar} from "antd";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: 'Austin',
    },
    content: '첫 번째 게시글',
  }],
};

const Home = () => {
  return (
    <div>
      {dummy.isLoggedIn &&
        <Form
          encType="multipart/form-data"
          style={{ margin: '10px 0 20px' }}
        >
          <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?"></Input.TextArea>
          <div>
            <input type="file" multiple hidden />
            <Button>이미지 업로드</Button>
            <Button type="primary" style={{ float: 'right' }} htmlType="submit">짹짹</Button>
          </div>
          <div>
            {dummy.imagePaths.map((imagePath, index) => {
              return (
                <div key={imagePath} style={{ display: 'inline-block' }}>
                  <img src={'http://localhost:3065/' + imagePath} style={{ width: '200px' }} alt={imagePath} />
                  <div>
                    <Button>제거</Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Form>
      }
      {dummy.mainPosts.map((c) => {
        return (
          <Card
            key={+c.createAt}
            cover={c.img && <img alt="example" src={c.img} />}
            actions={[
              <Icon type="retweet" key="retweet" />,
              <Icon type="heart" key="heart" />,
              <Icon type="message" key="message" />,
              <Icon type="ellipsis" key="ellipsis" />,
            ]}
            extra={<Button>팔로우</Button>}
          >
            <Card.Meta
              avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
              title={c.User.nickname}
              description={c.content}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default Home;

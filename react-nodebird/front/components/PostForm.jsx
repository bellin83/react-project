import {Button, Form, Input} from "antd";
import React from "react";

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

const PostForm = () => {
  return(
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
  );
};

export default PostForm;
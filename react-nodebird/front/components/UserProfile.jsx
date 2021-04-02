import {Avatar, Card} from "antd";
import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { user } = useSelector(state => state.user);

  return (
    <Card
      actions={[
        <div key={"twit"}>짹짹<br/>{user.Post.length}</div>,
        <div key={"twit"}>팔로잉<br/>{user.Followings.length}</div>,
        <div key={"twit"}>팔로워<br/>{user.Followers.length}</div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{user.nickname[0]}</Avatar>} g
        title={user.nickname}
      />
    </Card>
  );
};

export default UserProfile;

import {Avatar, Button, Card} from "antd";
import React, {useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOutAction } from "../reducers/user";

const UserProfile = () => {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logOutAction);
  }, []);

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
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;

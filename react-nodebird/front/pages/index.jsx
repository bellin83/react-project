import React, {useEffect} from 'react';
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import {useDispatch, useSelector} from "react-redux";
import {loginAction, logOutAction} from "../reducers/user";

const Home = () => {
  const { isLoggedIn } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);

  return (
    <div>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((mainPost) => {
        return <PostCard key={mainPost} post={mainPost} />;
      })}
    </div>
  );
};

export default Home;

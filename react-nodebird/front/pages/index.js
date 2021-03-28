import React from 'react';
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

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
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map((mainPost) => {
        return <PostCard key={mainPost} post={mainPost} />;
      })}
    </div>
  );
};

export default Home;

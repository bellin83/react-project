import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import AppLayout from "../components/AppLayout";
import 'antd/dist/antd.css';
import 'antd/dist/antd.js';

const Home = () => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
      </Head>
      <AppLayout>
        <Link href='/about'><a>about</a></Link>
        <div>Hello, Next!</div>
      </AppLayout>
    </>
  );
};

export default Home;

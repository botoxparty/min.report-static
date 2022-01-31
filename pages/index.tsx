import type { NextPage } from 'next'
import Head from 'next/head'

import * as React from 'react';
import styled from 'styled-components';
// import FeaturedPost from './PostList/FeaturedPost';
// import useMetaTags from 'react-metatags-hook';
import PostList from '../components/PostList';

import useScrollToTop from '../hooks/useScrollToTop';
import { WordpressMix } from '../services/wordpress';

import posts from '../data/all-posts.json'
import mixes from '../data/all-mixes.json'
import Logo from '../components/Logo';

var ReactGA = require('react-ga');


const SCHead = styled.header`
  width: 100%;
  text-align: center;
  margin: 1rem 0;
`;

const Home: NextPage = () => {
  useScrollToTop();
  // useMetaTags(
  //   {
  //     title: title + ' - min.report',
  //     openGraph: {
  //       title,
  //       image: `${window.location.protocol}//${window.location.host}${logo}`,
  //       site_name: title,
  //     },
  //     twitter: {
  //       card: 'summary',
  //       title: title,
  //     },
  //   },
  //   [posts.length]
  // );

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  if (!posts.length) {
    return <div></div>;
  }
  return (
    <div>
      <Head>
        <title>Minority Report - min.report</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <SCHead>
        <Logo />
        <p>
          This is an archive of content from Minority Report.
        </p>
      </SCHead>
      <PostList
        posts={posts as any[]}
        mixes={mixes as WordpressMix[]}
      />
    </div>
  )
}

export default Home

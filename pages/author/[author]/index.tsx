import type { NextPage } from 'next'
import Head from 'next/head'

import * as React from 'react';
import styled from 'styled-components';
// import FeaturedPost from './PostList/FeaturedPost';
// import useMetaTags from 'react-metatags-hook';
import PostList from '../../../components/PostList';

import useScrollToTop from '../../../hooks/useScrollToTop';
import { WordpressMix } from '../../../services/wordpress';

import posts from '../../../data/all-posts.json'
import mixes from '../../../data/all-mixes.json'
import Logo from '../../../components/Logo';
import useMetaTags from 'react-metatags-hook';
import { useRouter } from 'next/router';

var ReactGA = require('react-ga');


const SCHead = styled.header`
  width: 100%;
  text-align: center;
  margin: 1rem 0;
`;

const Author: NextPage = ({ authorPosts }: any) => {
  const router = useRouter();
  const { author } = router.query;

  const authorName = posts.find(p => p.coauthors.find(a => a.name === author)?.description);

  const title =
    author && posts[0]
      ? `Author: ${authorName}`
      : `Minority Report`;

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

  if (!authorPosts.length) {
    return <div></div>;
  }
  return (
    <div>
      <SCHead>
        <Logo />
        <p>
          This is an archive of content from Minority Report.
        </p>
      </SCHead>
      <PostList
        posts={authorPosts as any[]}
        mixes={[]}
      />
    </div>
  )
}

export default Author

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { author: post.coauthors.map(c => c.name.toLowerCase()).join('-') },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const { author } = params
  const authorPosts = posts.filter(p => p.coauthors.find(a => {
    return a.name.toLowerCase() === author
  }))

  // Pass post data to the page via props
  return { props: { authorPosts } }
}

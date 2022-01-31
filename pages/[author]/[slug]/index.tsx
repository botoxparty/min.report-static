import type { NextPage } from 'next'
import Head from 'next/head'

import * as React from 'react';
import styled from 'styled-components';
import useScrollToTop from '../../../hooks/useScrollToTop';

import posts from '../../../data/all-posts.json'
import { useRouter } from 'next/router';
import watchFootnoteScroll from '../../../hooks/watchFootnoteScroll';
import gutenbergCSS, { customGutenbergCSS } from '../../../styles/gutenbergCSS';
import ArticleHead from '../../../components/ArticleHead';
import Coauthors from '../../../components/Coauthors';
import { decode, formatDate } from '../../../helpers/helpers';
import Footnotes from '../../../components/Footnotes';
import useMetaTags from 'react-metatags-hook';
import { MetaTagsConfig } from 'react-metatags-hook/dist/types';

var ReactGA = require('react-ga');

//@ts-ignore
import InnerHTML from 'dangerously-set-html-content';

interface SCPostProps {
    isFullscreen: boolean;
}
const SCPost = styled.section<SCPostProps>`
    min-height: 100vh;
    max-width: ${({ isFullscreen }) => (isFullscreen ? '100%' : '1050px')};
    margin: auto;
    .full-screen video {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      /* position: fixed; */
      background-color: black !important;
    }
    a {
      &:hover {
        color: #202267;
      }
      &:after {
        display: none;
      }
    }
    .article-content {
      ${gutenbergCSS}
      padding: 2em 1em 1em 1em;
      font-size: 1.25em;
      ${customGutenbergCSS}
    }
  `;

const Home: NextPage = ({ post }: any) => {
    useScrollToTop();

    React.useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    }, []);
    const router = useRouter()

    const { slug } = router.query

    const [citations, setCitations] = React.useState([]);

    useScrollToTop();

    React.useEffect(() => {
        function loadContent() {
            watchFootnoteScroll(setCitations);
            ReactGA.pageview(location.pathname);
        }

        loadContent();

    }, [slug]);

    const metaTags: MetaTagsConfig = post
        ? {
            title: decode(post.yoast_title) + ' - min.report',
            metas: post.yoast_meta,
            links: [],
            openGraph: {
                title: decode(post.yoast_title),
                image: post.featured_img_x.thumb,
            },
            twitter: {
                card: 'summary',
                title: decode(post.yoast_title),
            },
        }
        : {};

    useMetaTags(metaTags, [post]);

    let isFullscreen = false
    if (process.browser) {
        isFullscreen = !!document.querySelector('.full-screen');
    }

    return (
        <SCPost isFullscreen={isFullscreen}>
            {!isFullscreen && (
                <ArticleHead title={post.title?.rendered}>
                    {post.author_x.slug !== 'thinktank' && (
                        <p className='author'>
                            by <Coauthors coauthors={post.coauthors} />
                        </p>
                    )}
                    <time dateTime={post.date_gmt.split('T')[0]}>
                        {formatDate(post.date_gmt)}
                    </time>
                </ArticleHead>
            )}
            <InnerHTML
                className='article-content gutenberg-styles'
                html={post.content.rendered}
            />
            <Footnotes citations={citations} />
        </SCPost>
    );
}

export default Home

export async function getStaticPaths() {
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
        params: { author: post.coauthors.map(c => c.name.toLowerCase()).join('-'), slug: post.slug },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const { author, slug } = params
    const post = posts.find(p =>
        p.coauthors.map(c => c.name).join('-').toLowerCase() === author.toLowerCase() && p.slug === slug)

    // Pass post data to the page via props
    return { props: { post } }
}

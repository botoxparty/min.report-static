import * as React from 'react';
import styled from 'styled-components';
import { WordpressMix, WordpressPost } from '../services/wordpress';
import media from '../media';
import PostListItem from './PostListItem';
import MixBanner from './MixBanner';

const SCPostList = styled.section`
  max-width: 1050px;
  margin: auto;
  min-height: 100vh;
`;

const SCOlderPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  article {
    box-sizing: border-box;
    ${media.min.large} {
      flex-direction: column;
      width: 50%;
    }
  }
`;

interface PostListProps {
  posts: Array<WordpressPost>;
  mixes: Array<WordpressMix>;
}

function renderPostOrMix({ post }: any) {

  if (!post) return

  if (post.type === 'mix')
    return <MixBanner key={post.id} mix={post} />

  return <PostListItem
    key={post.id}
    post={post}
  ></PostListItem>
}

function PostList({
  posts,
  mixes,
}: PostListProps) {

  const listItems = () => {
    let injectedMixes = 0;
    let index = 0;
    const arr = [];

    while (index < mixes.length + posts.length) {
      if (index % 5 === 0) {
        if (index > 0) {
          if (injectedMixes < mixes.length) {
            arr.push(mixes[injectedMixes]);
            injectedMixes++;
          } else {
            arr.push(posts[index - injectedMixes]);
          }
        }
      } else {
        arr.push(posts[index - injectedMixes]);
      }
      index++;
    }
    return arr;
  }

  return (
    <>
      <SCPostList>
        <SCOlderPosts>
          {listItems().map((post) => renderPostOrMix({ post }))}
        </SCOlderPosts>
      </SCPostList>
    </>
  );
}

export default PostList;

import * as React from 'react';
import Logo from './Logo';
import styled from 'styled-components';
import media from '../media';

const SCArticleHead = styled.div`
  text-align: center;
  margin-top: 2em;
  z-index: 9999;
  position: relative;
  & > a {
    ${media.max.medium} {
      width: 150px;
      height: 150px;
    }
  }
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.25em;
    margin-top: 1rem;
    padding: 0 1rem;
    ${media.min.medium} {
      font-size: 3em;
      margin-top: 1.5rem;
    }
  }
  img {
    max-width: 100%;
  }
  .author {
    margin-bottom: 1em;
    display: block;
    font-size: 1.25em;
    a {
      text-decoration: none;
    }
  }
`;

function ArticleHead({ children, title }: any) {
  return (
    <SCArticleHead className='article-head'>
      <Logo />
      <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
      {children}
    </SCArticleHead>
  );
}

export default ArticleHead;

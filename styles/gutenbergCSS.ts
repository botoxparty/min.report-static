import { css } from 'styled-components';
import media from '../media';

export default css`

  main {
    display: block;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  a {
    background-color: transparent;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
    object-fit: contain;
    height: auto;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }
  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after,
  p:first-letter,
  div:first-letter,
  blockquote:first-letter,
  li:first-letter,
  p:first-line,
  div:first-line,
  blockquote:first-line,
  li:first-line {
    box-shadow: none !important;
    text-shadow: none !important;
  }
  p,
  blockquote,
  table,
  ul,
  ol,
  dl {
    margin-bottom: 1.5rem;
    margin-top: 0;
  }
  p:last-child,
  ul:last-child,
  ol:last-child {
    margin-bottom: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000;
    line-height: 1.2;
    margin-bottom: 0.75rem;
    margin-top: 0;
  }
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  h5 {
    font-size: 1.25rem;
  }
  h6 {
    font-size: 1rem;
  }
  a,
  a:visited {
    color: #000;
    text-decoration: underline;
    word-wrap: break-word;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    display: table-header-group;
  }
  table,
  th,
  td {
    border-bottom: 1px solid #000;
  }
  td,
  th {
    padding: 8px 16px;
    page-break-inside: avoid;
  }
  code,
  pre,
  kbd {
    border: 1px solid #bbb;
    font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
    font-size: 85%;
  }
  code,
  kbd {
    padding: 3px;
  }
  pre {
    margin-bottom: 1.5rem;
    padding: 10px 12px;
  }
  pre code,
  pre kbd {
    border: 0;
  }
  ::-webkit-input-placeholder {
    color: transparent;
  }
  :-moz-placeholder {
    color: transparent;
  }
  ::-moz-placeholder {
    color: transparent;
  }
  :-ms-input-placeholder {
    color: transparent;
  }
  blockquote {
    border: 0;
    border-left: 5px solid #bbb;
    margin-left: 1px;
    padding: 12px 1.5rem;
    white-space: break-spaces;
    p {
      line-height: 1.4;
    }
  }
  [dir='rtl'] blockquote {
    border-left: 0;
    border-right: 5px solid #bbb;
    margin-left: 0;
    margin-right: 1px;
  }
  blockquote:first-child {
    margin-top: 0;
  }
  blockquote p:last-child,
  blockquote ul:last-child,
  blockquote ol:last-child {
    margin-bottom: 0;
  }
  blockquote footer {
    display: block;
    font-size: 80%;
  }
  img {
    border: 0;
    display: block;
    max-width: 100% !important;
    vertical-align: middle;
  }
  hr {
    border: 0;
    border-bottom: 2px solid #bbb;
    height: 0;
    margin: 2.25rem 0;
    padding: 0;
  }
  dt {
    font-weight: bold;
  }
  dd {
    margin: 0;
    margin-bottom: 0.75rem;
  }
  abbr[title],
  acronym[title] {
    border: 0;
    text-decoration: none;
  }
  figure {
    margin: 0;
  }
  table,
  blockquote,
  pre,
  code,
  figure,
  li,
  hr,
  ul,
  ol,
  a,
  tr {
    page-break-inside: avoid;
  }
  h2,
  h3,
  h4,
  p,
  a {
    orphans: 3;
    widows: 3;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    page-break-after: avoid;
    page-break-inside: avoid;
  }
  h1 + p,
  h2 + p,
  h3 + p {
    page-break-before: avoid;
  }
  img {
    page-break-after: auto;
    page-break-before: auto;
    page-break-inside: avoid;
  }
  pre {
    white-space: pre-wrap !important;
    word-wrap: break-word;
  }
  body {
    padding-bottom: 2.54cm;
    padding-left: 1.8cm;
    padding-right: 1.8cm;
    padding-top: 2.54cm;
  }
  a[href$='.jpg']:after,
  a[href$='.jpeg']:after,
  a[href$='.gif']:after,
  a[href$='.png']:after {
    display: none;
  }
  abbr[title]:after,
  acronym[title]:after {
    content: ' (' attr(title) ')';
  }
  .page-break,
  .page-break-before {
    page-break-before: always;
  }
  .page-break-after {
    page-break-after: always;
  }
  .no-print {
    display: none;
  }
  a.no-reformat:after {
    content: '';
  }
  abbr[title].no-reformat:after,
  acronym[title].no-reformat:after {
    content: '';
  }
  .no-reformat abbr:after,
  .no-reformat acronym:after,
  .no-reformat a:after {
    content: '';
  }
`;

const videoPlayerCSS = css`
  .wp-block-embed.is-type-video {
    padding-bottom: 1rem;
    z-index: 999;
    position: relative;
    ${media.max.large} {
      margin: 0;
    }
    figcaption {
      margin-top: 1rem;
    }
    .wp-block-embed__wrapper {
      position: relative;
      overflow: hidden;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
      }
    }
    &.wp-embed-aspect-16-9 {
      .wp-block-embed__wrapper {
        padding-top: 56.25%;
      }
    }
    &.wp-embed-aspect-4-3 {
      .wp-block-embed__wrapper {
        padding-top: 71.25%;
      }
    }
  }

  .wp-block-embed-youtube {
    iframe {
      ${media.max.medium} {
        width: 100%;
      }
    }
    &.alignright {
      max-width: 500px;
      width: 100%;
      margin: auto;
      ${media.min.tablet} {
        padding-left: 2em;
        float: right;
      }
    }
    &.alignleft {
      max-width: 500px;
      width: 100%;
      margin: auto;
      ${media.min.tablet} {
        padding-right: 2em;
        float: left;
      }
    }
  }
`;

export const citationCSS = css`
  .wp-block-quote.is-style-large {
    font-size: 1.6em;
    font-style: italic;
    margin-top: -1em;
    padding-bottom: 1em;
    padding-top: 0;
    p {
      margin-bottom: 1em;
    }
    cite {
      text-align: right;
      display: block;
      font-size: 0.7em;
      margin-top: 0.5em;
    }
  }

  p.has-text-align-right {
    text-align: right;
  }

  /* Hide citation on regular style for footnotes feature */
  p cite,
  blockquote:not(.is-style-large) cite {
    display: none;
  }

  > p {
    line-height: 1.5;
    margin-bottom: 2.9rem;
    position: relative;
    z-index: 99;
  }

  > blockquote {
      margin-top: -2.5em;
      padding-left: 4em;
      border: 0;
      color: #202267;
      margin-bottom: 0;
      p {
        margin-bottom: 0;
        display: inline;
      }
      ${media.max.medium} {
        padding: 1.5em;
        margin-right: 0;
      }
    }

  .wp-block-lazyblock-footnotes {
    font-size: 0.75em;
  }
`;

export const embedsCSS = css`
  .wp-block-embed-instagram.aligncenter {
    blockquote {
      margin: auto !important;
    }
  }
  .wp-block-embed.aligncenter {
    text-align: center;
  }
`;
export const imagesCSS = css`
  .wp-block-image {
    margin-bottom: 3.25em;
    ${media.min.large} {
      figure.alignleft {
        display: inline;
        float: left;
        max-width: 500px;
      }
      figure.alignright {
        display: inline;
        float: right;
        max-width: 500px;
      }
    }
    figure.aligncenter {
      display: flex;
      justify-content: center;
      flex-direction: column;
      ${media.max.tablet} {
        width: calc(100% + 2em);
        margin-left: -1em;
      }
    }
  }
`;
export const videoCSS = css`
  .wp-block-video {
    margin-left: 0;
    margin-right: 0;
    text-align: center;
    z-index: 9999;
    position: relative;
    video {
      max-width: 100%;
    }
    &.alignright {
      video { max-height: 600px; }
      ${media.min.medium} {
        float: right;
        padding-left: 2em;
      }
    }
    &.alignleft {
      video { max-height: 600px; }
      ${media.min.medium} {
        float: left;
        padding-right: 2em;
      }
    }
    figcaption {
      margin-top: 0.5em;
      margin-bottom: 1em;
    }
  }
`;

export const galleryCSS = css`
  .wp-block-getwid-images-slider__item {
    transition: transform 500ms;
    position: relative;
    figcaption {
      background: white !important;
      padding: 0.15em 0.5em;
      display: inline-block;
    }
    &:nth-child(odd) {
      transform: perspective(600px) rotateY(45deg);
    }
    &:nth-child(even) {
      transform: perspective(600px) rotateY(-45deg);
    }
    &:first-of-type {
      transform: perspective(300px) rotateX(45deg);
    }
    &:hover {
      transform: perspective(600px) rotateY(0);
      z-index: 99999;
      img {
        box-shadow: 10px 5px 80px 13px rgba(255, 255, 255, 0.5) !important;
      }
    }
  }
`;

const galleryBlockCSS = css`
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    15% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }
  .blocks-gallery-grid {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin: 0;
    .blocks-gallery-image {
      margin: 0 16px 16px 0;
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      justify-content: center;
      position: relative;
      figure {
        height: 100%;
      }
      figcaption {
        img {
          display: inline;
        }
      }
      &:nth-of-type(2n) {
        margin-right: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    .blocks-gallery-item {
      margin: 0 16px 16px 0;
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      justify-content: center;
      position: relative;
      width: calc(50% - 16px);
      figure {
        height: 100%;
      }
      img {
        display: block;
        max-width: 100%;
        height: auto;
        width: 100%;
      }
      figcaption {
        position: absolute;
        bottom: 0;
        width: 100%;
        max-height: 100%;
        overflow: auto;
        padding: 40px 10px 9px;
        color: #fff;
        text-align: center;
        font-size: 13px;
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.3) 70%,
          transparent
        );
        img {
          display: inline;
        }
      }
      &:nth-of-type(2n) {
        margin-right: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .wp-block-gallery {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin: 4em 0;
    .blocks-gallery-image {
      margin: 0 16px 16px 0;
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      justify-content: center;
      position: relative;
      width: calc(50% - 16px);
      figure {
        height: 100%;
      }
      img {
        display: block;
        max-width: 100%;
        height: auto;
        width: 100%;
      }
      figcaption {
        position: absolute;
        bottom: 0;
        width: 100%;
        max-height: 100%;
        overflow: auto;
        padding: 40px 10px 9px;
        color: #fff;
        text-align: center;
        font-size: 13px;
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.3) 70%,
          transparent
        );
        img {
          display: inline;
        }
      }
      &:nth-of-type(2n) {
        margin-right: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    .blocks-gallery-item {
      margin: 0 16px 16px 0;
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      justify-content: center;
      position: relative;
      width: calc(50% - 16px);
      figure {
        height: 100%;
      }
      img {
        display: block;
        max-width: 100%;
        height: auto;
        width: 100%;
      }
      figcaption {
        position: absolute;
        bottom: 0;
        width: 100%;
        max-height: 100%;
        overflow: auto;
        padding: 40px 10px 9px;
        color: #fff;
        text-align: center;
        font-size: 13px;
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.3) 70%,
          transparent
        );
        img {
          display: inline;
        }
      }
      &:nth-of-type(2n) {
        margin-right: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .blocks-gallery-grid.is-cropped {
    .blocks-gallery-image {
      a {
        width: 100%;
      }
      img {
        width: 100%;
      }
    }
    .blocks-gallery-item {
      a {
        width: 100%;
      }
      img {
        width: 100%;
      }
    }
  }
  .wp-block-gallery.is-cropped {
    .blocks-gallery-image {
      a {
        width: 100%;
      }
      img {
        width: 100%;
      }
    }
    .blocks-gallery-item {
      a {
        width: 100%;
      }
      img {
        width: 100%;
      }
    }
  }
  .blocks-gallery-grid.columns-1 {
    .blocks-gallery-image {
      width: 100%;
      margin-right: 0;
    }
    .blocks-gallery-item {
      width: 100%;
      margin-right: 0;
    }
  }
  .wp-block-gallery.columns-1 {
    .blocks-gallery-image {
      width: 100%;
      margin-right: 0;
    }
    .blocks-gallery-item {
      width: 100%;
      margin-right: 0;
    }
  }
  .blocks-gallery-grid.alignleft {
    max-width: 290px;
    width: 100%;
  }
  .blocks-gallery-grid.alignright {
    max-width: 290px;
    width: 100%;
  }
  .wp-block-gallery.alignleft {
    max-width: 290px;
    width: 100%;
  }
  .wp-block-gallery.alignright {
    max-width: 290px;
    width: 100%;
  }
  .blocks-gallery-grid.aligncenter {
    .blocks-gallery-item {
      figure {
        justify-content: center;
      }
    }
  }
  .wp-block-gallery.aligncenter {
    .blocks-gallery-item {
      figure {
        justify-content: center;
      }
    }
  }

  .wp-block-image {
    margin-bottom: 1em;
    img {
      max-width: 100%;
    }
    .aligncenter {
      display: table;
      margin-left: auto;
      margin-right: auto;
      &.size-large,
      &.size-full {
        margin-bottom: 3em;
      }
    }
    .alignleft {
      display: table;
      float: left;
      margin: 0.5em 1em 0.5em 0;
    }
    .alignright {
      display: table;
      float: right;
      margin: 0.5em 0 0.5em 1em;
    }
    figcaption {
      margin-top: 0.5em;
      margin-bottom: 1em;
      display: block;
      caption-side: bottom;
      width: 100%;
    }
  }
  .wp-block-image.aligncenter {
    text-align: center;
  }
  .wp-block-image.alignfull {
    img {
      width: 100%;
    }
  }
  .wp-block-image.alignwide {
    img {
      width: 100%;
    }
  }
  .wp-block-image.is-resized {
    display: table;
    > figcaption {
      display: table-caption;
      caption-side: bottom;
    }
  }
  .is-style-circle-mask {
    img {
      border-radius: 9999px;
    }
  }
  .is-style-rounded {
    img {
      border-radius: 9999px;
    }
  }

  @media (min-width: 600px) {
    .blocks-gallery-grid.columns-3 {
      .blocks-gallery-image {
        width: calc(33.33333% - 10.66667px);
        margin-right: 16px;
        &:nth-of-type(3n) {
          margin-right: 0;
        }
      }
      .blocks-gallery-item {
        width: calc(33.33333% - 10.66667px);
        margin-right: 16px;
        &:nth-of-type(3n) {
          margin-right: 0;
        }
      }
    }
    .wp-block-gallery.columns-3 {
      .blocks-gallery-image {
        width: calc(33.33333% - 10.66667px);
        margin-right: 16px;
        &:nth-of-type(3n) {
          margin-right: 0;
        }
      }
      .blocks-gallery-item {
        width: calc(33.33333% - 10.66667px);
        margin-right: 16px;
        &:nth-of-type(3n) {
          margin-right: 0;
        }
      }
    }
    .blocks-gallery-grid.columns-4 {
      .blocks-gallery-image {
        width: calc(25% - 12px);
        margin-right: 16px;
        &:nth-of-type(4n) {
          margin-right: 0;
        }
      }
      .blocks-gallery-item {
        width: calc(25% - 12px);
        margin-right: 16px;
        &:nth-of-type(4n) {
          margin-right: 0;
        }
      }
    }
    .wp-block-gallery.columns-4 {
      .blocks-gallery-image {
        width: calc(25% - 12px);
        margin-right: 16px;
        &:nth-of-type(4n) {
          margin-right: 0;
        }
      }
      .blocks-gallery-item {
        width: calc(25% - 12px);
        margin-right: 16px;
        &:nth-of-type(4n) {
          margin-right: 0;
        }
      }
    }
    .blocks-gallery-grid.columns-5 {
      .blocks-gallery-image {
        width: calc(20% - 12.8px);
        margin-right: 16px;
        &:nth-of-type(5n) {
          margin-right: 0;
        }
      }
      .blocks-gallery-item {
        width: calc(20% - 12.8px);
        margin-right: 16px;
        &:nth-of-type(5n) {
          margin-right: 0;
        }
      }
    }
    .wp-block-gallery.columns-5 {
      .blocks-gallery-image {
        width: calc(20% - 12.8px);
        margin-right: 16px;
        &:nth-of-type(5n) {
          margin-right: 0;
        }
      }
      .blocks-gallery-item {
        width: calc(20% - 12.8px);
        margin-right: 16px;
        &:nth-of-type(5n) {
          margin-right: 0;
        }
      }
    }
    .blocks-gallery-grid.columns-6 {
      .blocks-gallery-image {
        width: calc(16.66667% - 13.33333px);
        margin-right: 16px;
        &:nth-of-type(6n) {
          margin-right: 0;
        }
      }
      .blocks-gallery-item {
        width: calc(16.66667% - 13.33333px);
        margin-right: 16px;
        &:nth-of-type(6n) {
          margin-right: 0;
        }
      }
    }
    .wp-block-gallery.columns-6 {
      .blocks-gallery-image {
        width: calc(16.66667% - 13.33333px);
        margin-right: 16px;
        &:nth-of-type(6n) {
          margin-right: 0;
        }
      }
      .blocks-gallery-item {
        width: calc(16.66667% - 13.33333px);
        margin-right: 16px;
        &:nth-of-type(6n) {
          margin-right: 0;
        }
      }
    }
    .blocks-gallery-grid.columns-7 {
      .blocks-gallery-image {
        width: calc(14.28571% - 13.71429px);
        margin-right: 16px;
        &:nth-of-type(7n) {
          margin-right: 0;
        }
      }
      .blocks-gallery-item {
        width: calc(14.28571% - 13.71429px);
        margin-right: 16px;
        &:nth-of-type(7n) {
          margin-right: 0;
        }
      }
    }
    .wp-block-gallery.columns-7 {
      .blocks-gallery-image {
        width: calc(14.28571% - 13.71429px);
        margin-right: 16px;
        &:nth-of-type(7n) {
          margin-right: 0;
        }
      }
      .blocks-gallery-item {
        width: calc(14.28571% - 13.71429px);
        margin-right: 16px;
        &:nth-of-type(7n) {
          margin-right: 0;
        }
      }
    }
    .blocks-gallery-grid.columns-8 {
      .blocks-gallery-image {
        width: calc(12.5% - 14px);
        margin-right: 16px;
        &:nth-of-type(8n) {
          margin-right: 0;
        }
      }
      .blocks-gallery-item {
        width: calc(12.5% - 14px);
        margin-right: 16px;
        &:nth-of-type(8n) {
          margin-right: 0;
        }
      }
    }
    .wp-block-gallery.columns-8 {
      .blocks-gallery-image {
        width: calc(12.5% - 14px);
        margin-right: 16px;
        &:nth-of-type(8n) {
          margin-right: 0;
        }
      }
      .blocks-gallery-item {
        width: calc(12.5% - 14px);
        margin-right: 16px;
        &:nth-of-type(8n) {
          margin-right: 0;
        }
      }
    }
    .blocks-gallery-grid.columns-1 {
      .blocks-gallery-image {
        &:nth-of-type(1n) {
          margin-right: 0;
        }
      }
      .blocks-gallery-item {
        &:nth-of-type(1n) {
          margin-right: 0;
        }
      }
    }
    .wp-block-gallery.columns-1 {
      .blocks-gallery-image {
        &:nth-of-type(1n) {
          margin-right: 0;
        }
      }
      .blocks-gallery-item {
        &:nth-of-type(1n) {
          margin-right: 0;
        }
      }
    }
    .blocks-gallery-grid.columns-2 {
      .blocks-gallery-image {
        &:nth-of-type(2n) {
          margin-right: 0;
        }
      }
      .blocks-gallery-item {
        &:nth-of-type(2n) {
          margin-right: 0;
        }
      }
    }
    .wp-block-gallery.columns-2 {
      .blocks-gallery-image {
        &:nth-of-type(2n) {
          margin-right: 0;
        }
      }
      .blocks-gallery-item {
        &:nth-of-type(2n) {
          margin-right: 0;
        }
      }
    }
  }
`;

export const customGutenbergCSS = css`
  .has-text-align-center {
    text-align: center;
  }
  h2 {
    font-size: 2rem;
    clear: both;
    margin-bottom: 2.25rem;
    border-bottom: 2px solid;
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
  pre {
    line-height: 1.4;
    border: 0;
    position: relative;
  }
  ${embedsCSS}
  ${videoPlayerCSS}
  ${imagesCSS}
  ${galleryCSS}
  ${citationCSS}
  ${galleryBlockCSS}
  ${videoCSS}
`;

import * as React from 'react';
import styled from 'styled-components';
import { WordpressPost } from '../services/wordpress';

export const SCMarquee = styled.header<any>`
  top: 0;
  z-index: 9999999;
  width: 100%;
  margin: auto;
`;

const Disclaimer = styled.div`
  background-color: #fff8dc;
  padding: 0.25em;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Marquee() {
  return (
    <SCMarquee>
      <Disclaimer role='alert'>
        ⚰️ R.I.P min.report 2017 - 2022 ⚰️
      </Disclaimer>
    </SCMarquee>
  );
}

export default Marquee;

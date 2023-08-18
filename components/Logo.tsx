import * as React from 'react';
import styled from 'styled-components';
import logo from '../assets/MinorityReport_Logo.png';
import Link from 'next/link';

const SCHeader = styled(Link)`
  display: inline-block;
  margin: auto;
`;

interface Props {
  link?: string;
}

function Logo({ link }: Props) {
  return (
    <SCHeader href={link || '/'}>
      <img src={logo.src} alt="min report logo" height={150} width={150} />
    </SCHeader>
  );
}

export default Logo;

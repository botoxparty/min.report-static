import * as React from 'react';
import styled from 'styled-components';
import logo from '../assets/MinorityReport_Logo.png';
import Link from 'next/link';
import Image from 'next/image';

const SCHeader = styled(Link)`
  display: inline-block;
  margin: auto;
`;

interface Props {
  link?: string;
}

function Header({ link }: Props) {
  return (
    <SCHeader href={link || '/'}>
      <Image src={logo} height={150} width={150} />
    </SCHeader>
  );
}

export default Header;

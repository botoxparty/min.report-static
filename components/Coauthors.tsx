import * as React from 'react';
import Link from 'next/link';
import { PostCoauthor } from '../services/wordpress';
interface Props {
    coauthors: [PostCoauthor],
    seperator?: string;
}
function Coauthors({coauthors, seperator}: Props) {
    return <>{coauthors.map((author, i) => <React.Fragment key={author.name}><Link href={`/author/${author.name.toLowerCase()}`}>
    {author.description}
  </Link>
  {i !== coauthors.length - 1 && ` ${seperator || 'and'} `}
  </React.Fragment>)}</>
}

export default Coauthors;
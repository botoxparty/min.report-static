import * as React from 'react';
import styled, { css } from 'styled-components';
import media from '../media';

const SCFootnotes = styled.div<any>`
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: white;
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.5);
  }
  border-top: 1px dotted gray;
  border-left: 1px dotted gray;
  color: #202267;
  z-index: 99999;
  padding: 1.5em;
  transform: translateY(100%);
  transition: transform 500ms, opacity 500ms;
  max-width: 100%;
  opacity: 0;
  cite {
    font-style: normal;
  }
  .fn-active {
    background: greenyellow !important;
  }
  ${media.min.medium} {
    width: 500px;
  }
  ${media.max.medium} {
    left: 0;
  }
  .close {
    position: absolute;
    top: 1em;
    right: 1em;
  }
  h4 {
    margin-top: 0;
  }
  ${(props) =>
    props.show &&
    css`
      transform: unset;
      opacity: 1;
    `}
`;

interface FootnotesProps {
  citations: Array<HTMLElement>;
}

function Footnotes({ citations }: FootnotesProps) {
  const [activeNote, setActiveNote] = React.useState<number>();

  const [show, setShowHide] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  React.useEffect(() => {
    for (let i = 0; i < citations.length; i++) {
      const cite = citations[i];
      const footnoteNumber = i + 1;
      const newAnchor = document.createElement('a');

      newAnchor.innerText = `[${footnoteNumber}]`;

      const parent = cite.parentNode;
      if (parent) parent.insertBefore(newAnchor, cite);

      cite.id = 'footnote-' + footnoteNumber;
      newAnchor.href = '#' + cite.id;

      newAnchor.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveNote(i);
        setShowHide(true);
        setFocused(true);
        newAnchor.classList.add('fn-active');
      });
      newAnchor.addEventListener('blur', function () {
        newAnchor.classList.remove('fn-active');
        setFocused(false);
      });
    }
  }, [citations]);

  const scrollTo = (event: any, id: number) => {
    event.preventDefault();
    setActiveNote(id - 1);
    setFocused(true);
    const footnote = document.querySelector(`a[href="#footnote-${id}"]`);
    footnote?.classList.add('fn-active');

    footnote?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  };

  const removeFnClass = (id: number) => {
    const footnote = document.querySelector(`a[href="#footnote-${id}"]`);
    footnote?.classList.remove('fn-active');
    setFocused(false);
  };

  return (
    <SCFootnotes show={show}>
      <h4>Notes</h4>
      <button className='close' onClick={() => setShowHide(false)}>
        close
      </button>
      <div className='active-note'>
        <span>[{activeNote != undefined && activeNote + 1}] </span>
        <cite
          dangerouslySetInnerHTML={{
            __html:
              activeNote != undefined ? citations[activeNote]?.innerHTML : '',
          }}
        ></cite>
      </div>
      <p>
        {citations.map((cite, i: number) => (
          <React.Fragment key={'fn-index-' + i + 1}>
            <a
              href={`#${cite.id}`}
              onBlur={(e) => removeFnClass(i + 1)}
              onClick={(e) => scrollTo(e, i + 1)}
              className={focused && activeNote === i ? 'fn-active' : ''}
            >
              {i + 1}
            </a>
            {i + 1 !== citations.length && `, `}
          </React.Fragment>
        ))}
      </p>
    </SCFootnotes>
  );
}

export default Footnotes;

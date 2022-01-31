import React from 'react';
import styled from 'styled-components';
import media from '../media';
import { WordpressMix } from '../services/wordpress';

const Mix = styled.a`
    width: 100%;
    min-height: 150px;
    margin: 1em 0;
    padding: 0 1em;
    background: lightcyan;
    cursor: pointer;
    display: flex;
    .title {
        padding: 1em;
        flex: 1;
        &__content {
            display: flex;
            .image {
                padding-right: 2em;
                max-width: 50%;
                img {
                    max-height: 200px;
                    max-width: 100%;
                }
            }
            .text {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        }
    }
    .actions {
        font-size: 1.5em;
        margin: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h2 {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
    }
    h4 {
        margin-top: 0;
    }


    ${media.max.medium} {
        flex-direction: column;
        .title {
            text-align: center;
        }
    }
`

interface Props {
    mix: WordpressMix;
}

function MixBanner({mix}: Props) {
    return (
    <Mix href={mix.linked_post || mix.soundcloud_url} target="_blank">
        <div className="title">
            <h4>MIX</h4>
            <div className="title__content">
                {mix.featured_img_x.thumb && <div className="image">
                    <img alt={mix.title.rendered} src={mix.featured_img_x.thumb} />
                </div>}
                <div className="text">
                <h2 dangerouslySetInnerHTML={{ __html: mix.title.rendered }}></h2>
                <h3>By {mix.dj.map((dj: any) => dj.display_name).join(', ')}</h3>
                </div>
            </div>
        </div>
        <div className="actions">
            <div>Listen now</div>
            <br />
            <div>&#9658;</div>
        </div>
    </Mix>)
}

export default MixBanner;
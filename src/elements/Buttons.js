import React from "react"
import { FormattedMessage as I18n } from "gatsby-plugin-react-intl"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { useStaticQuery, graphql } from "gatsby"

import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faSpotify } from "@fortawesome/free-brands-svg-icons"

const Buttons_Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: inherit;
        font-size: 20px;
        margin: 0.5rem 0.5rem;
        max-width: 300px;
        width: 100%;

        @media screen and (max-width: 900px) {
            padding: 0 1rem;
        }

        svg {
            padding: 10px;
        }

        span {
            text-align: start;
            line-height: 1.2rem;
            @media screen and (max-width: 768px) {
                font-size: 16px;
            }
        }
    }
`

export default function Buttons() {
    const data = useStaticQuery(
        graphql`
            query {
                dataJson {
                    contacts {
                        youtube
                        spotify
                    }
                }
            }
        `
    )

    const contacts = data.dataJson.contacts

    return (
        <Buttons_Container>
            <OutboundLink aria-label={"Playlist Youtube"} href={contacts.youtube} rel="noreferrer" target="_blank" className="button--big button--hollow">
                <FontAwesomeIcon icon={faYoutube} />
                <span>
                    <I18n id="elements.buttons.youtube" defaultMessage={"Listen on Youtube"} />
                </span>
            </OutboundLink>
            <OutboundLink aria-label={"Playlist Spotify"} href={contacts.spotify} rel="noreferrer" target="_blank" className="button--big button--hollow">
                <FontAwesomeIcon icon={faSpotify} />
                <span>
                    <I18n id="elements.buttons.spotify" defaultMessage={"Listen on Spotify"} />
                </span>
            </OutboundLink>
        </Buttons_Container>
    )
}

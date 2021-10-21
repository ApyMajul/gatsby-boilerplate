import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage as I18n } from "gatsby-plugin-react-intl"

import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWifi } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));

    & > .publishing {
        height: calc(100vh - 16px);
        color: var(--dark);

        @media screen and (max-width: 768px) {
            height: 80%;
        }
    }

    & > .label {
        color: var(--dark);
        height: calc(100vh - 16px);;

        @media screen and (max-width: 768px) {
            height: 80%;
        }
    }
`

const Category_Container = styled.div`
    border: 0.5rem solid;
    padding: 0 40px 0 40px;
    overflow-y: auto;

    & > .artist {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    & > .line {
        display: grid;
        grid-template-columns: 50% 50%;

        @media screen and (min-width: 768px) {
            grid-template-columns: 100%
        }

        & > .link {
            text-align: left;
            opacity: 0.4;

            @media screen and (min-width: 768px) {
                display: none;
            }
        }
    }

    h2 {
        text-align: right;
    }

    @media screen and (max-width: 768px) {
        display: ${props => props.open ? "none" : "initial"};
        position: absolute;
        width: calc(100vw - 36px);
        padding: 0 10px 0 10px;
    }
`

const Link_Container = styled.div`
    display: flex;
    justify-content: start;

    h3 {
        font-size: 20px;
        margin-bottom: 0px;
        line-height: 30px;

        @media screen and (max-width: 768px) {
            font-size: 16px;
            line-height: 26px;
        }
    }

    a {
        position: relative;
        color: inherit;
        font-size: 20px;
        margin: 10px;

        @media screen and (max-width: 768px) {
            font-size: 16px;
        }

        & > .o-icon {
            display: inline-block;
            vertical-align: middle;
            box-sizing: inherit;
            font-size: inherit;

            &:hover {
                color: var(--dark);
            }
        }

        & > .o-icon-circle {
            width: calc(100% + 1rem);
            height: calc(100% + 1rem);
            position: absolute;
            left: -0.5rem;
            top: -0.4rem;

            circle {
                fill: none;
                stroke-width: 2px;
                stroke: currentColor;
                stroke-linecap: round;
                stroke-dasharray: 88;
                stroke-dashoffset: 88;
                transform: rotate(-180deg);
                transform-origin: 16px 16px;
                transition: stroke-dashoffset 0.5s, transform 0.4s;
            }

            &:hover {
                circle {
                    color: var(--dark);
                    stroke-dashoffset: 0;
                    transform: rotate(0deg);
                }
            }
        }
    }
`

export default function Artists() {
    const [open, setOpen] = React.useState(false)

    const toggleOpen = () => {
        setOpen(!open)
    }

    const data = useStaticQuery(
        graphql`
            query MyQuery {
                googleSheet {
                    Label {
                        linkfire
                        instagram
                        name
                        site
                        youtube
                    }
                    Publishing {
                        instagram
                        linkfire
                        name
                        site
                        youtube
                    }
                }
            }
        `
    )

    return (
        <Container>
            <Category_Container className="label" open={open}>
                <div className="line">
                    <h2 onClick={toggleOpen} className="link"><I18n id="category.publishing" defaultMessage={"Publishing"} /></h2>
                    <h2 onClick={toggleOpen} tabIndex="0" aria-label="artists signés en label"><I18n id="category.label" defaultMessage={"Label"} /></h2>
                </div>
                <div className="artist">
                    { data.googleSheet.Label.map(artists => (
                        <div key={artists.name}>
                            <Link_Container>
                                <OutboundLink aria-label={`${artists.name} music`}  href={artists.linkfire} rel="noreferrer" className="o-custom-link" target="_blank">
                                    <h3>{artists.name}</h3>
                                </OutboundLink>
                                { artists.instagram !== null &&
                                    <OutboundLink aria-label={`${artists.name} Instagram`} href={`https://www.instagram.com/${artists.instagram}/`} rel="noreferrer" target="_blank">
                                        <FontAwesomeIcon icon={faInstagram} className="o-icon" />
                                        <svg className="o-icon-circle" viewBox="0 0 32 32">
                                            <circle cx="16" cy="16" r="14"></circle>
                                        </svg>
                                    </OutboundLink>
                                }
                                { artists.youtube !== null &&
                                    <OutboundLink aria-label={`${artists.name} Youtube`} href={`https://www.youtube.com/${artists.youtube}/`} rel="noreferrer" target="_blank">
                                        <FontAwesomeIcon icon={faYoutube} className="o-icon" />
                                        <svg className="o-icon-circle" viewBox="0 0 32 32">
                                            <circle cx="16" cy="16" r="14"></circle>
                                        </svg>
                                    </OutboundLink>
                                }
                                { artists.site !== null &&
                                    <OutboundLink aria-label={`${artists.name} website`} href={artists.site} rel="noreferrer" target="_blank">
                                        <FontAwesomeIcon icon={faWifi} className="o-icon" />
                                        <svg className="o-icon-circle" viewBox="0 0 32 32">
                                            <circle cx="16" cy="16" r="14"></circle>
                                        </svg>
                                    </OutboundLink>
                                }
                            </Link_Container>
                        </div>
                    )) }
                </div>
            </Category_Container>
            <Category_Container className="publishing" open={!open}>
                <div className="line">
                    <h2 onClick={toggleOpen} className="link" aria-label="artists signés en publishing"><I18n id="category.label" defaultMessage={"Label"} /></h2>
                    <h2 onClick={toggleOpen} tabIndex="0" aria-label="artists signés en publishing"><I18n id="category.publishing" defaultMessage={"Publishing"} /></h2>
                </div>
                <div className="artist">
                    { data.googleSheet.Publishing.map(artists => (
                        <div key={artists.name}>
                            <Link_Container>
                                <OutboundLink ria-label={`${artists.name} music`}  href={artists.linkfire} rel="noreferrer" className="o-custom-link" target="_blank">
                                    <h3>{artists.name}</h3>
                                </OutboundLink>
                                { artists.instagram !== null &&
                                    <OutboundLink aria-label={`${artists.name} Instagram`} href={`https://www.instagram.com/${artists.instagram}/`} rel="noreferrer" target="_blank">
                                        <FontAwesomeIcon icon={faInstagram} className="o-icon" />
                                        <svg className="o-icon-circle" viewBox="0 0 32 32">
                                            <circle cx="16" cy="16" r="14"></circle>
                                        </svg>
                                    </OutboundLink>
                                }
                                { artists.youtube !== null &&
                                    <OutboundLink aria-label={`${artists.name} Youtube`} href={`https://www.youtube.com/${artists.youtube}/`} rel="noreferrer" target="_blank">
                                        <FontAwesomeIcon icon={faYoutube} className="o-icon" />
                                        <svg className="o-icon-circle" viewBox="0 0 32 32">
                                            <circle cx="16" cy="16" r="14"></circle>
                                        </svg>
                                    </OutboundLink>
                                }
                                { artists.site !== null &&
                                    <OutboundLink aria-label={`${artists.name} website`} href={artists.site} rel="noreferrer" target="_blank">
                                        <FontAwesomeIcon icon={faWifi} className="o-icon" />
                                        <svg className="o-icon-circle" viewBox="0 0 32 32">
                                            <circle cx="16" cy="16" r="14"></circle>
                                        </svg>
                                    </OutboundLink>
                                }
                            </Link_Container>
                        </div>
                    )) }
                </div>
            </Category_Container>
        </Container>
    )
}

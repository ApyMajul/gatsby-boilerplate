import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { useStaticQuery, graphql } from "gatsby"

import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const Link_Container = styled.div`
    display: inherit;
    justify-content: space-between;
    align-self: center;
    margin: 0 0 0 0;
    width: 100%;

    a {
        position: relative;
        color: inherit;
        font-size: 25px;
        margin: 1rem;
    }
`

export default function SocialLinks() {
    const data = useStaticQuery(
        graphql`
            query {
                dataJson {
                    contacts {
                        instagram
                        mail
                    }
                }
            }
        `
    )

    const contacts = data.dataJson.contacts

    return (
        <Link_Container>
            <OutboundLink aria-label={`${contacts.instagram} Instagram`} href={`https://www.instagram.com/${contacts.instagram}/`} rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faInstagram} className="o-icon" />
                <svg className="o-icon-circle" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" r="14"></circle>
                </svg>
            </OutboundLink>
            <OutboundLink aria-label={"mail contact"} href={`mailto:${contacts.mail}`} rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="o-icon" />
                <svg className="o-icon-circle" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" r="14"></circle>
                </svg>
            </OutboundLink>
        </Link_Container>
    )
}
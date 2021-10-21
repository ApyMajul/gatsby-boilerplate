import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { FormattedMessage as I18n } from "gatsby-plugin-react-intl"

import SocialLinks from "../elements/SocialLinks"
import Buttons from "../elements/Buttons"

const Footer = styled.div`
    background-color: var(--dark);
    color: var(--light);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 8vw 0 8vw;
    margin-top: 75px;

    h1 {
        font-size: min(max(8vw, 16px), 64px);
        text-transform: uppercase;
        line-height: 1.5;
        text-align: left;
        margin-bottom: 40px;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    align-items: stretch;

    div {
        flex-basis: 50%;
        margin: 0 40px 0 0;
        justify-content: start;
        @media screen and (max-width: 768px) {
            margin-right: 0px;
        }
    }

    h2 {
        font-size: 24px;
        text-transform: uppercase;
        margin: 20px 0 20px 0;
    }

    h3 {
        font-size: 18px;
        margin: 20px 0 0 0;
    }
`

export default function Contact() {
    const data = useStaticQuery(
        graphql`
            query {
                dataJson {
                    contacts {
                        mail
                    }
                }
            }
        `
    )

    const contacts = data.dataJson.contacts

    return (
        <Footer id="contact">
            <h2><I18n id="contact.title" defaultMessage={"a leading"} /></h2>
            <Grid>
                <div>
                    <h2><I18n id="contact.music" defaultMessage={"a leading"} /></h2>
                    <Buttons />
                </div>
                <div>
                    <h2><I18n id="contact.social-media" defaultMessage={"a leading"} /></h2>
                    <SocialLinks />
                    <a alt="mail adress" href={`mailto:${contacts.mail}`} rel="noreferrer" className="o-custom-link">
                        <h3>{contacts.mail}</h3>
                    </a>
                </div>
            </Grid>
        </Footer>
    )
}

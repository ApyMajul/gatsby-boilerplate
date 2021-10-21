import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { FormattedMessage as I18n } from "gatsby-plugin-react-intl"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

import Contact from "../elements/Contact"
import useDetectMobile from "../utils/IsMobile"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    border: 0.25rem solid;
    max-width: calc(100vw - 0.50rem);

    & > .where {
        display: flex;
        flex-direction: column;
        border-right: 0.25rem solid;
        padding: 10px;

        h2 {
            margin: 0.2rem;
        }
    }
`

export default function Footer() {
    const data = useStaticQuery(
        graphql`
            query {
                dataJson {
                    contacts {
                        adresse
                        telephone
                    }
                }
            }
        `
    )

    const contacts = data.dataJson.contacts
    const isMobile = useDetectMobile()

    return (
        <Container>
            { !isMobile &&
                <div className="where">
                    <h2><I18n id="footer.title1" defaultMessage={"Title"} /></h2>
                    <p><I18n id="footer.propos" defaultMessage={"blblabla"} /></p>
                    <h2><I18n id="footer.title2" defaultMessage={"Title"} /></h2>
                    <p>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="o-icon" />
                        &nbsp;&nbsp;
                        {contacts.adresse}
                    </p>
                </div>
            }
            <Contact />
        </Container>
    )
}


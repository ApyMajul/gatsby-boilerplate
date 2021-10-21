import React from "react"
import { Link } from "gatsby"
import { FormattedMessage as I18n } from "gatsby-plugin-react-intl"
import styled from "@emotion/styled"

const LegalContainer = styled.div`
    justify-content: center;
    font-size: 0.5rem;
`

export default function LegalLink() {
    return (
        <LegalContainer className="o-line-in">
            <p><I18n id="elements.legal.own" defaultMessage={"© QQCHOSE 2021"} /></p>
            &nbsp;<p>|</p>&nbsp;
            <Link to="/legal" className="o-custom-link">
                <I18n id="elements.legal.ml" defaultMessage={"Mentions légales"} />
            </Link>
            {/* &nbsp;<p>|</p>&nbsp;
            <Link to="/legal" className="o-custom-link">
                <I18n id="elements.legal.pol" defaultMessage={"Politique de confidentialité"} />
            </Link> */}
        </LegalContainer>
    )
}

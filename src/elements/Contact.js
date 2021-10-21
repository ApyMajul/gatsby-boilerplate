import React from "react"
import styled from "@emotion/styled"
import { FormattedMessage as I18n } from "gatsby-plugin-react-intl"

import LegalLink from "./LegalLink"
import SocialLinks from "./SocialLinks"
import MailForm from "./MailForm"

const ContactContainer = styled.div`
    display: grid;
    grid-template-rows: 3fr 1fr;
    width: 100%;

    & > .mail {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background-color: var(--light);

        h2 {
            margin: 0;
            align-self: center;
            text-align: center;
        }
    }

    & > .form-social {
        display: grid;
        border-bottom: 0.25rem solid;
        grid-template-columns: 80% 20%;

        & > .form {
            display: grid;
            background-color: var(--light);
            border-right: 0.25rem solid;
        }

        & > .social {
            height: 100%;
            width: 100%;
            background-color: var(--light);
            margin: 0;
            display: grid;
            justify-content: center;
        }
    }
}

`

export default function Contact() {
    return (
        <ContactContainer>
            <div className="form-social">
                <div className="form">
                    <MailForm />
                </div>
                <div className="social">
                    <SocialLinks />
                </div>
            </div>
            <div className="mail">
                <h2><I18n id="elements.contact" defaultMessage={"contact@contact.fr"} /></h2>
                <LegalLink />
            </div>
        </ContactContainer>
    )
}

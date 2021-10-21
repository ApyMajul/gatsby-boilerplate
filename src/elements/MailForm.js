import React from "react"
import styled from "@emotion/styled"
import { FormattedMessage as I18n } from "gatsby-plugin-react-intl"

import AddContact from "../utils/SendinBlue"

const Container = styled.div`
    padding: 20px;
    display: grid;

    h4 {
        color: var(--dark);
        align-self: center;
        text-align: center;
    }
`

const Field = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 10px;

    input {
        width: 100%;
        padding: 0;
        border: 2px solid;
        border-radius: 4px;
        color: var(--dark);
        background-color: transparent;
    }

    button {
        width: 100%;
        border: 2px solid;
        border-radius: 4px;
        padding: 0;
        background-color: var(--dark);
        color: var(--light);
    }
`

export default function MailForm() {
    const [mail, setMail] = React.useState()

    function handleSubmit(event) {
        event.preventDefault()
        AddContact(mail)
    }

    return (
        <Container>
            <h4 style={{ }}>
                <I18n id="elements.mail.message" defaultMessage={"We keep in touch"} />
            </h4>
            <form onSubmit={handleSubmit}>
                <Field>
                    <input
                        type="email"
                        name="email"
                        required
                        onChange={e => setMail(e.target.value)}
                    />
                    <button type="submit">
                        <I18n id="elements.mail.button" defaultMessage={"Submit"} />
                    </button>
                </Field>
            </form>
        </Container>
    )
}

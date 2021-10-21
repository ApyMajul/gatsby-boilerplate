import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FormattedMessage as I18n } from "gatsby-plugin-react-intl"

export default function StatutoryNotices() {
    const data = useStaticQuery(
        graphql`
            query {
                dataJson {
                    hebergeur
                    editeur
                    responsable
                    contacts {
                        mail
                    }
                }
            }
        `
    )

    return (
        <div>
            <Link to="/" style={{ fontSize: "16px", color: "var(--dark)", paddingLeft: "8vw", paddingTop: "5vh" }}>
                <I18n id="legal.return" defaultMessage={"return to website"} />
            </Link>
            <div style={{ position: "relative", alignItems: "center", padding: "10vh 8vw 15px" }}>
                <h1><I18n id="legal.title" defaultMessage={"blab bla"} /></h1>
                <p><I18n id="legal.intro" defaultMessage={"blab bla"} /></p>
                <h2><I18n id="legal.edition" defaultMessage={"bla hébergeur"} /></h2>
                <p>{data.dataJson.editeur}</p>
                <h2><I18n id="legal.hebergeur" defaultMessage={"bla hébergeur"} /></h2>
                <p>{data.dataJson.hebergeur}</p>
                <h2><I18n id="legal.resp" defaultMessage={"bla hébergeur"} /></h2>
                <p>{data.dataJson.responsable}</p>
                <h2><I18n id="legal.contact" defaultMessage={"bla hébergeur"} /></h2>
                <p>{data.dataJson.contacts.mail}</p>
            </div>
        </div>
    )
}

import React from "react"
import { Helmet as ReactHelmet } from "react-helmet"
import { useIntl } from "gatsby-plugin-react-intl"
import { useStaticQuery, graphql } from "gatsby"

export default function MetaData() {
    const intl = useIntl()
    const data = useStaticQuery(
        graphql`
            query {
                dataJson {
                    name
                    title
                    description
                }
            }
        `
    )

    const { name, title, description, URL } = data.dataJson

    return (
        <ReactHelmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <html lang={intl.locale} />

            <meta name="og:title" content={title} />
            <meta name="og:description" content={description}/>
            <meta name="og:site_name" content={name} />
            <meta name="og:locale" content={intl.locale} />
            <meta name="og:type" content="website" />
            {/* <meta name="og:image" content="http://..../logo_cultive.png" /> */}
            <meta name="og:url" content={URL} />
        </ReactHelmet>
    )
}

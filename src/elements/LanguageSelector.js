import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-react-intl"
import { useStaticQuery, graphql } from "gatsby"

const LanguageSelector = () => {
    const data = useStaticQuery(
        graphql`
            query {
                dataJson {
                    languages
                }
            }
        `
    )

    return (
        <IntlContextConsumer>
            {({ language: currentLocale }) =>
                data.dataJson.languages.map(language => (
                    <a
                        key={language}
                        onClick={() => changeLocale(language)}
                        className="o-custom-link">
                        {language} |&nbsp;
                    </a>
                ))
            }
        </IntlContextConsumer>
    )
}

export default LanguageSelector

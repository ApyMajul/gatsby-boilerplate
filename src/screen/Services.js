import React from "react"
import { FormattedMessage as I18n } from "gatsby-plugin-react-intl"

import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faUsers, faUserCheck, faChartLine  } from "@fortawesome/free-solid-svg-icons"

const Container = styled.div`
    padding-right: 8vw;
    padding-left: 8vw;
    padding-top: 50px;
    text-align: center;
    background-color: white;
    z-index: 10;

    h1 {
        margin-bottom: 128px;
        font-size: min(max(8vw, 16px), 64px);
        line-height: 1.5;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    align-items: stretch;
`

const ServiceCard = styled.div`
    width: 270px;
    display: block;
    align-self: stretch;
    justify-self: center;
    padding: 15px;
    margin-bottom: 80px;

    & > .f-icon {
        font-size: 115px;
        color: inherit;
    }
`

const Categories = styled.h2`
    text-transform: uppercase;
    margin-bottom: 30px;
    font-size: 30px;
`

const SectionName = styled.h1`
    font-weight: 700;
    text-align: center;
    text-transform: lowercase;

    span {
        display: inline-block;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        color: #000000;
        margin-bottom: 128px;

        &:before,
        &:after {
            content: '';
            display: inline-block;
            width: 100%;
            border-top: 8px solid;
        }

        &:before { margin-bottom: 0.25em; }
        &:after { margin-top: 0.25em; }
`

export default function Services() {
    return (
        <Container id="services">
            <SectionName>
                <span>
                    <I18n
                        id="services.title"
                        defaultMessage={"a leading"} />
                </span>
            </SectionName>
            <h1>
                <I18n
                    id="services.tagline"
                    defaultMessage={"a leading"} />
            </h1>
            <Grid>
                <ServiceCard>
                    <FontAwesomeIcon icon={faUsers} className="f-icon"/>
                    <Categories>
                        <I18n
                            id="services.service1.title"
                            defaultMessage={"a leading"} />
                    </Categories>
                    <p>
                        <I18n
                            id="services.service1.description"
                            defaultMessage={"a leading"} />
                    </p>
                </ServiceCard>
                <ServiceCard>
                    <FontAwesomeIcon icon={faCode} className="f-icon"/>
                    <Categories>
                        <I18n
                            id="services.service2.title"
                            defaultMessage={"a leading"} />
                    </Categories>
                    <p>
                        <I18n
                            id="services.service2.description"
                            defaultMessage={"a leading"} />
                    </p>
                </ServiceCard>
                <ServiceCard>
                    <FontAwesomeIcon icon={faUserCheck} className="f-icon"/>
                    <Categories>
                        <I18n
                            id="services.service3.title"
                            defaultMessage={"a leading"} />
                    </Categories>
                    <p>
                        <I18n
                            id="services.service3.description"
                            defaultMessage={"a leading"} />
                    </p>
                </ServiceCard>
                <ServiceCard>
                    <FontAwesomeIcon icon={faChartLine} className="f-icon"/>
                    <Categories>
                        <I18n
                            id="services.service4.title"
                            defaultMessage={"a leading"} />
                    </Categories>
                    <p>
                        <I18n
                            id="services.service4.description"
                            defaultMessage={"a leading"} />
                    </p>
                </ServiceCard>
            </Grid>
        </Container>
    )
}

import React from "react"
import styled from "@emotion/styled"
import { FormattedMessage as I18n } from "gatsby-plugin-react-intl"

const Container = styled.div`
    font-family: Roboto, sans-serif;
    margin: 1rem;
    z-index: 1031;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 2rem);
    width: calc(100% - 2rem);
    background-color: black;

    & > .tagline {
        display: flex;
        flex-direction: column;
        height: 80%;
        padding-right: 15px;
        line-height: 0.9;
    }

    & > .adress {
        height: 20vh;
        display: flex;
        padding-left: 15px;
        padding-bottom: 15px;
        align-items: flex-end;
        text-align: left;
        color: #fff;
    }

    h2 {
        text-align: right;
        font-size: min(20vh,35vw);
        font-weight: 800;
        color: #fff;
        margin:0;
    }

    h3 {
        font-size: min(8vh,8vw);
    }
`

export default function WeAllMakeArt() {
    return (
        <Container>
            <div className="tagline">
                <h2><I18n id="weAllMakeArt.1" defaultMessage={"we"} /></h2>
                <h2><I18n id="weAllMakeArt.2" defaultMessage={"all"} /></h2>
                <h2><I18n id="weAllMakeArt.3" defaultMessage={"make"} /></h2>
                <h2><I18n id="weAllMakeArt.4" defaultMessage={"art"} /></h2>
            </div>
            <div className="adress">
                <h3><I18n id="weAllMakeArt.5" defaultMessage={"allmecen.com"} /></h3>
            </div>
        </Container>
    )
}

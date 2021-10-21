import React from "react"
import styled from "@emotion/styled"
import { FormattedMessage as I18n } from "gatsby-plugin-react-intl"

const Container = styled.div`
    padding-right: 8vw;
    padding-left: 8vw;
    padding-top: 45px;
    background-color: #0000ff;
    height: calc(100vh - 45px);
    overflow: hidden;
`

const Tagline = styled.h1`
    font-size: min(max(8vw, 16px), 120px);
    line-height: 1.3;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
    animation: appears 2s;
    @keyframes appears {
        0% {
            transform: translate3d(0px, 8vw, 0px);
        }
    }
`

const Mask = styled.div`
    background-color: #0000ff;
    opacity: 100;
    position: relative;
    height: min(max(8vw, 16px), 120px);
    min-height: 10vh;
    display: flex;
    align-items: center;
`

const Divider = styled.div`
    border-top: 2px solid #fff;
    margin-top: 15px;
    margin-bottom: 50px;
    position: relative;
    animation: runaway 2s;
    @keyframes runaway {
        0% {
            transform: translate3d(-100vw, 0px, 0px);
        }
    }
`

export default function Title() {
    return (
        <Container>
            <Divider />
                <div>
                <Mask>
                    <Tagline className="h1-title">
                        <I18n
                            id="screentitle.title1"
                            defaultMessage={"a leading"} />
                    </Tagline>
                </Mask>
                <Mask>
                    <Tagline className="h1-title">
                        <I18n
                            id="screentitle.title2"
                            defaultMessage={"a leading"} />
                    </Tagline>
                </Mask>
                <Mask>
                    <Tagline className="h1-title">
                        <I18n
                            id="screentitle.title3"
                            defaultMessage={"a leading"} />
                    </Tagline>
                </Mask>
                <Mask>
                    <button className="button--big button--hollow" style={{ color: "#fff", fontSize: "min(max(8vw, 16px), 16px)" }}>
                        <I18n
                            id="screentitle.cta"
                            defaultMessage={"a leading"} />
                    </button>
                </Mask>
                </div>
        </Container>
    )
}

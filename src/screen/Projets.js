import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage as I18n, Link } from "gatsby-plugin-react-intl"
import styled from "@emotion/styled"
import Img from "gatsby-image"

const Container = styled.div`
    padding-right: 8vw;
    padding-left: 8vw;
    padding-top: 50px;
    text-align: center;
    position: relative;
    background-color: white;
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

const Projet = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 200vh;
    bottom: 0px;
    flex-direction: column;
    justify-content: flex-start;
    flex: 0 0 auto;
`

const ImageMask = styled.div`
    position: sticky;
    top: 0px;
    bottom: 0px;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;
`

const ProjetInfo = styled.div`
    position: absolute;
    padding-left: 20px;
    padding-right: 20px;
    left: 0%;
    top: auto;
    right: 0%;
    bottom: 0%;
    display: flex;
    height: 30vh;
    padding: 50px 8vw;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #0a0a0a;
    color: #fff;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        padding-top: 15px;
        padding-bottom: 15px;
    }
`

const TitleMask = styled.div`
    position: relative;
    overflow: hidden;
    width: 40%;
    @media (max-width: 768px) {
        width: 100%;
    }
`

const Title = styled.h2`
    position: relative;
    marginTop: 0px;
    marginBottom: Opx;
    fontSize: 24px;
    lineHeight: 1;
    fontWeight: 300;
    letterSpacing: Opx;
    @media (max-width: 768px) {
        font-size: 22px;
    }
`

const InfoWrapper = styled.div`
    position: relative;
    display: flex;
    width: 60%;
    justify-content: space-between;
    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
    }
`

const InfoText = styled.div`
    position: relative;
    margin-right: 0px;
    padding-right: 40px;
    color: #9C9C9C;
    font-size: 14px;
    line-height: 1.5;
    @media (max-width: 768px) {
        padding-bottom: 10px;
    }
`

const CTA = styled.div`
    position: relative;
    display: flex;
    padding-top: 5px;
    justify-content: flex-end;
    align-items: stretch;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h3 {
        color: #fff;
        margin-top: 0px;
        margin-right: 12px;
        margin-bottom: 0px;
        font-size: 16px;
        line-height: 1;
        text-transform: uppercase;
    }
`

export default function Projets() {
    const data = useStaticQuery(
        graphql`
          query {
            projet1: file(relativePath: { eq: "images/projet2.jpg" }) {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            projet2: file(relativePath: { eq: "images/projet1.jpg" }) {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            projet3: file(relativePath: { eq: "images/projet3.jpg" }) {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `
    )

    return (
        <div>
            <Container id="projets">
                <SectionName>
                    <span>
                        <I18n
                            id="projets.title"
                            defaultMessage={"a leading"} />
                    </span>
                </SectionName>
                <h1 style={{
                        marginBottom: "128px",
                        fontSize: "min(max(8vw, 16px), 64px)",
                        lineHeight: "1.5" }}>
                    <I18n
                        id="projets.tagline"
                        defaultMessage={"a leading"} />
                </h1>
            </Container>
            <div style={{ position: "relative", display: "flex", width: "100%", flexDirection: "column", justifyContent: "flex-start", alignItems: "stretch" }}>
                <Projet style={{ zIndex: "3" }}>
                    <ImageMask style={{ maxWidth: "100%", verticalAlign: "middle", display: "inline-block" }}>
                        <Img
                            style={{ position: "relative", width: "100%", height: "100%", objectFit: "cover" }}
                            fluid={data.projet1.childImageSharp.fluid}
                            alt="projet 1" />
                    </ImageMask>
                    <ProjetInfo>
                        <TitleMask>
                            <Title>
                                <I18n
                                    id="projets.projet1.title"
                                    defaultMessage={"Healthcare"} />
                            </Title>
                        </TitleMask>
                        <InfoWrapper>
                            <InfoText>
                                <I18n
                                    id="projets.projet1.text"
                                    defaultMessage={"From small mom/papa style restaurants in the city, fast-food chains, high-end National chains."} />
                            </InfoText>
                            <CTA alt="project 1 illustration">
                                <Link to={"/breathe"} className="o-obvious-link">
                                    <div>
                                        <h3>
                                            <I18n
                                                id="projets.link"
                                                defaultMessage={"Explore"} />
                                        </h3>
                                        <h3>→</h3>
                                    </div>
                                </Link>
                            </CTA>
                        </InfoWrapper>
                    </ProjetInfo>
                </Projet>
                <Projet style={{ zIndex: "2" }}>
                    <ImageMask style={{ maxWidth: "100%", verticalAlign: "middle", display: "inline-block" }}>
                        <Img
                            style={{ position: "relative", width: "100%", height: "100%", objectFit: "cover" }}
                            fluid={data.projet2.childImageSharp.fluid}
                            alt="projet 1" />
                    </ImageMask>
                    <ProjetInfo>
                        <TitleMask>
                            <Title>
                                <I18n
                                    id="projets.projet2.title"
                                    defaultMessage={"Healthcare"} />
                            </Title>
                        </TitleMask>
                        <InfoWrapper>
                            <InfoText>
                                <I18n
                                    id="projets.projet2.text"
                                    defaultMessage={"From small mom/papa style restaurants in the city, fast-food chains, high-end National chains."} />
                            </InfoText>
                            <CTA alt="project 2 illustration">
                                <Link to={"/breathe"}>
                                    <div>
                                        <h3>
                                            <I18n
                                                id="projets.link"
                                                defaultMessage={"Explore"} />
                                        </h3>
                                        <h3>→</h3>
                                    </div>
                                </Link>
                            </CTA>
                        </InfoWrapper>
                    </ProjetInfo>
                </Projet>
                <Projet style={{ zIndex: "1" }}>
                    <ImageMask style={{ maxWidth: "100%", verticalAlign: "middle", display: "inline-block" }}>
                        <Img
                            style={{ position: "relative", width: "100%", height: "100%", objectFit: "cover" }}
                            fluid={data.projet3.childImageSharp.fluid}
                            alt="projet 1" />
                    </ImageMask>
                    <ProjetInfo>
                        <TitleMask>
                            <Title>
                                <I18n
                                    id="projets.projet3.title"
                                    defaultMessage={"Healthcare"} />
                            </Title>
                        </TitleMask>
                        <InfoWrapper>
                            <InfoText>
                                <I18n
                                    id="projets.projet3.text"
                                    defaultMessage={"From small mom/papa style restaurants in the city, fast-food chains, high-end National chains."} />
                            </InfoText>
                            <CTA alt="project 3 illustration">
                                <Link to={"/breathe"}>
                                    <div>
                                        <h3>
                                            <I18n
                                                id="projets.link"
                                                defaultMessage={"Explore"} />
                                        </h3>
                                        <h3>→</h3>
                                    </div>
                                </Link>
                            </CTA>
                        </InfoWrapper>
                    </ProjetInfo>
                </Projet>

            </div>
        </div>
    )
}

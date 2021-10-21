import React from "react"
import { FormattedMessage as I18n } from "gatsby-plugin-react-intl"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import useDetectMobile from "../utils/IsMobile"
import bodak from "../images/bodak1.mp4"

export default function Gallery() {
    const isMobile = useDetectMobile()

    const data = useStaticQuery(
        graphql`
            query {
                allFile(filter: { relativeDirectory: { eq: "images/gallery" } }) {
                    edges {
                        node {
                                name
                                childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        `
    )

    const dictionary = Object.assign({}, ...data.allFile.edges.map(x => ({ [x.node.name]: x.node.childImageSharp })))

    return (
        <div className={isMobile ? "gallery__mobile" : "gallery gallery__mvp"}>
            <div className={isMobile ? "gallery__column gallery__mobile" : "gallery__column gallery__row"}>
                <div className="gallery__column">
                    <div className="gallery__link">
                        <figure className="gallery__thumb">
                            <Img fluid={dictionary.alanvers1.fluid} alt="" className="gallery__image"></Img>
                            <figcaption className="gallery__caption"><I18n id="gallery.alanvers1" defaultMessage={"Caption"}/></figcaption>
                        </figure>
                    </div>
                    <div className="gallery__link">
                        <figure className="gallery__thumb">
                            <Img fluid={dictionary.leiga.fluid} alt="" className="gallery__image"></Img>
                            <figcaption className="gallery__caption"><I18n id="gallery.leiga" defaultMessage={"Caption"}/></figcaption>
                        </figure>
                    </div>
                    <div className="gallery__link">
                        <figure className="gallery__thumb">
                            <Img fluid={dictionary.studio1.fluid} alt="" className="gallery__image"></Img>
                            <figcaption className="gallery__caption"><I18n id="gallery.studio1" defaultMessage={"Caption"}/></figcaption>
                        </figure>
                    </div>
                    <div className="gallery__link">
                        <figure className="gallery__thumb">
                            <Img fluid={dictionary.alanvers3.fluid} alt="" className="gallery__image"></Img>
                            <figcaption className="gallery__caption"><I18n id="gallery.alanvers3" defaultMessage={"Caption"}/></figcaption>
                        </figure>
                    </div>
                </div>
                <div className="gallery__column">
                    <div className="gallery__link">
                        <figure className="gallery__thumb">
                            <Img fluid={dictionary.alanvers.fluid} alt="" className="gallery__image"></Img>
                            <figcaption className="gallery__caption"><I18n id="gallery.alanvers" defaultMessage={"Caption"}/></figcaption>
                        </figure>
                    </div>
                    <div className="gallery__link">
                        <figure className="gallery__thumb">
                            <Img fluid={dictionary.horsdelapeau1.fluid} alt="" className="gallery__image"></Img>
                            <figcaption className="gallery__caption"><I18n id="gallery.horsdelapeau" defaultMessage={"Caption"}/></figcaption>
                        </figure>
                    </div>
                    <div className="gallery__link">
                        <figure className="gallery__thumb">
                            <Img fluid={dictionary.FoliesOrdinaires2.fluid} alt="" className="gallery__image"></Img>
                            <figcaption className="gallery__caption"><I18n id="gallery.FoliesOrdinaires2" defaultMessage={"Caption"}/></figcaption>
                        </figure>
                    </div>
                </div>
            </div>
            <div className="gallery__column">
                <div className="gallery__link">
                    <figure className="gallery__thumb">
                        <video autoPlay={true} loop={true} muted={true} className="gallery__image gallery__video">
                            <source src={bodak} type="video/mp4" />
                            <figcaption className="gallery__caption"><I18n id="gallery.bodak" defaultMessage={"Caption"}/></figcaption>
                        </video>
                    </figure>
                </div>
                <div className="gallery">
                    <div className="gallery__column">
                        <div className="gallery__link">
                            <figure className="gallery__thumb">
                                <Img fluid={dictionary.FoliesOrdinaires.fluid} alt="" className="gallery__image"></Img>
                                <figcaption className="gallery__caption"><I18n id="gallery.FoliesOrdinaires" defaultMessage={"Caption"}/></figcaption>
                            </figure>
                        </div>
                        <div className="gallery__link">
                            <figure className="gallery__thumb">
                                <Img fluid={dictionary.studio2.fluid} alt="" className="gallery__image"></Img>
                                <figcaption className="gallery__caption"><I18n id="gallery.studio2" defaultMessage={"Caption"}/></figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="gallery__column">
                        <div className="gallery__link">
                            <figure className="gallery__thumb">
                                <Img fluid={dictionary.horsdelapeau2.fluid} alt="" className="gallery__image"></Img>
                                <figcaption className="gallery__caption"><I18n id="gallery.horsdelapeau2" defaultMessage={"Caption"}/></figcaption>
                            </figure>
                        </div>
                        <div className="gallery__link">
                            <figure className="gallery__thumb">
                                <Img fluid={dictionary.instincts.fluid} alt="" className="gallery__image"></Img>
                                <figcaption className="gallery__caption"><I18n id="gallery.instincts" defaultMessage={"Caption"}/></figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="gallery__link">
                    <figure className="gallery__thumb">
                        <Img fluid={dictionary.alanvers2.fluid} alt="" className="gallery__image"></Img>
                        <figcaption className="gallery__caption"><I18n id="gallery.alanvers2" defaultMessage={"Caption"}/></figcaption>
                    </figure>
                </div>
            </div>
        </div>

    )
}
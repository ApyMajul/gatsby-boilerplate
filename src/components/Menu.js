import React from "react"
import { FormattedMessage as I18n } from "gatsby-plugin-react-intl"
import { Link } from "gatsby"

import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

import LanguageSelector from "../elements/LanguageSelector"
import SocialLinks from "../elements/SocialLinks"
import LegalLink from "../elements/LegalLink"

const Overlay = styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.open ? "100%" : "0%"};
    transition: 0.5s;
    overflow: hidden;
    background-color: var(--dark);
    color: var(--light);

    a {
		color: inherit;
        text-decoration: inherit;
        margin: 0.5rem 1rem;
    }

    div {
        direction: flex;
        flex-wrap: wrap;
        width: 100%;
        text-align: center;
    }

    & > menu-container {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding-top: 3rem;
        padding-bottom: 6rem;
        position: relative;

        & > primary-links {
            display: flex;
            flex-direction: column;
            margin-bottom: 1.5rem;
            text-align: center;
            font-size: 2rem;
            line-height: 2.5rem;
            font-weight: bold;

            & > .item {
                &:last-of-type {
                  &:before {
                    content: '';
                    display: block;
                    width: 95px;
                    border-top: 2px solid;
                    margin: 0 auto 16px;
                  }
                }
            }
        }
    }
`

const Button = styled.button`
    margin: 0;
    margin-right: 0;
    padding: 0;
    border: 0;
    z-index: 1;
    background-color: transparent;
    font-size: 25px;
    color: var(--light);
`

export default function Menu() {
    const [open, setOpen] = React.useState(false)

    const toggleOpen = () => {
        setOpen(!open)
    }

    return (
        <>
            <Overlay open={open}>
                <menu-container>
                    <primary-links onClick={toggleOpen}>
                        <Link className="o-custom-link item" to="#services">
                            <I18n id="menu.category1" defaultMessage={"services"} />
                        </Link>
                        <Link className="o-custom-link item"to="#projets">
                            <I18n id="menu.category2" defaultMessage={"projets"} />
                        </Link>
                        <Link className="o-custom-link item" to="/about">
                            <I18n id="menu.category3" defaultMessage={"About"} />
                        </Link>
                        <Link className="o-custom-link item" to="#contact">
                            <I18n id="menu.contact" defaultMessage={"Contact"} />
                        </Link>
                    </primary-links>
                    <div>
                        <SocialLinks />
                    </div>
                    <div>
                        <LanguageSelector />
                    </div>
                    <div>
                        <LegalLink />
                    </div>
                </menu-container>
            </Overlay>

            <Button aria-label="menu opener" onClick={toggleOpen}>
                <FontAwesomeIcon icon={open ? faTimes : faBars} />
            </Button>
        </>
    )
}
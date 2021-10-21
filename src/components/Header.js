import React from "react"
import { Link } from "gatsby"
import { FormattedMessage as I18n } from "gatsby-plugin-react-intl"
import styled from "@emotion/styled"

import useDetectMobile from "../utils/IsMobile"

import Menu from "./Menu"
import LanguageSelector from "../elements/LanguageSelector"
import MenuList from "../elements/MenuList"

const CustomeHeader = styled.header`
    background-color: var(--dark);
    color: var(--light);
    padding: 20px 0 15px 0;
	position: fixed;
    z-index: 100;
	left: 0;
	right: 0;
    top: 0;
    display: block;

    h1 {
        font-weight: 800;
        font-size: 20px;
        color: var(--light);
    }

    h3 {
        color: var(--light);
        margin-left: 20px;

        :hover {
            color: var(--primary);
        }
    }

	& > .container {
        justify-content: space-between;
        padding-left: 8vw;
        padding-right: 8vw;
    }
`

export default function Header() {
    const isMobile = useDetectMobile()
    const [hidden, setHidden] = React.useState(true)

    const listenScrollEvent = event => {
        if (window.scrollY > (document.documentElement.clientHeight*1)) {
            return setHidden(false)
        } else {
            return setHidden(true)
          }
    }

    React.useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)

        return () =>
            window.removeEventListener("scroll", listenScrollEvent)
    }, [])

    if (hidden) {
        return null
    }

    return (
        <CustomeHeader>
            <div className="container o-line-in">
                <div>
                    <Link to="/">
                        <h1><I18n id="header.title" defaultMessage={"Titre example"} /></h1>
                    </Link>
                </div>
                <div className="container o-line-in">
                { !isMobile && <MenuList />}
                </div>
                <div className="container o-line-in">
                    { !isMobile && <LanguageSelector />}
                    <Menu />
                </div>
            </div>
        </CustomeHeader>
    )
}

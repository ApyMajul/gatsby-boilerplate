import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import MenuList from "../elements/MenuList"
import Contact from "../elements/Contact"

import logo from "../images/logo.svg"

const Sidebar = styled.div`
    display: grid;
    border: 0.25rem solid;
    height: calc(100vh - 0.5rem);
    color: var(--dark);
    padding: 0;
    grid-template-rows: 2fr 2fr 3fr;

    & > .un {
        display: grid;
        border-bottom: 0.25rem solid;

        img {
            height: 80%;
            width: 60%;
            align-self: center;
            justify-self: center;
        }
    }

    & > .deux {
        border-bottom: 0.25rem solid;
        display: grid;
    }
`

export default function Info() {
    return (
        <Sidebar>
            <Link className="un" to="/">
                <img alt="logo" src={logo} />
            </Link>
            <div className="deux">
                <MenuList />
            </div>
            <Contact />
        </Sidebar>
    )
}

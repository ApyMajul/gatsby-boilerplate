import React from "react"
import styled from "@emotion/styled"

import useDetectMobile from "../utils/IsMobile"

import Metadata from "../elements/Metadata"
import Header from "./Header"
import Footer from "./Footer"
import Info from "./Info"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
`

const ContainerAter = styled.div`
    display: grid;
    grid-template-columns: 25% 75%;
    padding: 0;
    & > .child {
        display: grid;
        border: 0.25rem solid;
        border-left: 0;
        width: calc(75vw - 0.25rem);
        height: calc(100vh - 0.5rem);
        color: var(--dark);
        overflow-y: auto;
    }
`

export default function Layout({ type, children }) {
    const isMobile = useDetectMobile()
    const [ready, SetReady] = React.useState(false)

    React.useEffect(() => {
        SetReady(true)
    }, [])

    if (!ready) {
        return null
    }

    if (type === "special" && !isMobile) {
        return (
            <ContainerAter>
                <Metadata />
                <Info />
                <div className="child">{children}</div>
            </ContainerAter>
        )
    }

    return (
        <Container>
            <Metadata />
            <Header />
            {children}
            <Footer />
        </Container>
    )
}
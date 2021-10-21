import React from "react"
import { Link } from "gatsby"
import { FormattedMessage as I18n } from "gatsby-plugin-react-intl"
import styled from "@emotion/styled"

const Group = styled.div`
    display: flex;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    width: 100%;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        border-right: 0.25rem solid;

        :hover {
            border-color: var(--dark);
            color: var(--primary);
        }
    }

    h3 {
        text-align: center;
        font-size: 20px;

        @media screen and (max-width: 768px) {
            font-size: 15px;
            font-weight: 600;
        }
    }

    & > .last {
        border-right: 0;
    }

`

export default function MenuList() {
    return (
        <Group>
            <Link to="/about">
                <h3>
                    <I18n id="elements.menuList.lien1" defaultMessage={"Lien"} />
                </h3>
            </Link>
            <Link to="/blog">
                <h3>
                    <I18n id="elements.menuList.lien2" defaultMessage={"Lien"} />
                </h3>
            </Link>
            <Link to="/legal" className="last">
                <h3>
                    <I18n id="elements.menuList.lien3" defaultMessage={"Lien"} />
                </h3>
            </Link>
        </Group>
    )
}

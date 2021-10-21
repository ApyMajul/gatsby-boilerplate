import React from "react"
import styled from "@emotion/styled"
import { FormattedMessage as I18n } from "gatsby-plugin-react-intl"

import Layout from "../components/layout"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;

    & > .transition {
        margin: 3rem 0 3rem 0;
        padding: 6rem 10rem 6rem 10rem;
        box-shadow: 0 -10px 7px -10px rgba(0,0,0,.24) inset!important;

        @media (max-width: 760px) {
            padding: 6rem 2rem 6rem 2rem;
        }
    }

    h1 {
        color: var(--allmecen-primary);
        text-align: end;
        font-size: min(max(15vw,16px),90px);
        font-weight: 700;
        line-height: 1.3em;
        letter-spacing: 0em;
        padding-bottom: 3rem;
        text-transform: uppercase;
    }

    h2 {
        text-align: center;
        font-size: min(9vh,9vw);
        font-weight: 700;
        line-height: 1.3em;
        letter-spacing: 0em;
        color: #fff;
    }

    h3 {
        text-transform: uppercase;
        text-align: justify;
        font-size: 18px;
        font-weight: 700;
        color: #222;
        margin-top: 1em;
        padding-right: 10px;
    }

    h4 {
        color: #9e9e9e;
        margin: 0;
        padding: 0;
        font-size: 18px;
        font-weight: 700;
    }

    p {
        font-size: 15px;
        text-align: justify;
        line-height: 1.42857143;
        color: #222;
        margin-bottom: 1rem;

        @media (max-width: 760px) {
          padding: 0px 0px 8px;
        }
    }
`

const ListItem = styled.p`
  border-bottom: 1px solid #dbdbdb;
`

const Tagline = styled.h1`
    font-size: min(max(8vw, 16px), 90px);
    line-height: 1.3;
    font-weight: 500;
    text-transform: uppercase;
    text-align: end;
`
const Part = styled.div`
  padding: 3rem 2rem 0;

  @media (min-width: 760px) {
    display: grid;
    grid-template-columns: 1fr 4fr;
    padding: 3rem 10rem 0;
  }
`

export default function About() {
  return (
    <Layout type="special">
      <Container>
        <Tagline>
          <I18n
            id="about.title"
            defaultMessage={"We partner with our clients to help solve their business challenges"} />
        </Tagline>
      </Container>
      <Container>
        <Part>
          <h3><I18n id="about.who.title" defaultMessage={"Who are we"} /></h3>
          <div>
            <p><I18n id="about.who.summary" defaultMessage={"Beyond can help you throughout your digital journey. We partner with marketing, product and board level leaders to help you understand your customers better - and then build the right products and experiences to serve them. We work with you to define your product vision, design a strategy and improve your business outcomes. Improving customer experiences"} /></p>
          </div>
        </Part>
        <Part>
          <h3><I18n id="about.who.title2" defaultMessage={"Improving customer experiences"}/></h3>
          <div>
            <p><I18n id="about.who.speech" defaultMessage={"We objectively assess the quality of your interactions with users. We help you learn from your competitors. We design and implement improvements to drive up adoption and serve your customers better. Key services include:"}/></p>
          </div>
        </Part>
        <Part>
          <h3><I18n id="about.who.title2" defaultMessage={"Improving customer experiences"}/></h3>
          <div>
              <ListItem><I18n id="about.who.list1" defaultMessage={"Customer Experience Audit"} /></ListItem>
              <ListItem><I18n id="about.who.list2" defaultMessage={"Customer Experience Audit"} /></ListItem>
              <ListItem><I18n id="about.who.list3" defaultMessage={"Customer Experience Audit"} /></ListItem>
              <ListItem><I18n id="about.who.list4" defaultMessage={"Customer Experience Audit"} /></ListItem>
              <ListItem><I18n id="about.who.list5" defaultMessage={"Customer Experience Audit"} /></ListItem>
              <ListItem><I18n id="about.who.list6" defaultMessage={"Customer Experience Audit"} /></ListItem>
          </div>
        </Part>
        <div className="transition home-gradient">
          <h2><I18n id="about.who.transition" defaultMessage={"Website"} /></h2>
        </div>
        <Part>
          <h3><I18n id="about.how.title" defaultMessage={"How we do"} /></h3>
          <p><I18n id="about.how.summary" defaultMessage={"Beyond can help you throughout your digital journey. We partner with marketing, product and board level leaders to help you understand your customers better - and then build the right products and experiences to serve them. We work with you to define your product vision, design a strategy and improve your business outcomes. Improving customer experiences"} /></p>
        </Part>
        <Part>
          <h4><I18n id="about.how.title2" defaultMessage={"Improving customer experiences"}/></h4>
          <div>
            <p><I18n id="about.how.speech" defaultMessage={"We objectively assess the quality of your interactions with users. We help you learn from your competitors. We design and implement improvements to drive up adoption and serve your customers better. Key services include:"}/></p>
            <ListItem><I18n id="about.how.list1" defaultMessage={"Customer Experience Audit"} /></ListItem>
            <ListItem><I18n id="about.how.list2" defaultMessage={"Customer Experience Audit"} /></ListItem>
            <ListItem><I18n id="about.how.list3" defaultMessage={"Customer Experience Audit"} /></ListItem>
            <ListItem><I18n id="about.how.list4" defaultMessage={"Customer Experience Audit"} /></ListItem>
            <ListItem><I18n id="about.how.list5" defaultMessage={"Customer Experience Audit"} /></ListItem>
            <ListItem><I18n id="about.how.list6" defaultMessage={"Customer Experience Audit"} /></ListItem>
          </div>
        </Part>
    </Container>
  </Layout>
  )
}

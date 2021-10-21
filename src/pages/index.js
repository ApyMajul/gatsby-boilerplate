import React from "react"

import Layout from "../components/layout"

import Artists from "../screen/Artists"
import Gallery from "../components/Gallery"
import TitleScreen from "../screen/TitleScreen"
import Projets from "../screen/Projets"
import Services from "../screen/Services"
import Contact from "../screen/Contact"
import WeAllMakeArt from "../screen/WeAllMakeArt"

export default function Home() {
  return (
    <Layout>
      <TitleScreen />
      <Services />
      <Projets />
      <Gallery />
      <Artists />
      <WeAllMakeArt />
      <Contact />
    </Layout>
  )
}

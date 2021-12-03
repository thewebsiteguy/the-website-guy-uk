import React from "react"
import SideBar from "../components/sidebar"

export default function Home() {
  return (
    <div id="outer-container">
      <SideBar pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
      <main id="page-wrap">
        <div className="flex items-center justify-center h-screen">
          <div className="text-4xl text-bold">Hello world!</div>
        </div>
      </main>
    </div>
  )
}

import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
  	<div style={{ color: `green`, fontSize:`18px` }}>
  		<Header headerText="Miso Soup" />
  		<Link to="/about/">ABOUT SLAM</Link>
  		<h1>Satan, worship him!</h1>
  		<p>Men's asses</p>
  		<img src="https://source.unsplash.com/random/400x200" alt="" />
  	</div>
  	);
}

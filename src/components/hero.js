import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Hero() {
    const data = useStaticQuery(graphql`
        query {
        codingImage: file(relativePath: { eq: "coding.png" }) {
            childImageSharp {
            fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        }
    `)
    return (
        <div id="about" className="container mx-auto px-4 flex flex-wrap items-center pt-24 pb-12">
            <div className="w-full text-center sm:w-2/4 sm:text-left">
                <h1 className="text-5xl font-semibold">Charaf Boulafaa</h1>
                <p className="text-2xl font-medium my-4">Software Engineer</p>
                <p>Focused on giving efficient and creative results, and determined to be a integral part of a development team.</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded mt-4 tracking-wide text-lg">See Projects</button>
            </div>

            <div className="hidden sm:block sm:w-2/4">
                <Img fluid={data.codingImage.childImageSharp.fluid} />
            </div>
        </div>
    )
}

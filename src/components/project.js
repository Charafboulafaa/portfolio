import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Project(props) {
    const data = useStaticQuery(graphql`
        query {
        coronav: file(relativePath: { eq: "coronav.png" }) {
            childImageSharp {
            fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        }
    `)
    return (
        <div className="text-left flex items-center my-6 py-12 bg-gray-100 rounded-lg w-full lg:w-5/12">
            <div className="w-6/12 h-40 overflow-hidden">
                <Img fluid={data.coronav.childImageSharp.fluid} style={{ maxHeight: "100%" }} imgStyle={{ objectFit: "contain" }}/>
            </div>

            <div className="w-6/12">
                <h3 className="text-xl font-bold mb-2 text-blue-500">{props.title}</h3>
                <p className="text-gray-800">{props.description}</p>
                <div className="mt-3">
                    <a href={props.viewLink} className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-2 rounded mr-2">View Project</a>
                    
                    <a href={props.codeLink} className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-2 rounded">View Code</a>
                </div>
            </div>
        </div>
    )
}

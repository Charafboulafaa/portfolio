import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Image from "./image"
import CodeIcon from "../icons/code.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Project(props) {
    const data = useStaticQuery(graphql`
        query {
        allImageSharp {
            edges {
                node {
                fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                }
                }
            }
            }
        }
    `)
    return (
        <div className="text-center flex items-center my-6 p-6 bg-gray-100 rounded-lg w-full lg:w-5/12">
            {/* <div className="w-6/12 h-40 overflow-hidden">

                <Image imgsrc={props.image}/>
                
            </div> */}

            <div className="w-full">
                <h3 className="text-xl font-bold mb-2 text-blue-500">{props.title}</h3>
                <p className="text-gray-800">{props.description}</p>
                <div className="mt-3">
                    <a href={props.viewLink} className="text-black mr-2"><FontAwesomeIcon icon={faEye} /></a>
                    
                    <a href={props.codeLink} className="text-black "><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </div>
        </div>
    )
}

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
        <div className="text-center flex items-center my-6 p-8 bg-white rounded-lg w-full lg:w-5/12 font-sans">
            {/* <div className="w-6/12 h-40 overflow-hidden">

                <Image imgsrc={props.image}/>
                
            </div> */}

            <div className="w-full">
                <h3 className="text-3xl mb-2">{props.title}</h3>
                <p className="text-gray-800">{props.description}</p>
                <div className="my-4">
                    {props.stack
                    &&
                    props.stack.map(e => <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{e}</span>)}  
                </div>
                <div className="text-xl flex justify-evenly">
                    <a href={props.codeLink} className="text-blue-500"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href={props.viewLink} className="text-blue-500 mr-2"><FontAwesomeIcon icon={faEye} /></a>
                </div>
            </div>
        </div>
    )
}

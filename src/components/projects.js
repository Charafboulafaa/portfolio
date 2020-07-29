import React from 'react'
import Project from './project'

export default function Projects() {
    return (
        <div className="text-center">
            <h2 className="text-xl font-bold">Projects</h2>
            <p className="mt-1">What I've worked on so far</p>

            <div className="flex flex-wrap justify-evenly">
                <Project title='Coronav' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis nisi non volutpat blandit.'/>

                <Project title='You Learn' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis nisi non volutpat blandit.'/>

                <Project title='Recipe Box' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis nisi non volutpat blandit.'/>

                <Project title='Quizi' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis nisi non volutpat blandit.'/>
            </div>
        </div>
    )
}

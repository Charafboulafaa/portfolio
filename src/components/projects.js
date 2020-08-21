import React from 'react'
import Project from './project'

export default function Projects() {
    return (
        <div id="portfolio" className="bg-gray-100">
            <div className="container mx-auto px-4 text-center py-12">
                <h2 className="text-3xl font-semibold">Projects</h2>
                <p className="text-center text-base mt-1 text-gray-600">What I've worked on so far</p>

                <div className="flex flex-wrap justify-evenly mt-6">
                    <Project title='Coronav' description='A web app to get status about COVID-19 using vanilla Javascript, HTML, CSS.' image="coronav.png" codeLink="https://git.generalassemb.ly/cboulafaa/CORONAV" viewLink="https://pages.git.generalassemb.ly/cboulafaa/CORONAV"/>

                    <Project title='You Learn' description='A React app connected to youtube API to provide a distraction-free environment while learning from youtube.' image="youlearn.png" codeLink="https://github.com/Charafboulafaa/YouLearn" viewLink="#"/>

                    <Project title='Recipe Box' description='A full-stack food recipes app, using ReactJs, Express.js, and MongoDB.' image="recipes.png" codeLink="https://github.com/malcolmc10/P3-recipebox" viewLink="#"/>

                    <Project title='Quizi' description='A full-stack quiz builder app, which allows users to create quizzes that could be played by others, using React, Ruby on Rails and PostgreSQL.' image="quizi.png" codeLink="https://github.com/Charafboulafaa/Quizi" viewLink="#"/>
                </div>
            </div>
        </div>
    )
}

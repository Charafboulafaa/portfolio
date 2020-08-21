import React from 'react'
import Project from './project'

export default function Projects() {
    return (
        <div id="portfolio" className="bg-gray-100">
            <div className="container mx-auto px-4 text-center py-12">
                <h2 className="text-3xl font-semibold">Projects</h2>
                <p className="text-center text-base mt-1 text-gray-600">What I've worked on so far</p>

                <div className="flex flex-wrap justify-evenly mt-6">
                    <Project title='Coronav' description='Web app to get status about COVID-19 using vanilla Javascript, HTML, CSS.' image="coronav.png" codeLink="https://git.generalassemb.ly/cboulafaa/CORONAV" viewLink="https://pages.git.generalassemb.ly/cboulafaa/CORONAV" stack={['HTML', 'CSS', 'JS']}/>

                    <Project title='You Learn' description='React app connected to youtube API to provide a distraction-free environment while learning from youtube.' image="youlearn.png" codeLink="https://github.com/Charafboulafaa/YouLearn" viewLink="#" stack={['HTML', 'CSS', 'JS', 'React', 'Bootstrap', 'Axios']}/>

                    <Project title='Recipe Box' description='Full CRUD food recipe app that allows the user to select popular dishes based on meal type, country, cook time and follow a step by step guide to making a delicious meal.' image="recipes.png" codeLink="https://github.com/malcolmc10/P3-recipebox" viewLink="#" stack={['HTML', 'CSS', 'JS', 'React', 'TailwindCSS', 'Axios', 'ExpressJS', 'MangoDB']}/>

                    <Project title='Quizi' description='Full-stack quiz builder app, which allows users to create quizzes that could be played by others, using React, Ruby on Rails and PostgreSQL.' image="quizi.png" codeLink="https://github.com/Charafboulafaa/Quizi" viewLink="#" stack={['HTML', 'CSS', 'JS', 'React', 'TailwindCSS', 'Axios', 'Ruby On Rails', 'PostgreSQL', 'JWT']}/>
                </div>
            </div>
        </div>
    )
}

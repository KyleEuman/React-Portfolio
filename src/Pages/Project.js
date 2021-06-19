/* eslint-disable react/jsx-no-undef */
import  React from 'react';

function Project() {

    const projectArray = [
        {
            projectTitle: "HTML Portfolio",
            projectLink: "https://kyleeuman.github.io/Updated-Portfolio/",
            projectImage: "Screenshot (32).png",
            projectDescription: "This is my Portfolio made with just html and css"
        },
        {
            projectTitle: "My Media Mate",
            projectLink: "https://whispering-ridge-05864.herokuapp.com/",
            projectImage: "Screenschot (33).png",
            projectDescription: "This project is a way to sort through your different media uses and leave reviews on your favorite shows and movies as well as make lists for shows you want to watch in the future"
        },
        {
            projectTitle: "Travel Planner",
            projectLink: "https://thebsking.github.io/travel-planner",
            projectImage: "Screenshot (34).png",
            projectDescription: "This is an application to look for different flights to different locations and use google maps to check out what is availabel to do in that city."
        },
        
    ]

    return (
        <>
            <h1 ClassName='text-blue-600 text-3xl font-impact'>
                Welcome To my Projects Page!
            </h1>

            <div id="projects-container">
                { projectArray.map(eachProject => {
                    return (
                        <Project 
                            projectTitle={eachProject.projectTitle}
                            projectLink={eachProject.projectLink} 
                            projectDesc={eachProject.projectDesc}
                            projectImage={eachProject.projectImage}
                        />
                    )}
                ) }
            </div>
           
        </>
    )
}

export default Project
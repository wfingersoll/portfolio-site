import React from 'react'
import bg from '../Assets/Images/sedona_sunset.jpg'
import Contact from '../Components/Contact'
import { AboutProfileContainer, AboutProfileHeader, AboutProfileText, BackgroundImage, Overlay } from '../style'

const About = () => {
  return (
    <div>
    <BackgroundImage src={bg}/>
    <Overlay />
    <AboutProfileContainer>
        <AboutProfileHeader>William Ingersoll</AboutProfileHeader>
        <AboutProfileText>
            I am a full-stack engineer that specializes both in web development and machine learning.
        </AboutProfileText>
        <AboutProfileText>
            Raised in Chapel Hill, North Carolina, I attended the University of North Carolina Charlotte from 2019 till my graduation in 2023.
            There I obtained my Bachelor's in Computer Science, with a focus on Machine Learning.
        </AboutProfileText>
        <AboutProfileText>
            I have worked both in professional contexts such as Lowe's Home Improvement, as well as academic ones, such as being a research assistant for UNCC.
        </AboutProfileText>
        <AboutProfileText>
            I am a constant learner in all aspects of life, whether it be cutting-edge technology or a new perspective on the past, I am
            always looking for something new to learn and showcase.
        </AboutProfileText>
        <AboutProfileText>
            As a long time off-and-on artist, I have a unique insight for design. All my work attempts to blend expressive craft with practical 
            application building. I seek to bridge the gap between designer and programmer, able to effectively translate one to the other.
        </AboutProfileText>
        <AboutProfileText>
            Outside of the workplace I have a deep passion for history and the arts. I believe that my ability to blend experiences
            and broader knowledge makes me a better creator even for non-user facing systems.
        </AboutProfileText>
    </AboutProfileContainer>
    <Contact />
    </div>
  )
}

export default About
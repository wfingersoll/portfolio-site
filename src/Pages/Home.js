import React from 'react'
import { BackgroundImage, Overlay, OverlayContainer, OverlaySubtitle, OverlayTextContainer, OverlayTitle } from '../style'
import bg from '../Assets/Images/rocky_mountain_national_park_colorado_2-wallpaper-1920x1200.jpg'
import Contact from '../Components/Contact'

const Home = () => {
  return (
    <div>
        <BackgroundImage src={bg}/>
        <Overlay />
        <OverlayContainer>
            <OverlayTextContainer>
                <OverlayTitle>William Ingersoll</OverlayTitle>
                <OverlaySubtitle>Full-stack engineer with a focus on human-centered design</OverlaySubtitle>
            </OverlayTextContainer>
        </OverlayContainer>
        <Contact />
    </div>
  )
}

export default Home
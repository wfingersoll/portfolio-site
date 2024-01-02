import React from 'react'
import email from '../Assets/Icons/email-svgrepo-com.svg'
import git from '../Assets/Icons/git-svgrepo-com.svg'
import linked from '../Assets/Icons/linkedin-svgrepo-com.svg'
import artstation from '../Assets/Icons/artstation-svgrepo-com.svg'
import { ContactContainer, ContactIcon, ContactsContainer, ContactText } from '../style'

const Contact = () => {
  return (
    <ContactsContainer>
        <ContactIcon src={email} />
        <ContactText>wfingersoll@gmail.com</ContactText>
        <ContactIcon src={git} />
        <ContactText href='https://github.com/wfingersoll'>Github</ContactText>
        <ContactIcon src={linked} />
        <ContactText href='https://www.linkedin.com/in/william-ingersoll/'>LinkedIn</ContactText>
        <ContactIcon src={artstation} />
        <ContactText href='https://www.artstation.com/wfingersoll'>Artstation</ContactText>
    </ContactsContainer>
  )
}

export default Contact
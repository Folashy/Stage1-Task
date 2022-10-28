import React from 'react'
import pics from '../pictures/folashy.jpeg'
import { HiddenSlack, ShareButtonStyle, TextFile, Wrapper } from './ProfileStyle.js'
import share from '../pictures/webIcon.svg'
import icon from '../pictures/Icon.svg'

function Profile() {
  return (
    <>
    <Wrapper>
      <ShareButtonStyle>
        <img src={share} alt="Share Button" id='share'/>
        <img src={icon} alt="mobile share Button" id='icon' />
      </ShareButtonStyle>
      
      <img src={pics} alt=' My Pics' id='profile__img'/>
      <TextFile id="twitter">@folashy</TextFile>
    </Wrapper>
    <HiddenSlack>@folashy</HiddenSlack>
    </>
  )
}

export default Profile
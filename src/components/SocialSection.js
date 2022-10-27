import React from 'react'
import git from '../pictures/gitHub.svg';
import slack from '../pictures/slack.svg'
import { SocialSectionStyle } from './SocialSectionStyle';

function SocialSection() {
  return (
    <SocialSectionStyle>
     <img src={git} alt='gitHub'/>
     <img src={slack} alt='slack'/>
    </SocialSectionStyle>
  )
}

export default SocialSection
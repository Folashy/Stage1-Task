import React from 'react'
import git from '../pictures/gitHub.svg';
import slack from '../pictures/slack.svg'

function SocialSection() {
  return (
    <div>
     <img src={git} alt='gitHub'/>
     <img src={slack} alt='slack'/>
    </div>
  )
}

export default SocialSection
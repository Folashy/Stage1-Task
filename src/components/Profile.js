import React from 'react'
import pics from '../pictures/folashy.jpeg'
import { Wrapper } from './ProfileStyle.js'

function Profile() {
  return (
    <Wrapper>
      <img src={pics} alt=' My Pics' id='profile__img'/>
      <div>Folashy</div>
    </Wrapper>
  )
}

export default Profile
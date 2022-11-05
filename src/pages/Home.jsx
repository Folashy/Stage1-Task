import React from 'react'
import { AppStyle } from '../AppStyle'
import Footer from '../components/footer/Footer'
import LinkTree from '../components/linkTree/LinkTree'
import Profile from '../components/profile/Profile'
import SocialSection from '../components/socialSection/SocialSection'

function Home() {
  return (
      <>
          <AppStyle >  
          <Profile />
          <LinkTree />   
          <SocialSection />
          </AppStyle>
          <Footer />
     </>
  )
}

export default Home
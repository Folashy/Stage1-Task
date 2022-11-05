import React from 'react'
import logo from '../pictures/I4G.svg';
import Zuri from '../pictures/Zuri.Internship_Logo.svg'
import { FooterStyle, FooterWrapper, TextStyle } from './FooterStyle';

function Footer() {
    return (
      <FooterWrapper>
        <FooterStyle>
        <img src={Zuri} alt='Logo'/>
        <TextStyle>HNG internship 9 Frontend Task</TextStyle>
        <img src={logo} alt='I4G'/>
        </FooterStyle>
      </FooterWrapper>
  )
}

export default Footer
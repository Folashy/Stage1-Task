import React from 'react'
import { CursorStyling, LinkTreeStyle } from './LinkTreeStyle'

function LinkTree() {
  const links = [
    {
      name: "Twitter Link",
      link: "https:"
    },
    {
      name: "Zuri Team",
      link: "https:"
    },
    {
      name: "Zuri Books",
      link: "https:"
    },
    {
      name: "Python Books",
      link: "https:"
    },
    {
      name: "Background Check for Coders",
      link: "https:"
    },
    {
      name: "Design Books",
      link: "https:"
    },
  ];

  return (
    <CursorStyling>
    {
      links.map((elem)=><a href={'#'}> <LinkTreeStyle> <p>Twitter Link</p></LinkTreeStyle ></a>
      )
    }
    </CursorStyling>
  )
}

export default LinkTree
   

import React from 'react'
import { CursorStyling, LinkTreeStyle } from './LinkTreeStyle'

function LinkTree() {
  const links = [
    {
      name: "Twitter Link",
      link: "https://twitter.com/folash007"
    },
    {
      name: "Zuri Team",
      link: "https://training.zuri.team"
    },
    {
      name: "Zuri Books",
      link: "http://books.zuri.team" 
    },
    {
      name: "Python Books",
      link: "http://books.zuri.team "
    },
    {
      name: "Background Check for Coders",
      link: "http://books.zuri.team"

   },
    {
      name: "Design Books",
      link: "https://books.zuri.team/design-rules"
    },
  ];

  return (
    <CursorStyling>
    {
    links.map((elem)=><a href={elem.link}><LinkTreeStyle>{elem.name}</LinkTreeStyle></a>
      )
    }
    </CursorStyling>
  )
}

export default LinkTree
   

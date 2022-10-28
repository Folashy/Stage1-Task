import React from 'react'
import { CursorStyling, LinkTreeStyle } from './LinkTreeStyle'

function LinkTree() {
  const links = [
    {
      name: "Twitter Link",
      link: "https://twitter.com/folash007",
      id: "twitter"
    },
    {
      name: "Zuri Team",
      link: "https://training.zuri.team",
      id: "btn__zuri" 
    },
    {
      name: "Zuri Books",
      link: "http://books.zuri.team",
      id: "books"
    },
    {
      name: "Python Books",
      link: "http://books.zuri.team ",
      id: "book__python"
    },
    {
      name: "Background Check for Coders",
      link: "http://books.zuri.team", 
      id: "pitch" 

   },
    {
      name: "Design Books",
      link: "https://books.zuri.team/design-rules",
      id: "book__design"
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
   

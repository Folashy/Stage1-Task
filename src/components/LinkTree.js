import React from 'react'
import { CursorStyling } from './LinkTreeStyle'


function LinkTree() {
  const links = [
    {
      name: "Twitter Link",
      link: "https://twitter.com/folash007",
      id: "twitter-link",
      title: "Twitter Link"
    },
    {
      name: "Zuri Team",
      link: "https://training.zuri.team",
      id: "btn__zuri",
      title: "Zuri Team"
    },
    {
      name: "Zuri Books",
      link: "http://books.zuri.team",
      id: "books",
      title: "Zuri Books"
    },
    {
      name: "Python Books",
      link: "https://books.zuri.team/python-for-beginners?ref_id=folashy",
      id: "book__python",
      title: "Background check for Coder folashy"
    },
    {
      name: "Background Check for Coders",
      link: "https://background.zuri.team", 
      id: "pitch",
      title: "Design Books"

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
    links.map((elem)=><a  href={elem.link} id={elem.id} title={elem.title} className= "link_btn">{elem.name}</a>
      )
    }
    </CursorStyling>
  )
}

export default LinkTree
   

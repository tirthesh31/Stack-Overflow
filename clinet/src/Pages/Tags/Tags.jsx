import React from 'react'
import LeftSideBar from '../../component/LeftSideBar/LeftSideBar'
import TagsList from './TagsList'
import './Tags.css'
const Tags = () => {
  const tagsList =[{
    id:1,
    tagName:"Javascript",
    tagDesc:"JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages."
  },{
    id:2,
    tagName:"python",
    tagDesc:"Python is currently the most widely used multi-purpose, high-level programming language"
  },{
    id:3,
    tagName:"C#",
    tagDesc:"C# is a strongly typed programming language because in C#, each type of data (such as integer, character, float, and so forth) is predefined as part of the programming language."
  },{
    id:4,
    tagName:"java",
    tagDesc:"Java is a programming language and a platform. Java is a high level, robust, object-oriented and secure programming language."
  },{
    id:5,
    tagName:"php",
    tagDesc:"PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages"
  },{
    id:6,
    tagName:"html",
    tagDesc:"HTML is the standard markup language for Web pages. With HTML you can create your own Website."
  },{
    id:7,
    tagName:"css",
    tagDesc:"CSS stands for Cascading Style Sheets. It is a style sheet language which is used to describe the look and formatting of a document written in markup language. "
  }]
  return (
    <div className='home-container-1'>
        <LeftSideBar/>
        <div className="home-container-2">
            <h1 className='tags-h1'>Tags1</h1>
            <p className='tags-p'>A Tags ia keyword or label that categorizes your question with others, similar questions</p>
            <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question</p>
            <div className="tags-list-container">
              {
                tagsList.map((tag)=>(
                  <TagsList tag = {tag} key={tagsList.id}/>
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default Tags

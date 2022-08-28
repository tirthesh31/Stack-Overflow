import React from 'react'

const WidgetTags = () => {
    const Tags = ['c','css','express','firebase','html','java','javascript','mern','mongodb','mysql','next.js','node.js','php','php','python','reactjs']
  return (
    <div className='widget-tags'>
        <h4>Watched Tags</h4>
        <div className="widget-tags-div">
            {
                Tags.map((tag)=>(
                    <p key={tag}>{tag}</p>
                ))
            }
        </div>
    </div>
  )
}

export default WidgetTags

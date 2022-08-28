import React from 'react'
import './RightSideBar.css'
import comment from '../../assets/comment.svg'
import pen from '../../assets/pen.svg'
import stackoverflow from '../../assets/stackoverflow.svg'
const Widget = () => {
  return (
    <div>
      <div className="widget">
        <h4>The Overflow Blog</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <img src={pen} alt="Pen" width='18'/>
                <p>Observability is key to the future of software (your devOps carrer)</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={pen} alt="Pen" width='18'/>
                <p>Podcast 374: How valuable is your screen name?</p>
            </div>
        </div>
        <h4>Features on Meta</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <img src={comment} alt="comment" width='18'/>
                <p>Review quick workflows - Final realease...</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={comment} alt="comment" width='18'/>
                <p>Please Welcome valuable associates: #958-V2Blast #959 -SpencerG</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={stackoverflow} alt="stackoverflow" width='18'/>
                <p>Outdated Answer: accept answer is now unpinned in on stack overflow</p>
            </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <p>38</p>
                <p>Why was the spam flag declined, yet the question marked as spam?</p>
            </div>
            <div className="right-sidebar-div-2">
                <p>20</p>
                <p>What is the design course of action when user has a hight rep to..</p>
            </div>
            <div className="right-sidebar-div-2">
                <p>18</p>
                <p>Is a link to the "How to ask" help page a useful comment</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Widget

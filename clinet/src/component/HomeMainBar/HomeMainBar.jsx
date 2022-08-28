import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import './HomeMainBar.css'
import Questionlist from './Questionlist'
import { useSelector }  from 'react-redux'
const HomeMainBar = () => {

  // var questionList = [{
  //   _id:1,
  //   upVotes:3,
  //   downVotes:2,
  //   noOfAnswer:2,
  //   questionTitle:"What is a funtion?",
  //   questionBody:"It meant to be",
  //   questionTags:["Java","Mongo Db","React Js","Node Js"],
  //   userPosted:"mano",
  //   userId:1,
  //   askedon:"Jan 1",
  //   answer: [{
  //     answerBody:"Answer",
  //     userAnswer:'Kumar',
  //     ansered:"jan 2",
  //     userId:2
  //   }]
  // },{
  //   _id:2,
  //   upVotes:3,
  //   downVotes:2,
  //   noOfAnswer:0,
  //   questionTitle:"What is a funtion?",
  //   questionBody:"It meant to be",
  //   questionTags:["Java","Python"],
  //   userPosted:"mano",
  //   userId:1,
  //   askedon:"Jan 1",
  //   answer: [{
  //     answerBody:"Answer",
  //     userAnswer:'Kumar',
  //     ansered:"jan 2",
  //     userId:2
  //   }]
  // },{
  //   _id:3,
  //   upVotes:3,
  //   downVotes:2,
  //   noOfAnswer:0,
  //   questionTitle:"What is a funtion?",
  //   questionBody:"It meant to be",
  //   questionTags:["Javascript","Mongo Db"],
  //   userPosted:"mano",
  //   userId:1,
  //   askedon:"Jan 1",
  //   answer: [{
  //     answerBody:"Answer",
  //     userAnswer:'Kumar',
  //     ansered:"jan 2",
  //     userId:2
  //   }]
  // }]
  const questionList = useSelector(state => state.questionReducer)
  console.log(questionList)
  const location = useLocation()
  const usr = 1
  const Navigate = useNavigate()
  const checkAuth = () =>{
    if(usr === null){
    alert("Login or signup to ash a question")
    Navigate('/Auth')
    }else{
      Navigate('/AskQuestions')
    }
  }
  return (
    <div className="main-Bar">
      <div className="main-Bar-header">
        {
          location.pathname === '/'?<h1>Top Questions</h1>:<h1>All Questions</h1>
        }  
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div className="">
        {
          questionList.data === null ?
          <h1>loading...</h1> : 
          <>
            <p>{questionList.data.length} Questions</p>
            <Questionlist questionList={questionList.data}/>
          </>
        }
      </div>
    </div>
  )
}
export default HomeMainBar

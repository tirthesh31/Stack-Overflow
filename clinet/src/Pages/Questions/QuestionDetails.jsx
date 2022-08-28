import React from 'react'
import { useParams,Link, useNavigate,useLocation } from 'react-router-dom'
import moment from 'moment'
import copy from 'copy-to-clipboard'
import sortup from '../../assets/sortu.svg'
import sortdown from '../../assets/sortd.svg'
import './QuestionDetails.css'
import Avatar from '../../component/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import { useSelector,useDispatch }  from 'react-redux'
import { useState } from 'react'
import {deleteQuestion, postAnswer,voteQuestion} from '../../actions/question'

const QuestionDetails = () => {
  const questionList = useSelector(state => state.questionReducer)
    // var questionList = [{
    //     _id:'1',
    //     upVotes:3,
    //     downVotes:2,
    //     noOfAnswer:2,
    //     questionTitle:"What is a funtion?",
    //     questionBody:"It meant to be",
    //     questionTags:["Java","Mongo Db","React Js","Node Js"],
    //     userPosted:"mano",
    //     userId:1,
    //     askedon:"Jan 1",
    //     answer: [{
    //       answerBody:"Answer",
    //       userAnswer:'Kumar',
    //       ansered:"jan 2",
    //       userId:2
    //     }]
    //   },{
    //     _id:'2',
    //     upVotes:3,
    //     downVotes:2,
    //     noOfAnswer:0,
    //     questionTitle:"What is a funtion?",
    //     questionBody:"It meant to be",
    //     questionTags:["Java","Python"],
    //     userPosted:"mano",
    //     userId:1,
    //     askedon:"Jan 1",
    //     answer: [{
    //       answerBody:"Answer",
    //       userAnswer:'Kumar',
    //       ansered:"jan 2",
    //       userId:2
    //     }]
    //   },{
    //     _id:'3',
    //     upVotes:3,
    //     downVotes:2,
    //     noOfAnswer:0,
    //     questionTitle:"What is a funtion?",
    //     questionBody:"It meant to be",
    //     questionTags:["Javascript","Mongo Db"],
    //     userPosted:"mano",
    //     userId:1,
    //     askedon:"Jan 1",
    //     answer: [{
    //       answerBody:"Answer",
    //       userAnswer:'Kumar',
    //       ansered:"jan 2",
    //       userId:2
    //     }]
    //   }]
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const [Answer, setAnswer] = useState('')
    const User = useSelector((state) => (state.currentUserReducer))
    const location = useLocation()
    const url = 'http://localhost:3000' 
    const handlePostAns = (e,answerLength) => {
      e.preventDefault()
      if(User ===null){
        alert('Login or Signup')
        navigate('/Auth')
      }else{
        if(Answer === ''){
          alert('Enter answer before submitting')
        }else{
          dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId: User.result._id }))
        }
      }

    }
    const handleShare = () =>{
        copy(url+location.pathname)
        alert('Copied url : '+url+location.pathname)
    }
    const handleDelete = () =>{
      dispatch(deleteQuestion(id,navigate))
    }
    const handleUpVote =() =>{
      dispatch(voteQuestion(id,'upVote',User.result._id))
    }
    const handleDownVote =() =>{
      dispatch(voteQuestion(id,'downVote',User.result._id))
    }
  return (
    <div className="question-details-page">
        {
            questionList.data === null ? <h1>Loading....</h1> :
            <>  
                {
                questionList.data.filter( question => question._id === id).map( question => (
                    <div key={question._id}>
                      <section className='question-details-container'>
                        <h1>{question.questionTitle}</h1>
                        <div className="question-details-container-2">
                          <div className="question-votes">
                            <img src={sortup} alt="sort up" width='18' onClick={handleUpVote}/>
                            <p>{question.upVote.length - question.downVote.length}</p>
                            <img src={sortdown} alt="" width='18' onClick={handleDownVote}/>
                          </div>
                          <div className="" style={{width:'100%'}}>
                            <p className="question-body">{question.questionBody}</p>
                            <div className="question-details-tags">
                              {
                                question.questionTags.map((tag)=>(
                                  <p key= {tag}>{tag}</p>
                                ))
                              }
                            </div>
                            <div className="question-actions-user">
                              <div>
                                <button type='button' onClick={handleShare}>share</button>
                                {
                                  User?.result?._id ===question?.userId && (
                                    <button type='button' onClick={handleDelete}>Delete</button>
                                  )
                                }
                              </div>
                              <div>
                                <p>asked {moment(question.askedon).fromNow()}</p>
                                <Link to={`/Users/${question.userId}`} className='user-link' style={{color:"#0086d8"}}>
                                  <Avatar backgroundColor="orange" px="8px" py="5px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                  <div>
                                    {question.userPosted}
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      {
                        question.noOfAnswers !== 0 && (
                          <section>
                            <h3>{question.noOfAnswers} Answer</h3>
                            <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                          </section>
                        )
                      }
                      <section className='post-ans-container'>
                        <h3>Your answers</h3>
                        <form onSubmit={ (e) =>{handlePostAns(e,question.answer.length)}}>
                          <textarea name="" id="" cols="30" rows="10" onChange={e => setAnswer(e.target.value)}></textarea>
                          <input type="Submit" className='post-ans-btn' value='Post Your Anwser'/>
                        </form>
                        <p>
                          Browse other Question Tagged
                          {
                            question.questionTags.map((tag)=>(
                              <Link to='/Tags' key={tag} className='ans-tag'> {tag} </Link>
                            ))
                          } or
                          <Link to='/AskQuestions' style={{textDecoration:'none',color:"#009dff"}}> Ask Your Own Question </Link>
                        </p>
                      </section>
                    </div>
                ))
                }
            </>
        }
    </div>
  )
}

export default QuestionDetails

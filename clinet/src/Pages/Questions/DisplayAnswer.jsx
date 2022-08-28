import React from 'react'
//import QuestionDetails from './QuestionDetails'
import { Link,useParams } from 'react-router-dom'
import moment from 'moment'
import { useSelector,useDispatch } from 'react-redux'
import Avatar from '../../component/Avatar/Avatar'
import './QuestionDetails.css'
import {deleteAnswer} from '../../actions/question'


const DisplayAnswer = ({question,handleShare}) => {
  const User = useSelector((state) => (state.currentUserReducer))
const { id } = useParams()
const dispatch = useDispatch()
const handleDelete = (answerId,noOfAnswer)=>{
  dispatch(deleteAnswer(id,answerId,noOfAnswer-1))
}
  return (
    <div className='display-ans'>
      {
        question.answer.map((ans)=>(
            <div className="Display-ans" key={ans._id}>
                <p>{ans.answerBody}</p>
                <div className="question-actions-user">
                    <div className="">
                        <button type='button' onClick={handleShare}>Share</button>
                        {
                            User?.result?._id ===ans?.userId && (
                            <button type='button' onClick={()=>handleDelete(ans._id,question.noOfAnswer)}>delete</button>
                          )
                        }
                    </div>
                    <div className="">
                        <p>answered {moment(ans.answeredOn).fromNow()}</p>
                        <Link to={`/Users/${ans.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                  <Avatar backgroundColor="green" px="8px" py="5px">{ans.userAnswered?.charAt(0).toUpperCase()}</Avatar>
                                  <div>
                                    {ans.userAnswered}
                                  </div>
                                </Link>
                    </div>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default DisplayAnswer

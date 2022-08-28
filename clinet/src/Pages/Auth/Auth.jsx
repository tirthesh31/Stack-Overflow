import React, {useState} from 'react'
import icon from '../../assets/icon.png'
import { useDispatch } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import './Auth.css'
import AboutAuth from './AboutAuth'
import { signup,login } from '../../actions/auth'

const Auth = () => {
  const [isSignup,setIsSignup]=useState(false)
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSwitch = () =>{
    setIsSignup(!isSignup)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!email && !password){
      alert('Enter email and password Properly')
    }
    if(isSignup){
      if(!name){
        alert('Enter a name to continue')
      }
      dispatch(signup({name,email,password},navigate))
    }else{
      dispatch(login({email,password},navigate))
    }
    console.log(name,email,password)
  }

  return (
    <section className='auth-section'>
      {
        isSignup && <AboutAuth/>
      }
      <div className="auth-container-2">
        {!isSignup && <img src={icon} alt='Stack-overflow' className='login-logo' style={{height:"50px",width:"50px"}}/>}
        <form onSubmit={handleSubmit}>
          {
            isSignup && (
              <label htmlFor="name">
                <h4>Name</h4>
                <input type="text" name='name' id='name' onChange={(e) => {setName(e.target.value)}}/>
              </label>  
            )
          }
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name='email' id='email' onChange={(e) => {setEmail(e.target.value)}}/>
          </label>
          <label htmlFor="pwd">
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <h4>Password</h4>
              {!isSignup && <p style={{color:"#007ac6",fontSize:"13px"}}>Forget Password?</p>}
            </div>
            <input type="password" name='pwd' id='pwd' onChange={(e) => {setPassword(e.target.value)}}/>
            {
              isSignup && <p style={{color:"#666767",fontSize:"13px"}}>Password must contain at least eight<br/> character, including at least 1<br/>
                character and 1 number
              </p>
            }
          </label>
          {
            isSignup && (
              <label htmlFor="check">
                <input type="checkbox" id='check' style={{height:"18px",width:"18px",margin:"12px 5px 0 0"}}/>
                <p style={{fontSize:"13px"}}>Opt-in to recieve occasional<br/> product updates, user research invitation,<br/> 
                  company announcement, and digests.
                </p>
              </label>
            )
          }
          <button type='submit' className='auth-btn'>{isSignup?'Sign up':'Log in'}</button>
          {
            isSignup && (
              <p style={{color:"#666767",fontSize:"13px"}}>By clicking "Sign up",you agree to our
                 <span style={{color:"#007ac6"}}>term or<br/> service</span> , <span style={{color:"#007ac6"}}>privacy policy</span> and <span style={{color:"#007ac6"}}>cookie poicy</span></p>
            )
          }
        </form>
        <p>
          {isSignup? 'Already have an account':"Don't have an account? "}
          <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{!isSignup?'Sign up':'Log in'}</button>
        </p>
      </div>
    </section>
  )
}

export default Auth

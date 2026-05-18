import React, {useState} from 'react'

const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({userError:'', passError:''})

  function handleSubmit(e){
    e.preventDefault()
    let enteredEmail = email
    let enteredPass = password
      setTimeout(() => {
        if(enteredEmail === '' || enteredEmail !== 'admin12@gmail.com'){
          setError({userError: 'User not found', passError: ''})
          return
        }
        if(enteredPass === '' || enteredPass !== '12345'){
          setError({userError:'', passError: 'Password Incorrect'})
          return
        }
        setError({userError:'', passError:''})
        setPassword('')
        setEmail('')
    }, 3000)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id='input-email' value={email} type='email' onChange={e => {
          setEmail(e.target.value)
          setError({userError:'', passError:''})
          }}></input>
        <p id='user-error' style={{color:'red'}}>{error.userError}</p>
        <input id='input-password' value={password} type='password' onChange={e => {
          setPassword(e.target.value)
          setError({userError:'', passError:''})
          }}></input>
        <p id='password-error' style={{color:'red'}}>{error.passError}</p>
        <button id='submit-form-btn' type='submit'>Log In</button>
      </form>
    </div>
  )
}

export default App
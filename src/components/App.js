import React, { useState } from 'react'

const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({ userError: '', passError: '' })

  function handleSubmit(e) {
    e.preventDefault()
    let enteredEmail = email
    let enteredPass = password

    setTimeout(() => {
      if (enteredEmail === 'abc@gmail.com' && enteredPass !== '12') {
        setError({ userError: '', passError: 'Password Incorrect' })
        return
      }

      if (enteredEmail === 'abcdefgh@gmail.com') {
        setError({ userError: 'User not found', passError: '' })
        return
      }

      setError({ userError: '', passError: '' })
      setEmail('')
      setPassword('')
    }, 3000)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id='input-email'
          value={email}
          type='text'
          onChange={e => {
            setEmail(e.target.value)
            setError({ userError: '', passError: '' })
          }}
        />
        <p id='user-error' style={{ color: 'red' }}>{error.userError}</p>

        <input
          id='input-password'
          value={password}
          type='password'
          onChange={e => {
            setPassword(e.target.value)
            setError({ userError: '', passError: '' })
          }}
        />
        <p id='password-error' style={{ color: 'red' }}>{error.passError}</p>

        <button id='submit-form-btn' type='submit'>Log In</button>
      </form>
    </div>
  )
}

export default App
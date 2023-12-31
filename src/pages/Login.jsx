import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()
  // hoock que redireciona a pagina


  const logar = event => {
  event.preventDefault()
  console.log('logou')
  navigate('/')
  }
  
  return (
    
    <div className='container'>
    <main className="form-signin w-100 m-auto" style={{maxWidth:'30%'}}>
        <form onSubmit={logar}>
          <img className="mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
      
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
      
          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
            <label className="form-check-label" for="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
      </main>
    </div>
  
        
    )
}

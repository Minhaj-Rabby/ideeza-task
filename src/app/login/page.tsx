'use client'
import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/providers'
import Link from 'next/link';

const LogIn = () => {

  const [error, setError] = useState('');
  const [show, setShow] = useState(false);
  const { signIn } = useContext(AuthContext);


  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&?"]).{8,}$/.test(password)) {
      setError('Password Must Contain a Uppercase, a Lowercase , a Special character, a Digit   and 8 Character.');
      return;
    }

    signIn(email, password)
      .then(result => {
        const loggedUser = result.user
        // console.log(loggedUser);
        form.reset();
        setError('');
        alert(`${email} Log In Successfully`)
      })
      .catch(error => {
        console.log(error);
        setError(error.message);

      })
  }

  return (

    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className='mt-5 text-2xl text-center'>Login</h2>
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" id="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type={show ? 'text' : 'password'} name="password" id="password" placeholder="password" className="input input-bordered" required />
              <p className="label-text mt-2"  onClick={() => setShow(!show)}><small>
                {
                  show ? 'Hide Password' : 'Show Password'
                }
              </small></p>

            </div>

            <div className="form-control">
              <button className="btn btn-primary">Login</button>
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
            <p className="label-text ml-1" ><small>New To This site?<Link href='/signup'>Create New Account</Link></small></p>
            <p className="label-text" ><small className='text-danger'>{error}</small></p>
          </form>

        </div>
      </div>
    </div>
  )
}

export default LogIn
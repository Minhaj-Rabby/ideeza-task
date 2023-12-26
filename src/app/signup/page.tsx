'use client'
import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/providers';
import Link from 'next/link';

const SignUp = () => {
  const [error, setError] = useState('');
  const { createUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirmPassword.value;
    console.log(email, password, confirm);

    if (password !== confirm) {
      setError('Your password is not matches');
      return;
    }
    else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&?"]).{8,}$/.test(password)) {
      setError('Password Must Contain a Uppercase, a Lowercase , a Special character, a Digit   and 8 Character.');
      return;
    }
    createUser(email, password)
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser);
        form.reset();
        setError('');
        alert(`${email} User Created Successfully`)

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
          <h2 className='mt-5 text-2xl text-center'>SignUp</h2>
          <form onSubmit={handleSignUp} className="card-body">
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
            </div>
            <div className='form-control'>

              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input type={show ? 'text' : 'password'} name="confirmPassword" id="confirmPassword" placeholder="Confirm password" className="input input-bordered" required />
              <p className="label-text mt-2" onClick={() => setShow(!show)}><small>
                {
                  show ? 'Hide Password' : 'Show Password'
                }
              </small></p>
            </div>

            <div className="form-control">
              <button className="btn btn-primary">SignUP</button>
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
            <p className="label-text ml-1" ><small>Already have an Account?<Link href='/login'>SignIn</Link></small></p>
            <p className="label-text" ><small className='text-danger'>{error}</small></p>
          </form>

        </div>
      </div>
    </div>
  )
}

export default SignUp;
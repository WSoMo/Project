import React from "react";
import { BsCheckLg } from 'react-icons/bs'
import '../Styled/Register.css'

function User() {
  return (
    <div className='main'>
      <div className='containerleft'>
        <div> <h3 className='title'>Benefits of being a member</h3></div>
        <div className='itemleft'>
          <div className='textleft'><BsCheckLg className="Check"></BsCheckLg>Find something to watch on your subcribed streaming sevices.</div>
          <div className='textleft'><BsCheckLg className="Check"></BsCheckLg>Log the movies and TV shows you have watched.</div>
          <div className='textleft'><BsCheckLg className="Check"></BsCheckLg>Keep track of your favourite movies and TV shows and get recommendatiions from them.</div>
          <div className='textleft'><BsCheckLg className="Check"></BsCheckLg>Build and maintain a personal watchlist.</div>
          <div className='textleft'><BsCheckLg className="Check"></BsCheckLg>Build custom mixed lists (movies and TV).</div>
          <div className='textleft'><BsCheckLg className="Check"></BsCheckLg>Take part in movies and TV dicussions.</div>
          <div className='textleft'><BsCheckLg className="Check"></BsCheckLg>Contribute to, and improve the information in our database.</div>
        </div>
      </div>
      <div className='containerright'>
        <h2>Sign in for an account</h2>
        <p>Signing up for an account is free and easy. Fill out the form below to get started. Javascript is required to countinue.</p>
        <label className="label">Username</label>
        <input type={"text"}></input>
        <label className="label">Password (4 characters minimum)</label>
        <input type={"password"}></input>
        <label className="label">Password Comfirm</label>
        <input type={"password"}></input>
        <label className="label">Email</label>
        <input type={"email"}></input>
        <p>By clicking the "Sign up" button below, I certify that i have read and agree to the TMDB terms of use and privacy policy.</p>
        <button variant="contained">Register</button>
        <button variant="text">Cancel</button>
        

      </div>

    </div>
  )
}
export default User;

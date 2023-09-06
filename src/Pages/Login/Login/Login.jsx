import { Helmet } from "react-helmet-async";
import './Login.css'
import loginImage from '../../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate,  } from 'react-simple-captcha';
import { useEffect } from "react";

export default function Login() {

useEffect(()=>{
    loadCaptchaEnginge(6); 
}, [])

  return (
    <div>
       <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
        <div className="login-cover">
    <div className="hero min-h-screen">
  <div className="hero-content flex-col md:flex-row">
    <div className="text-center md:w-1/2 lg:text-left">
      <img src={loginImage} alt="" />
    </div>
    <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <div>
          <LoadCanvasTemplate />
          </div>
          <input type="text" name="recaptha" placeholder="type the above text" className="input input-bordered" />

        </div>
        <div className="form-control mt-6">
          <input className="btn btn-warning bg-opacity-40" type="submit" value="Sign In" name="login"  />
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    </div>
  )
}

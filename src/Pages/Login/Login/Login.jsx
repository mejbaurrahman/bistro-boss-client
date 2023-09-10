import { Helmet } from "react-helmet-async";
import './Login.css'
import loginImage from '../../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha,  } from 'react-simple-captcha';
import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate()
  let from = location.state?.from?.pathname || "/";
  const {
    login
} = useContext(AuthContext);

useEffect(()=>{
    loadCaptchaEnginge(6);
    
}, [])

const handleLogin = (e)=>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
    .then(result=>{
      console.log(result.user)
      navigate(from, { replace: true });
    }).catch(error=>console.log(error.message))

}
const handleCapcha =(e)=>{
  const captcha = e.target.value;
  const check=  validateCaptcha(captcha)
  console.log(check)
  
}

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
      <form onSubmit={handleLogin} className="card-body">
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
          <input type="text" onBlur={handleCapcha} name="recaptha" placeholder="type the above text" className="input input-bordered" />

        </div>
        <div className="form-control mt-6">
          <input className="btn btn-warning bg-opacity-40" type="submit" value="Sign In" name="login"  />
        </div>
        
      </form>
      <div>
          <p>Create a new account? <Link to='/signup'>Sign Up</Link></p>
        </div>
    </div>
  </div>
</div>

        </div>
        
    </div>
  )
}

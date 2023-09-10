import { Helmet } from "react-helmet-async";
import loginImage from '../../assets/others/authentication2.png'
import './SignUp.css'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { AuthContext } from "../../Context/AuthProvider";
import { useContext } from "react";




export default function SignUp() {
  const {
    
    createUser,
    updateUser
} = useContext(AuthContext);
  const { register, handleSubmit} = useForm()
  const navigate = useNavigate();
  const handleSignUP= data =>{
      createUser(data.email, data.password)
      .then(result=>{
        console.log(result.user)
        updateUser(data.name, data.photoUrl)
        .then(r=>{
        
          navigate('/')
          console.log(r.user)
        }).catch(error=> console.log(error.message))
      }).catch(error=>console.log(error.message))
  }
  return (
    <>
    <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="login-cover">
    <div className="hero min-h-screen">
  <div className="hero-content flex-col md:flex-row">
    <div className="text-center md:w-1/2 lg:text-left">
      <img src={loginImage} alt="" />
    </div>
    <div   className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(handleSignUP)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          
          <input {...register("name")}  className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          
          <input {...register("photoUrl")}  className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          
          <input type='email' {...register("email")}  className="input input-bordered"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type='password' {...register("password")}  className="input input-bordered"/>
          
        </div>
       
        <div className="form-control mt-6">
          
          <input className="btn btn-warning bg-opacity-40" type="submit" value="Sign UP" />
        </div>
        
      </form>
      <div>
          <p>Already User? <Link to='/login'>Sign In</Link></p>
        </div>
    </div>
  </div>
</div>
        </div>

    </>
  )
}

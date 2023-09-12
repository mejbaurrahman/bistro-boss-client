import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider";
import {  useLocation, useNavigate } from "react-router-dom";

export default function SocialLogin() {
    const {socialLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location= useLocation();
    const from = location?.state?.from?.pathname || '/'

    const handleGoogleLogin = ()=> {
            socialLogin()
            .then(result=> {
                console.log(result.user
                )
                navigate(from, {state: {from: location}})
            }).catch(error=> {console.log(error.message)})

    }
  return (
    <div className="py-8 flex justify-center items-center">
        <button onClick={handleGoogleLogin} className="btn btn-circle bg-black text-white"><FaGoogle></FaGoogle></button>
    </div>
  )
}

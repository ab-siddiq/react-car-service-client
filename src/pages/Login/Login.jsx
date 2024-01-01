import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/login/login.svg";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { FaGoogle  } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Login = () => {
  const [show, setShow] = useState(true);
  const {singIn} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { password: password, email: email };
    console.log(user)
    singIn(email,password)
    .then(res=>{
      console.log(res.user)
      navigate(from,{replace:true})
    })
    .then(error=>console.log(error))
  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content border-4 border-gray-400 rounded-lg p-10 ring-8 ring-[#FF3811]">
        <div className="mr-10">
          <img src={loginImage} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h2 className="text-3xl font-bold text-center mb-5">Login</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={!show ? "text" : "password"}
                placeholder="password"
                className="input input-bordered pr-10"
                name="password"
                required
              />
              {show ? (
                <EyeIcon
                  onClick={() => setShow(!show)}
                  className="h-6 w-6 text-gray-500 absolute top-12 right-2 cursor-pointer"
                />
              ) : (
                <EyeSlashIcon
                  onClick={() => setShow(!show)}
                  className="h-6 w-6 text-red-500 absolute top-12 right-2 cursor-pointer"
                />
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button  className="btn bg-[#FF3811] text-white font-bold text-lg hover:bg-transparent hover:text-[#FF3811] hover:border-2 hover:border-gray-400 hover:ring-4 hover:ring-[#FF3811]">
                Login
              </button>
            </div>
          </form>
          <div className="text-center">
            <p className="">or signup with</p>
            <div className="flex justify-center">
            <button><FaGoogle className="rounded-full h-6 w-6  my-2" /></button>
            </div>
            <p className="text-sm mb-10 mt-2">Don't have account? <Link className="text-[#FF3811]" to='/signup'>Signup</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

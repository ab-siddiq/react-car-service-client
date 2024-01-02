import React, { useContext } from "react";

import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../../providers/AuthProvider";
const SocialLogin = () => {
  const {googleSignIn} = useContext(AuthContext)
  const handleGoogleSignIn = ()=>{
    googleSignIn()
    .then(res=>{
      console.log(res.user)
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className="text-center">
      <p className="">or signup with</p>
      <div className="flex justify-center">
        <button onClick={handleGoogleSignIn}>
          <FaGoogle className="rounded-full h-6 w-6  my-2" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

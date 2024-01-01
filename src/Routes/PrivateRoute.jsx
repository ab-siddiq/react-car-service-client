import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate} from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading)
    return (
      <div className="h-screen flex justify-center items-start mt-24">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;

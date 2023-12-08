import loginImage from "../../assets/login/login.svg";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { password: password, email: email };
    console.log(user)
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
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
        </div>
      </div>
    </div>
  );
};

export default Login;

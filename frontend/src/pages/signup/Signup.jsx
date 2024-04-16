import GenderCheckBox from "./GenderCheckBox";

function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500">ChatApp</span>
        </h1>

        <form>
          <div>
            <label htmlFor="fullname" className="label p-2 ">
              <span className="text-base label-text" id="fullname">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Jake Day"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div className="">
            <label htmlFor="username" className="label p-2 ">
              <span className="text-base label-text" id="username">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div className="">
            <label htmlFor="password" className="label p-2 ">
              <span className="text-base label-text" id="password">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div className="">
            <label htmlFor="confirmPass" className="label p-2 ">
              <span className="text-base label-text" id="confirmPass">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
            />
          </div>

          {/* GENDER CHECK BOX GOES HERE */}
          <GenderCheckBox />

          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block"
          >
            Already have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

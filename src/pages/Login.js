const Login = () => {
  return (
    <div className="h-screen w-full bg-purple-550 py-20 px-40">
      <div className="flex justify-between h-full">
        <div className="bg-white rounded-xl w-2/5 h-full">
          <img src="/Image3.png" className="h-1/4 w-full rounded-t-xl" />
          <div className="flex flex-col justify-center h-3/4 py-10">
            <div className="flex flex-col items-center">
              <img src="/logo.png" className="h-12" />
              <div className="text-2xl font-medium my-3">
                <p className="pl-16 pr-32">Experience...</p>
                <p className="pl-32 pr-16">Unforgettable</p>
                <p className="pl-48 pr-0">Events...!!</p>
              </div>
            </div>
            <hr className="border-y-2 border-solid border-gray-650 mx-5" />
            <p className="text-center text-xl my-3 mx-10">
              We @EventHUB helps you to find perfect event
              in your city to attend and you can create
              and publish your own event on same platform!!
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl w-1/2 h-full py-10">
          <div className="text-3xl text-center font-bold">
            <p>Hello Good Human!</p>
            <p>We missed you</p>
          </div>
          <hr className="border-y-2 border-solid border-gray-650 my-10 my-5" />
          <div className="flex flex-col items-center mx-10">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="bg-gray-650 text-xl text-white placeholder-white rounded-xl w-11/12 p-4 m-3"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-650 text-xl text-white placeholder-white rounded-xl w-11/12 p-4 m-3"
            />
            <a href="/reset" className="underline text-blue-500 text-right text-lg w-11/12 m-1">
              Reset Password
            </a>
            <div className="flex justify-center">
              <button className="bg-purple-550 text-white text-xl font-medium rounded-xl px-8 py-2 m-3">
                Login
              </button>
            </div>
            <p className="text-center text-lg my-5">
              Didn't Have an Account yet?{' '}
              <a href="/register" className="underline text-blue-500">Sign Up</a>{' '}
              here
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

const Register = () => {
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
            <p>Join Us &amp;</p>
            <p>Be A Crew Member...!</p>
          </div>
          <hr className="border-y-2 border-solid border-gray-650 mt-10" />
          <div className="flex flex-col items-center overflow-y-auto no-scrollbar h-4/5 my-5 px-10">
            <input
              type="text"
              placeholder="Name"
              className="bg-gray-650 text-xl text-white placeholder-white rounded-xl w-11/12 p-4 m-3"
            />
            <input
              type="text"
              placeholder="Email"
              className="bg-gray-650 text-xl text-white placeholder-white rounded-xl w-11/12 p-4 m-3"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="bg-gray-650 text-xl text-white placeholder-white rounded-xl w-11/12 p-4 m-3"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-650 text-xl text-white placeholder-white rounded-xl w-11/12 p-4 m-3"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="bg-gray-650 text-xl text-white placeholder-white rounded-xl w-11/12 p-4 m-3"
            />
            <input
              type="text"
              placeholder="Address"
              className="bg-gray-650 text-xl text-white placeholder-white rounded-xl w-11/12 p-4 m-3"
            />
            <input
              type="text"
              placeholder="City"
              className="bg-gray-650 text-xl text-white placeholder-white rounded-xl w-11/12 p-4 m-3"
            />
            <div className="flex justify-center">
              <button className="bg-purple-550 text-white text-xl font-medium rounded-xl px-8 py-2 m-3">
                Join
              </button>
            </div>
            <p className="text-center text-lg my-5">
              If You Have an Account,{' '}
              <a href="/login" className="underline text-blue-500">Sign In</a>{' '}
              here
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

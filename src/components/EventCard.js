const EventCard = () => {
  return (
    <div className="bg-white rounded-xl mx-5 h-[380px] w-[280px]">
      <div className="flex justify-center w-full h-1/2 overflow-hidden rounded-t-xl">
        <img
          src="/Image2.png"
          className="rounded-t-xl h-full w-auto max-w-none"
        />
      </div>
      <div className="text-center my-2">
        <h2 className="text-xl font-bold">Event Name</h2>
        <div className="mb-2">
          <p>Tagline</p>
          <p className="text-xs">From 25th April 2022 15:30</p>
          <p className="text-xs">From 26th April 2022 15:30</p>
        </div>
        <button className="bg-purple-550 rounded-xl text-white font-medium px-4 py-1">Register Now</button>
        <div className="my-2">
          <p className="text-xs">Address</p>
          <p>City</p>
        </div>
      </div>
    </div>
  )
}

export default EventCard

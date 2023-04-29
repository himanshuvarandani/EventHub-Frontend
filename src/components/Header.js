
const Header = () => {
  return (
    <div className="w-full">
      <nav className="sm:sticky top-0 z-50 w-full bg-white">
        <div className="w-full flex flex-row justify-between items-center px-40 py-5">
          <div className="flex flex-row items-center">
            <img src="/logo.png" />
            <input type="text" placeholder="Search Events" className="bg-gray-550 rounded-xl h-8 pl-8 ml-5" />
          </div>
          <div className="flex flex-row items-center text-lg text-gray-650 font-medium">
            <p className="mr-5">About</p>
            <p>Login</p>
          </div>
        </div>
      </nav>
      <div className="flex flex-row justify-between items-center bg-gray-650 text-white h-12 px-24">
        <select className="bg-gray-650">
          <option>All Categories</option>
          <option>Convention</option>
          <option>Standup Comedy</option>
          <option>Plays</option>
          <option>Exhibition</option>
          <option>Sports</option>
          <option>Seminar</option>
          <option>Food Festival</option>
          <option>Music Festival</option>
          <option>Corporate Events</option>
        </select>
        <select className="bg-gray-650">
          <option>Select City</option>
          <option>Bangalore</option>
          <option>City 1</option>
          <option>City 2</option>
          <option>City 3</option>
          <option>City 4</option>
          <option>City 5</option>
        </select>
        <button className="bg-purple-550 rounded-xl px-4 py-1">Publish Event</button>
        <p>Offers</p>
      </div>
    </div>
  )
}

export default Header

import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {
  return (
    <nav className="sm:sticky top-0 z-50 w-full bg-white">
      <div className="w-full flex justify-between items-center px-40 py-5">
        <div className="flex items-center">
          <img src="/logo.png" />
          <div className="relative">
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              color="white"
              className="absolute top-1.5 pl-6"
            />
            <input type="text" placeholder="Search Events" className="bg-gray-550 rounded-xl h-8 pl-8 ml-5" />
          </div>
        </div>
        <div className="flex items-center text-lg text-gray-650 font-medium">
          <p className="mr-5">About</p>
          <p>Login</p>
        </div>
      </div>
    </nav>
  )
}

export default Header

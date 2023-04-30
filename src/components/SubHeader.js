import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const SubHeader = () => {
  const {
    selectedCity,
    setSelectedCity,
    selectedCategory,
    setSelectedCategory
  } = useContext(AuthContext)
  
  return (
    <div className="flex justify-between items-center bg-gray-650 text-white h-12 px-24">
      <select
        className="font-medium bg-gray-650"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
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
      <select
        className="font-medium bg-gray-650"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        <option>Select City</option>
        <option>Bangalore</option>
        <option>City 1</option>
        <option>City 2</option>
        <option>City 3</option>
        <option>City 4</option>
        <option>City 5</option>
      </select>
      <a
        className="bg-purple-550 font-medium rounded-xl px-4 py-1"
        href="/event/new"
      >
        Publish Event
      </a>
      <a href="/offers" className="font-medium">Offers</a>
    </div>
  )
}

export default SubHeader

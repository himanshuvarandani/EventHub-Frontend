import { useContext, useEffect, useRef, useState } from "react"
import ReactElasticCarousel from "react-elastic-carousel"
import { fetchEvents } from "../api/events"
import EventCard from "../components/EventCard"
import Footer from '../components/Footer'
import Header from '../components/Header'
import SubHeader from "../components/SubHeader"
import { AuthContext } from "../context/AuthContext"

const Home = () => {
  const [events, setEvents] = useState([])
  const { selectedCity, selectedCategory} = useContext(AuthContext)
  const carouselRef = useRef(null)
  let resetTimeout

  useEffect(() => {
    fetchEvents(selectedCity, selectedCategory)
      .then(({ data }) => setEvents(data))
      .catch(() => alert("Not able to fetch events, please Try Again!"))
  }, [selectedCity, selectedCategory])

  return (
    <div>
      <Header />
      <SubHeader />
      <div className="py-5">
        <ReactElasticCarousel
          ref={carouselRef}
          itemsToShow={1}
          enableAutoPlay={true}
          autoPlaySpeed={5000}
          showArrows={false}
          onNextEnd={({ index }) => {
            clearTimeout(resetTimeout)
            if (index === 1) {
              resetTimeout = setTimeout(() => {
                carouselRef.current.goTo(0)
              }, 5000)
            }
          }}
        >
          <div className="flex justify-center w-full">
            <img src="/Image1.png" />
          </div>
          <div className="flex justify-center w-full">
            <img src="/Image1.png" />
          </div>
        </ReactElasticCarousel>
        <div className="mx-20 my-10">
          <div>
            <h1 className="text-2xl font-bold">New Events</h1>
            <div className="flex flex-row overflow-x-auto m-5">
              {!events.length
                ? <p>No Events Available</p>
                : events.map(event => (
                    <EventCard event={event} />
                  ))
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home

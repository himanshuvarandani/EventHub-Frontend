import { useEffect, useRef, useState } from "react"
import ReactElasticCarousel from "react-elastic-carousel"
import EventCard from "../components/EventCard"
import Footer from '../components/Footer'
import Header from '../components/Header'
import SubHeader from "../components/SubHeader"
import { fetchEventById } from "../api/events"
import { useParams } from "react-router-dom"
import Modal from "../components/Modal"

const Event = () => {
  const [event, setEvent] = useState({})
  const { eventId } = useParams()
  const carouselRef = useRef(null)
  let resetTimeout

  useEffect(() => {
    fetchEventById(eventId)
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <Header />
      <SubHeader />
      <div className="mx-20 my-10">
        <div className="text-center">
          <h1 className="text-4xl mb-2">Event Name</h1>
          <p className="text-xl">Tagline</p>
        </div>
        <hr className="my-8 border-y-2 border-solid border-gray-650" />
        <div className="mx-10">
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
          <div className="flex justify-between items-stretch mx-2 my-10">
            <div className="bg-white rounded-2xl w-3/4 mr-10 py-5 px-10">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-2xl font-bold">Description</h3>
                <Modal />
              </div>
              <p>Event Description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="w-1/4">
              <div className="bg-white rounded-2xl px-5 py-2 mb-5">
                <h4 className="text-xl font-medium text-center">Event Time</h4>
                <h5 className="font-medium">From</h5>
                <p className="ml-4">25th April 2022 15:30</p>
                <h5 className="font-medium">To</h5>
                <p className="ml-4">26th April 2022 15:30</p>
              </div>
              <div className="bg-white rounded-2xl text-center px-5 py-2 mb-5">
                <h4 className="text-xl font-medium">Location</h4>
                <p>Address Lorem Ipsum is simply dummy</p>
                <p className="text-lg">City</p>
              </div>
              <div className="bg-white rounded-2xl px-5 py-2">
                <h4 className="text-xl font-medium text-center">Contact Organisers</h4>
                <ul className="list-disc ml-5">
                  <li className="my-2">
                    <div>
                      <p>Name</p>
                      <p>Email</p>
                      <p>Contact Number</p>
                    </div>
                  </li>
                  <li className="my-2">
                    <div>
                      <p>Name</p>
                      <p>Email</p>
                      <p>Contact Number</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-2 my-10">
            <h3 className="text-2xl font-bold">Similar Events</h3>
            <div className="flex flex-row m-5">
              {/* <EventCard />
              <EventCard /> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Event

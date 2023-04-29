import { useRef } from "react"
import ReactElasticCarousel from "react-elastic-carousel"
import EventCard from "../components/EventCard"
import Footer from '../components/Footer'
import Header from '../components/Header'
import SubHeader from "../components/SubHeader"

const Home = () => {
  const carouselRef = useRef(null)
  let resetTimeout

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
        <div className="mx-40 my-10">
          <div>
            <h1 className="text-2xl font-bold">New Events</h1>
            <div className="flex flex-row m-5">
              <EventCard />
              <EventCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home

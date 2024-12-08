import Features from "../../Components/Common/Hero/Features"
import Hero from "../../Components/Common/Hero/Hero"
import Marquee from "../../Components/Common/Hero/Marquee"

function Home() {
  return (
<div className="bg-white overflow-x-hidden">
    <Hero />
    <Marquee />
    <Features />
</div>
  )
}

export default Home
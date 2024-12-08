import { Navbar } from "src/app/components/Navbar";
import Hero from "src/app/components/hero-banner"
import Features from "src/app/components/features-section"
import News from "src/app/components/newsletter-section"
import Hero2 from "src/app/components/hero-section"
import Footer from "src/app/components/footer"
export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero />
    <Features/>
    <Hero2/>
    <News/>
    <Footer/>
    </>
  )
}
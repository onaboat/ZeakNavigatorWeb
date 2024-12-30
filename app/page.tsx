import Hero from './components/sections/Hero'
// import Swap from './components/sections/Swap'
// import Logos from './components/sections/Logos'
import About from './components/sections/About'
import PromoImage from './components/sections/PromoImage'
// import MemeAssets from './components/sections/MemeAssets'
import Mission from './components/sections/Mission'
import Tokenomics from './components/sections/Tokenomics'
import LaunchPromo from './components/sections/LaunchPromo'
// import RoadMap from './components/sections/RoadMap'
import FAQ from './components/sections/FAQ'


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      {/* <Logos /> */}
      <About />
      {/* <Swap /> */}
      <PromoImage />
      {/* <MemeAssets /> */}
      <Mission />
      <LaunchPromo />
      <Tokenomics />

      {/* <RoadMap /> */}
      <FAQ /> 
    </main>
  );
}

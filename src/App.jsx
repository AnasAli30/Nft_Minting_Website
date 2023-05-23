import Artworks from "./components/Artworks"
import { Footer } from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Alert from "./components/Alert"
import Loading from "./components/Loading"
import click from "./components/features"
import { useEffect } from "react"
import { isWallectConnected, loadNfts } from "./HackerX"
import { useGlobalState } from "./store"


const App = () => {
  const [nfts] = useGlobalState('nfts')
  useEffect(async ()=>{
    await isWallectConnected().then(()=> console.log("Blockchain loaded"))
    await loadNfts()
  }
  ,[])
  
  return (
    <div className="min-h-screen ">
      <div className="gradient-bg-hero">
      <Header></Header>
      <Hero></Hero>
      <features/>
      </div>
      <Artworks artworks={nfts}/>
      <Footer/>
      <Alert/>
      <Loading/>
      <click/>
      
      
      
      
    </div>
    
  )
}

export default App

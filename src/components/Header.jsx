

import { setAlert, setGlobalState, setLoadingMsg, useGlobalState , Cancel , setfeature } from '../store'
import { Contract } from 'ethers'
import { connectWallet } from '../HackerX'
import ethLogo from '../assets/ethlogo.png'
import { truncate , closeFeature } from '../store'
import Typewriter from 'typewriter-effect';


const Header = () => {
  const[feature] = useGlobalState("feature")
  const[connectedAccount] =  useGlobalState('connectedAccount')
  const ClickFeature =async ()=>{
    setGlobalState("feature" ,{
        show:true,
        msg:""
    })
    
    
  }
  const close = async()=>{
    closeFeature()
  }
   // setfeature("Minting Your Nft....",{show:true,msg:""})}

 
  
  return (
    
    
   <nav className="w-4/5 flex  justify-between md:justify-center 
   items-center py-4 mx-auto">
    <div className="flex flex-row justify-start items-center
    md:flex-[0.5] flex-initial">
        <img className="w-8 cursor-pointer"src={ethLogo} alt="ethlogo"/>
        <span className='text-white text-2xl ml-2'>HackerX</span>
    </div>


    <div
          className={`fixed top-0 left-0 w-screen h-screen
          flex items-center justify-center bg-black 
          bg-opacity-50 transform transition-transform
          duration-300 ${feature.show ? "scale-100" : "scale-0"} `}
        >
      
          <div
            className="flex flex-col justify-center
            items-center bg-[#151c25] shadow-xl 
            shadow-[#653161] rounded-xl 
            min-w-min px-10 pb-2"
          >
            
  
    
             <button class="btn-right" className=' hover:scale-90 transition-all
            duration-90 delay-100  shadow-xl shadow-black text-white 
            bg-[#e32970] hover:bg-[#ff1111] md:text-xs p-1
            rounded-full cursor-pointer' onClick={close} >Close</button>
            
            <div className="flex flex-row justify-center items-center">
              
              <p className="text-lg text-white">Features</p>
              <div className="lds-dual-ring scale-50"></div>
            
              
            </div>
            <small className='text-white'><Typewriter onInit={(typewriter)=>{
            
            typewriter
            .typeString("Artificial intelligence can provide NFTs with three major benefits that make them more attractive and valuable to buyers, collectors, and fans. First, artificial intelligence can enhance NFTs’ uniqueness by creating infinite variations and combinations based on the original design or concept.").start();
        }}/> </small><br/>
            <small className="text-white">
        
        <Typewriter onInit={(typewriter)=>{
            
            typewriter
            .typeString("Second, artificial intelligence can personalize NFTs by adding features that reflect the owner’s preferences, history, or behavior. For instance, an AI-powered music tokens can generate a unique remix or version based on the listener’s mood or location.").start();
        }}/></small><br/>
        <small className='text-white'><Typewriter onInit={(typewriter)=>{
            
            typewriter
            .typeString("Third, artificial intelligence can enable real-time data analysis of NFTs’ performance, usage, and feedback. This can inform the creators, communities, and investors about their market value and potential. For instance, an AI-powered sports NFT can track a player’s stats, injuries, and achievements and adjust its price and rarity accordingly").start();
        }}/></small>
        
          </div>
        </div>


    <ul  className="md:flex-[0.5] text-white 
        md:flex hidden list-none flex-row 
        justify-between items-center flex-initial" >

        <li className='hover:scale-90 transition-all
            duration-90 delay-100 mx-2 cursor-pointer'><a target="_blank">Explore</a></li>
        <li className='hover:scale-90 transition-all
            duration-90 delay-100 mx-2 cursor-pointer'><button onClick={ClickFeature}>Features</button></li>
        <li className='hover:scale-90 transition-all
            duration-90 delay-100 mx-2 cursor-pointer'><a href = "https://linktr.ee/HackerX0" target="_blank">Community</a></li>

    </ul>
  
    {connectedAccount ? (
      <button className="shadow-xl shadow-black text-white 
      bg-[#e32970] hover:bg-[#0008ff] md:text-xs p-2
      rounded-full cursor-pointer"><a href = 'https://etherscan.io' target='_blank'>{truncate(connectedAccount,4,4,11)}</a></button>
    ):(
      <button  className="hover:scale-90 transition-all
      duration-100 delay-100 shadow-xl shadow-black text-white 
      bg-[#282c90] hover:bg-[#2b19c9] md:text-xs p-2
      rounded-full cursor-pointer"
    onClick={connectWallet}>Connect Wallet</button>

    )}



    
   </nav>
  )
}

export default Header
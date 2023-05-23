import ethLogo from '../assets/ethlogo.png'
import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect';
import { useGlobalState } from '../store';
import { truncate } from '../store'



const Artworks = ({artworks}) => {
  const[connectedAccount] =  useGlobalState('connectedAccount')
  
  const [end,setEnd] = useState(3)
  const [count] = useState(3)
  const[nfts,setNfts] = useState([])
  const getNftys = ()=>{
    return artworks.slice(0,end)
  } 
  useEffect(()=>{
    setNfts(getNftys())

  },[artworks,end])
  return (
    <div className='bg-[#131835] py-10'>
        <div className='w-4/5 mx-auto'>
            <h4 className='text-gradient uppercase text-2xl'>Artworks</h4>
            <div className='flex flex-wrap justify-center items-center mt-4'>
              {nfts.map((nft,i)=> (
                <a 
                href={nft.url} 
                target='_blank'
                key={i}
                
                className={`relative shadow-xl shadow-black p-3
                bg-white rounded-lg item w-64 h-64 object-contain
                bg-no-repeat bg-cover overflow-hidden mr-2 mb-2
                cursor-pointer transition-all duration-75 delay-100
                hover:shadow-[#bd255f]`}
                style={{backgroundImage: `url(${nft.imageURL})`}}>
                  <div className='absolute bottom-0 left-0 right-0
                  flex justify-between items-center label-gradient
                  p-0 w-full text-white text-sm'>
                    <p>Minted By:{truncate(nft.buyer,4,4,11)}</p>
                    <div className='absolute bottom-5 left-0 right-0
                  flex justify-between items-center label-gradient
                  p-2 w-full text-white text-sm'>
                    <p>HackerArt #{nft.id}</p>
                    <div className='flex justify-center items-center space-x-2' >
                    <img className='w-5 cursor-pointer'
                    src={ethLogo} alt="Adulam Logo"/>
                    {nft.cost}
                    </div>
        
                  </div>
                  </div>
                  </a>
              ))}
            </div>
            <div className='flex justify-center items-center mx-auto mt-4'>
              {artworks.length > 0 && artworks.length > nfts.length ? (
                <button 
                className='shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] p-2 rounded-full cursor-pointer my-4' 
                onClick={()=> setEnd(end+ count)}>Load more</button>
              ): null}
              
            </div>
        </div>
        </div>
  )
              }

export default Artworks

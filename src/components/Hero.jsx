import avatar from '../assets/owner.jpg'
import github from '../assets/github_icon.png'
import facebook from '../assets/facebook_icon.png'
import twitter from '../assets/twitter_icon.png'
import linkedIn from '../assets/linkedIn_icon.png'
import medium from '../assets/medium_icon.png'
import telegram from '../assets/telegram.jpg'
import React, { useState } from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter';

import Typewriter from 'typewriter-effect';
import { setAlert, setGlobalState, setLoadingMsg, useGlobalState , Cancel  } from '../store'
import { payToMint } from '../HackerX'




const Hero = () => {
    const [nfts] = useGlobalState('nfts')
    const onMintNFT =async ()=>{
        setGlobalState("loading" ,{
            show:true,
            msg:"Minting new NFT to your account"
        })
    await payToMint()
    .catch(()=>setLoadingMsg("Minting Your Nft....",{show:true,msg:""}))
    .then(()=>setAlert("Minting successful...","green"))
    Cancel()
    
    
    
}

    
   
  return (
    <div 
    className="bg-[url('https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_960_720.png')]
     bg-no-repeat bg-cover">
    <div className='flex flex-col justify-center items-center
    mx-auto py-9'><br></br>
        <div className='text-white text-5xl font-bold text-center'>
            A.I Arts<br />
            <sapn className="text-gradient">NFTs Collection</sapn> 
        </div><br></br><br></br>

        <p className="text-white font-semibold text-sm mt-3">Mint and collect the Hottest Nfts Around</p>

        <button className='shadow-xl shadow-black text-white bg-[#e32929] hover:bg-[#bd2525] p-2
        rounded-full cursor-pointer  my-4'
        onClick={onMintNFT} >Mint Now </button>
        
        <a className="hover:scale-90 transition-all
            duration-90 delay-100  flex justify-center items-center space-x-2
        bg-[#000000ad] rounded-full my-4 pr-3 cursor-pointer"
         href="https://hackerx300.github.io/HackerX.github.io/"
          target="_blank">
            <img className="w-11 h-11 object-contain rounded-full" src={avatar} alt="Avatar"/>
            <div className=" flex flex-col font-semibold text-white" text-sm>
                <span className="text-white text-sm">0x83...3ac8</span>
                <span className="text-[#e32970] text-xs">HackerX</span>
            </div>
        </a><br></br>



        <p className="text-white text-sm font-medium text-center"> <Typewriter onInit={(typewriter)=>{
            
            typewriter
            .typeString("Anas Ali star")
            .pauseFor(0)
            .deleteAll()
            .typeString("Hacker-X started his journey as a software engineer in 2018.<br/> Over the years , he has grown full-blown skills in Java , C , C++ , Python , Solidity,<br/>JavaScript stacks such as React,ReactNative,and now Blockchain.").start();
        }}/>   
        </p><br></br>
        


        <ul className='flex flex-row justify-center space-x-2
        items-center my-4'>
            <a className='bg-white hover:scale-50 transition-all
            duration-75 delay-75 rounded-full mx-2' href="https://github.com/HackerX300" target='_blank'>
                <img className='w-8 h-8' src={github} alt="Github"></img>
                </a>
            <a className='bg-white hover:scale-50 transition-all
            duration-75 delay-75 rounded-full mx-2' href="https://fb.com/anasali.khan.1447" target='_blank'>
                <img className='w-8 h-8' src={facebook} alt="Github"></img>
                </a>
            <a className='bg-white hover:scale-50 transition-all
            duration-75 delay-75 rounded-full mx-2' href="https://twitter.com/hacker37024602" target='_blank'>
                <img className='w-8 h-8' src={twitter} alt="Github"></img>
                
                </a>
            <a className='bg-white hover:scale-50 transition-all
            duration-75 delay-75 rounded-full mx-2' href="https://medium.com/@anasali126665ug" target='_blank'>
                <img className='w-8 h-8'  src={medium} alt="Github">
                    </img></a>
            <a className='bg-white hover:scale-50 transition-all
            duration-75 delay-75 rounded-full mx-2'  href="https://www.linkedin.com/in/anas-ali-26a255273/" target='_blank'>
                <img className='w-8 h-8' src={linkedIn} alt="Github"></img>
                </a>
            <a className=' bg-black hover:scale-50 transition-all
            duration-75 delay-75 rounded-full mx-2'  href="https://t.me/abouthackerX0/5" target='_blank'>
                <img className='w-8 h-8' src={telegram} alt="Github"></img>
                </a>
        </ul><br></br>

        <div className='shadow-xl shadow-black flex justify-center
        items-center w-10 h-10 rounded-full bg-white cursor-pointer
        p-2 ml-4 text-black hover:bg-[#bd255f] hover:text-white transition-all
        duration-75 delay-100'>
            <span className='text-sm font-bold'>{nfts.length}/99</span>

        </div>
        




    </div>
    </div>

      )
      
}


export default Hero
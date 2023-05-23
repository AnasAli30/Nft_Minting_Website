import { features } from "process";
import { createGlobalState } from "react-hooks-global-state";


const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);


const{setGlobalState,useGlobalState , getGlobalState} = createGlobalState({
    connectedAccount:"",
    contract:null,
    nfts:[],
    alert: { show: false, msg: '', color: '' },
    loading: { show: false, msg: '' },
    feature:{show:false,msg:'',}
})

const setAlert = (msg, color = 'green') => {
  setGlobalState('alert', { show: true, msg, color })
   
}

 const Cancel= async event => {
  await delay(17000)
  setGlobalState('loading', false)
  await delay(3000)
  setGlobalState('alert', { show: false, msg: ''})
  await delay(2000)
  window.location.reload(true)
}

const closeFeature = async  cont => {
  setGlobalState('feature',false)

}




 const setLoadingMsg = (msg) => {
  const loading = getGlobalState('loading')
  setGlobalState('loading', { ...loading, msg })
 }


 const setfeature = (msg) => {
  const feature = getGlobalState('feature')
  setGlobalState('feature' , {...feature,msg})

 }

const truncate = (text, startChars, endChars, maxLength) => {
    if (text.length > maxLength) {
      let start = text.substring(0, startChars)
      let end = text.substring(text.length - endChars, text.length)
      while (start.length + end.length < maxLength) {
        start = start + '.'
      }
      return start + end
    }
    return text
   }
   
   export { useGlobalState, setGlobalState, getGlobalState, truncate , setAlert,setLoadingMsg , Cancel , setfeature,  closeFeature}
   
import React from 'react'
import{ useState } from 'react'
import p1 from "../assets/Task1pic/1.png"
import p2 from "../assets/Task1pic/testimonial.png"
import p3 from "../assets/Task1pic/3.png"
import p4 from "../assets/Task1pic/4.png"
import p5 from "../assets/Task1pic/5.png"
import video from "../assets/Task1pic/video.png"
import emoji from "../assets/Task1pic/emoji.gif"
import troffe from "../assets/Task1pic/troffe.gif"
import thumpsup from "../assets/Task1pic/thumpsup.gif"  
import like from "../assets/Task1pic/like.gif"
import { animate, motion } from 'framer-motion'

const Task1 = () => {

  const [hovered, setHovered] = React.useState(false);
  const[imghover,setimghover]=React.useState(null);


const imagebefore=[
   {src:p1,position:{top:'20%',left:'40%'}},
   {src:p2,position:{top:'30%',left:'30%'}},
   {src:emoji,position:{top:'50%',left:'25%'}},
   {src:p4,position:{top:'65%',left:'35%'}},
   {src:p5,position:{top:'65%',left:'60%'}},
   {src:troffe,position:{top:'75%',left:'50%'}},
   {src:video,position:{top:'30%',left:'70%'}},
   {src:like,position:{top:'50%',left:'79%'}},
   {src:p3,position:{top:'20%',left:'60%'}},
   {src:thumpsup,position:{top:'10%',left:'50%'}}
]

const imageafter=[
   {src:p1,position:{top:'15%',left:'38%'},yvalues:[0,-15,0]},
   {src:p2,position:{top:'25%',left:'25%'},yvalues:[0,15,0]},
   {src:emoji,position:{top:'50%',left:'20%'},yvalues:[0,-15,0]},
   {src:p4,position:{top:'73%',left:'38%'},yvalues:[0,-15,0]},
   {src:p5,position:{top:'70%',left:'62%'},yvalues:[0,15,0]},
   {src:troffe,position:{top:'86%',left:'50%'},yvalues:[0,15,0]},
   {src:video,position:{top:'25%',left:'75%'},yvalues:[0,15,0]},
   {src:like,position:{top:'52%',left:'75%'},yvalues:[0,-15,0]},
   {src:p3,position:{top:'18%',left:'63%'},yvalues:[0,-15,0]},
   {src:thumpsup,position:{top:'23%',left:'50%'},yvalues:[0,15,0]}
]


  return (


    <div>

<div className='flex rounded-lg h-screen w-full  pl-10 pr-10  pt-10'>

<section onMouseEnter={() => setHovered(true)}
 onMouseLeave={() => setHovered(false)} 
 className='relative  h-full w-full rounded-lg bg-white overflow-hidden '>
{imagebefore.map(({src,position},index)=>(
 
 
 <motion.div key={index} src={src} 
className={`absolute ${hovered && imghover===0 && index===0?"z-[100]":"z-10"}`}
  initial={{top:position.top,left:position.left}}
  animate={
    hovered?
     {top:imageafter[index].position.top,
    left: imageafter[index].position.left,
    y: imageafter[index].yvalues
  }:
{top:position.top,left:position.left }}
transition={{
  
  ease: "easeInOut",
 
  duration:0.5,
  y:{
    ease:"easeInOut",
    repeat:Infinity,
    duration:2.5
  }}}
  onMouseEnter={() => setimghover(index)}
  onMouseLeave={() => setimghover(null)}

>
    {(index === 0 || index === 5) && (imghover === 0 || imghover === 5) && (
    <motion.div 
    className="absolute -inset-1 rounded-3xl border-4 border-green-400"
    initial={{ scale: 0.5 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 }}
  />)}
  <img src={src} className='rounded-3xl lg:w-[100px] lg:h-[100px] w-[40px] h-[40px]  shadow-lg object-cover '/>
   
   
    {(index ===0 || index === 4) && (
     <motion.div 
    className="absolute  top-[24%] left-[90%] w-[200px] h-[35px] p-4  rounded-lg z-50  "
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 1, 0] }}
    transition={{
      duration: 4,
      times: [0, 0.2, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1
    }}


  >
    Amazing⭐⭐⭐⭐⭐ 
  </motion.div>
  
    )}


    {(hovered && imghover === 0) && index===0 && (
      <motion.div 
      className="absolute top-[80%] left-[0%] lg:w-[300px] lg:h-[140px] w-[200px] h-[170px]
       p-4 bg-white shadow-2xl rounded-lg  "
       initial={{ opacity: 0,scale:0}}
       animate={{ opacity: 1,scale:1 }}
       transition={{ duration: 2}}
       >
        <p className="text-black text-xs mb-2 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quos necessitatibus quod voluptatum expedita sunt, earum optio architecto natus, dicta in, ad hic? Exercitationem nesciunt consequuntur nostrum praesentium ullam at!
        </p>

      </motion.div>
  
    )}
    </motion.div>

  
))}
 
  <div className='flex justify-center pl-[90px] items-center h-full'>
    <p className='  lg:text-xl text-sm text-center font-bold text-black'>
Hear How They Level Up Their Game!<br />

    <h1 className=' lg:text-4xl text-lg text-center font-bold text-black'>
Skill <span className='text-green-500'>Masters </span>Unite!<br/></h1>
<p className='  lg:text-xl text-sm text-center font-bold text-black'></p>
view all testimonials</p></div>  



</section>



</div>


    </div>
  )
}

export default Task1

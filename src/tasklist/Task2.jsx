import React from 'react'
import Group1 from "../assets/Task2pic/Group.png"
import Group2 from "../assets/Task2pic/2nd.png"
import Group3 from "../assets/Task2pic/3rd.png"
import Group4 from "../assets/Task2pic/4th.png"   
import {motion} from "framer-motion";
const Task2 = () => {
  return(
<div className="relative h-screen w-screen overflow-x-hidden">
  <div className="pl-20"><h1 className='mt-5  text-5xl font-bold'>
    
  <span className="text-green-500">Step</span>{" "}
  <span className="text-black">In.</span>{" "}
  <span className="text-green-500">Skill</span>{" "}
  <span className="text-black">Up.</span>{" "}
  <span className="text-green-500">Stand</span>{" "}
  <span className="text-black">Out.</span>
</h1></div>
 <div className="absolute bg-transparent text-white z-40  p-[90px]  mr-20 h-screen  w-screen rounded-lg grid lg:grid-cols-2 gap-[60px]">


<motion.div 
whileHover={{
  x:-800,
  opacity:0
}}
transition={{duration:0.6, ease:"easeInOut"}}
className="bg-[#F58282] flex text-right justify-end items-center p-10 lg:pl-[170px] rounded-lg shadow-lg">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Autem dicta optio ipsum assumenda repellat aspernatur 
    laudantium iure facere ratione sapiente distinctio consectetur,
    minus, quod quasi debitis eos placeat iste veniam.
    </motion.div>  

<motion.div 

 
whileHover={{
  x:-500,
  opacity:0
}}
transition={{duration:0.6,ease:"easeInOut"}}

className="bg-[#5492A0] flex justify-center items-center p-10  lg:pr-[170px] rounded-lg shadow-lg">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Autem dicta optio ipsum assumenda repellat aspernatur
    laudantium iure facere ratione sapiente distinctio consectetur,
    minus, quod quasi debitis eos placeat iste veniam.
    </motion.div> 

<motion.div 
whileHover={{
  x:-800,
  opacity:0
}}
transition={{duration:0.6, ease:"easeInOut"}}
className="bg-[#6C64A8] flex  text-right justify-center items-center p-10 lg:pl-[170px]  rounded-lg shadow-lg">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Autem dicta optio ipsum assumenda repellat aspernatur
    laudantium iure facere ratione sapiente distinctio consectetur,
    minus, quod quasi debitis eos placeat iste veniam.
</motion.div>

   
<motion.div 
whileHover={{
  x:-800,
  opacity:0
}}
transition={{duration:0.6, ease:"easeInOut"}}
className="bg-[#A88964] flex justify-center items-center p-10  lg:pr-[170px] rounded-lg shadow-lg">
 
     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Autem dicta optio ipsum assumenda repellat aspernatur
    laudantium iure facere ratione sapiente distinctio consectetur,
    minus, quod quasi debitis eos placeat iste veniam.
    </motion.div>  


    </div> 


{/*arko*/}
     <div className="  text-white  p-[90px]  mr-20 h-screen z-30 w-screen rounded-lg grid lg:grid-cols-2 gap-[60px] ">


{/* bottom card */}
           <div className="bg-[#E06666] flex text-right justify-end items-center p-10 lg:pl-[170px] rounded-lg shadow-lg">
            sanf Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Autem dicta optio ipsum assumenda repellat aspernatur 
    laudantium iure facere ratione sapiente distinctio consectetur,
    minus, quod quasi debitis eos placeat iste veniam.
    </div>  


  <div className="bg-[#437784] flex justify-center items-center p-10  lg:pr-[170px] rounded-lg shadow-lg">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Autem dicta optio ipsum assumenda repellat aspernatur
    laudantium iure facere ratione sapiente distinctio consectetur,
    minus, quod quasi debitis eos placeat iste veniam.
    </div> 

<div className="bg-[#5A5190] flex  text-right justify-center items-center p-10 lg:pl-[170px]  rounded-lg shadow-lg">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Autem dicta optio ipsum assumenda repellat aspernatur
    laudantium iure facere ratione sapiente distinctio consectetur,
    minus, quod quasi debitis eos placeat iste veniam.
</div>

  

    <div className="bg-[#8F7452] flex justify-center items-center p-10  lg:pr-[170px] rounded-lg shadow-lg">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Autem dicta optio ipsum assumenda repellat aspernatur
    laudantium iure facere ratione sapiente distinctio consectetur,
    minus, quod quasi debitis eos placeat iste veniam.
    </div>  

 </div>
  


 <div className="absolute top-0 bg-transparent z-50 text-white  p-[10px]  mt-[10px]
   lg:h-screen h-[1100px]  w-screen rounded-lg grid lg:grid-cols-2 lg:gap-[50px] gap-[0px] pointer-events-none">

<motion.div
initial={{y:0}}
animate={{y:[0,-10,0]}}
transition={{duration:2,
   ease:"easeInOut",
    repeat:Infinity}}
className="bg-transparent lg:mt-[135px] mt-[15px]  flex justify-start  ">
 <img src={Group1} alt="Group 1" className='lg:w-[300px] lg:mt-[0px] mt-[50px] lg:h-[300px] w-[150px] ' />
</motion.div>

  <motion.div
initial={{y:0}}
animate={{y:[0,-10,0]}}
transition={{duration:2,
   ease:"easeInOut",
    repeat:Infinity}} className="bg-transparent  mt-[150px]  flex justify-end  ">
 <img src={Group3} alt="Group 1" className='lg:w-[280px] lg:h-[300px] w-[180px] ' />
</motion.div>

  <motion.div
initial={{y:0}}
animate={{y:[0,-10,0]}}
transition={{duration:2,
   ease:"easeInOut",
    repeat:Infinity}} className="bg-transparent    flex justify-start ">
   <img src={Group4} alt="Group " className='lg:w-[350px] lg:h-[290px] w-[210px] ' />

   </motion.div>

 <motion.div
initial={{y:0}}
animate={{y:[0,-10,0]}}
transition={{duration:2,
   ease:"easeInOut",
    repeat:Infinity}} className="bg-transparent   flex justify-end  ">
   <img src={Group2} alt="Group " className='lg:w-[300px] lg:h-[300px] w-[200px] ' />

   </motion.div>




   


   
    </div>


    </div>
    
  )
}

export default Task2

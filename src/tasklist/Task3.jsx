import React from 'react'
import {motion,AnimatePresence} from "framer-motion"
import {useState} from 'react'
import group4 from "../assets/Task3pic/4.png"
import group3 from "../assets/Task3pic/5.png"
import group2 from "../assets/Task3pic/6.png"
import group1 from "../assets/Task3pic/7.png"
const Task3 = () => {

  const [isClicked,setClicked]= useState(1);
   const [direction, setDirection] = useState(0);

  const cards = [
    { id: 1, title: "All Courses", paragraph: "courses you're powering  through right now.", number: "23+" },
    { id: 2, title: "Upcoming Courses", paragraph: "exciting new courses waiting to boost your skills.", number: "05+" },
    { id: 3, title: "Ongoing Courses", paragraph: "currently happening-don't miss out on action!", number: "10+" },
  ];

  return (<div>
   <h1 className='mt-20 ml-[150px] text-5xl font-bold'>
    
  <span>Dive Into </span>{" "}
  <span className="text-green-500">Whats Hot Right Now!</span>{" "}

</h1>
    <div className='flex lg:flex-row flex-col  lg:h-screen  items-end p-10  justify-center items-center gap-8  '>
     
      {cards.map((cards)=>
      <motion.div key={cards.id}
      className={`relative  rounded-3xl overflow-hidden p-10 bg-[#C33241]  h-[500px]   ${isClicked === cards.id ? 'bg-[#C33241] text-[#F9EBEC]' : 'bg-[#F9EBEC] text-[#C33241]' } cursor-pointer`}
       onClick={() => { setClicked(cards.id); setDirection(cards.id > isClicked ? 1 : -1); }}
      initial={{ width: "500px"}}
       animate={ { width: isClicked ==cards.id? "600px":"300px"}}
      transition={{
        duration:0.5,
               type: "tween",
      }}
              
      >
                 <AnimatePresence mode="wait">
            {isClicked === cards.id && (
              <motion.div
                key={cards.id} // only key here matters
                className="mt-10 flex items-center justify-center gap-4"
                initial={{ x: -200*direction, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 200, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <img src={group4} alt="group4" />
                <img src={group3} alt="group3" />
                <img src={group2} alt="group2" />
                <img src={group1} alt="group1" />
              </motion.div>
            )}
          </AnimatePresence>
         
        <motion.div 
        key={cards.id} 
        animate={{rotate: isClicked === cards.id ? 90 :0,
           y: isClicked === cards.id ? 350 : 270,
            x: isClicked === cards.id ? -20 : 5
        }
        }   transition={{
        duration:0.5,
               ease: "easeInOut",
      }}>
          
      <h1 className=' absolute origin-top-left text-4xl font-bold  leading-tight  -rotate-90'>{cards.title}</h1>
      </motion.div>

        
        <motion.div 
        key={cards.id} 
        animate={{rotate: isClicked === cards.id ? 90 :0,
           y: isClicked === cards.id ? 320 : 100,
            x: isClicked === cards.id ? 160 : 5
        }
        }   transition={{
        duration:0.5,
               ease: "easeInOut",
      }}> <p className='mt-[5px] absolute w-[240px] text-xl   -rotate-90'>{cards.paragraph}</p>
     </motion.div>
     
      <h1  className='absolute bottom-10 text-9xl font-bold '>{cards.number}</h1>

      
      </motion.div>
  )}
    
    </div>
  </div>

  )}
export default Task3

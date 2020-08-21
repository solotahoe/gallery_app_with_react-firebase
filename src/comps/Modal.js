
import React from 'react';
import { motion } from "framer-motion";

export default function Modal({ selectedImg, setselectedImg }) {

    const handleClick=(e)=>{
        if(e.target.classList.contains("backdrop")){
           setselectedImg(null);  
        }
      

    }
                 return (
                   <motion.div className="backdrop" onClick={handleClick}
                   initial={{opacity:0}}
                   animate={{opacity:1}}
                   >
                     <motion.img src={selectedImg} alt="the modal pics"  initial={{x:"-100vw"}} animate={{x: 0}}/>
                   </motion.div>
                 );
               }

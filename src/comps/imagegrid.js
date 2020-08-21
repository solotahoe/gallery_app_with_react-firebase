import React from 'react'
import usefirestore from '../hooks/usefirestore';
import {motion} from 'framer-motion';

export default function Imagegrid({ setselectedImg }) {
                 const { docs } = usefirestore("images");
                 //console.log(docs);
                 return (
                   <div className="img-grid">
                     {docs &&
                       docs.map((doc) => (
                         <motion.div className="img-wrap" key={doc.id} onClick={()=>setselectedImg(doc.url)}
                           layout whileHover={{opacity:1}}
                         >
                           <motion.img src={doc.url} alt="uploaded from the gallery"  
                           initial={{opacity:0.5}} animate={{opacity:1}} transition={{delay:0.5}}/>
                         </motion.div>
                       ))}
                   </div>
                 );
               }

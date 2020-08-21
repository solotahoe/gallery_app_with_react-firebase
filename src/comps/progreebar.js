import React, {useEffect} from 'react';
import useStorage from '../hooks/usestorage';
import {motion} from 'framer-motion';

const ProgressBar=({file, setfile})=>{
 const {url, progress} = useStorage(file)
   // console.log(progress, url);
    useEffect(()=>{
        if(url){
            setfile(null);
        }

    },[url, setfile]);
    return(
        <motion.div className="progress-bar" initial={{width:0}} animate={{width:progress + "%"}}></motion.div>
    )
}

export default ProgressBar;
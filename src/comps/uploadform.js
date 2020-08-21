import React, {useState} from 'react'
import ProgressBar from "./progreebar";

export default function Uploadform() {
    const [file, setFile]=useState(null);
    const [error, setErrror]=useState(null);
    const Allowedtypes = ["image/jpeg", "image/png"];


    const changeHandler= (e)=>{
        let selected=e.target.files[0];
       // console.log(selected);
        if(selected && Allowedtypes.includes(selected.type)){
            setFile(selected);
            setErrror(null);
        }else{
            setFile(null);
            setErrror("Please select a valid type (PNG OR JPEG)")
        }
    }
    return (
        <div>
            <form>
                <input type='file' onChange={changeHandler}/>
                <div className="output">
             {error && <div className="error">{error}</div>}
            {file && <div className="uploadFile">{file.name}</div>}
           { file && <ProgressBar  file={file} setfile={setFile}/>}
                </div>
            </form>
        </div>
    )
}

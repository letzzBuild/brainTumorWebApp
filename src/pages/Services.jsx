import React,{useState} from 'react'
import Appbar from '../reuseableComponent/Appbar'
import '../pages/style.css'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import axios from 'axios';




  


export default function Services(){

    var random =  Math.random();

    const [label, setlabel] = useState("")
    const [image, setimage] = useState(null)
    const [showOutput, setshowOutput] = useState(false)
    const [outputImage, setoutputImage] = useState("")

    const changeHandler = (event)=>{
     console.log(event.target.files)
     setimage(event.target.files[0])
    }
   
    const handleSubmit = (e)=>{
    setshowOutput(false) 
      
     e.preventDefault()
     var formdata = new FormData()
     formdata.append(
         "mri", image
     )
     axios.post("http://127.0.0.1:8000/app/detect/",formdata).then((res)=>{
          setlabel(res.data.result.output)
          setoutputImage("http://127.0.0.1:8000"+res.data.result.image)
          console.log(res.data.result.output)
          setshowOutput(true)

     }).catch((err)=>{
          console.log(err)
     })
    }
     
    

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <Appbar></Appbar>
            <center>
            <div className='container'>
            <h1>Upload MRI Scan Image</h1>
            <TextField id="outlined-basic" required variant="outlined" type='file'
            onChange={changeHandler}
           />
            <br></br>
            <br></br>
            <Button type="submit" variant="contained" color="secondary" >
        Submit
      </Button>

            
            </div>
            </center>
            </form>
       <br></br> <br></br>
        {showOutput ? <div>
            <center>
                <h1>Brain Tumor Stage</h1>
                <div className="output-container">
                 <img src={outputImage+`?${random}`} width="400" height="300" alt="not found"/>
                <div className="outputLabel">
                <h1 >{label}</h1>
                </div>
                </div>
            
            </center>
            </div>  : ""  
            
        }
        </div>
    )
}
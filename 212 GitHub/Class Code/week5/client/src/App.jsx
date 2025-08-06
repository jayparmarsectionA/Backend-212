import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [singleFile, setSingleFile] = useState(null);
  const [displaySingleFile, setDisplaySingleFile]= useState(null);
  const [displayMessage, setDisplayMessage] = useState("");

  const fetchSingleFile = async()=>{
    try{
    const response = await fetch(`http://localhost:9000/books/all`);
    const data = await response.json(); //extract file data
    console.log(data)

    const imageURL = URL.createObjectURL(data) // convert data to usable URL on front end
    //add more after a while -->  
    
    setDisplaySingleFile(imageURL);
  }
  catch (error){
    setDisplayMessage("There was error with your request")
    console.log(error);
    }
  };




  const saveSingleFile = async(e)=>{
    e.presentDefault();

    try{
      const newFormData = new FormData();
      newFormData.append('file', singleFile);
      const response = await fetch(`http://localhost:8000/fetch/single`, {
      method: "POST",
      body: newFormData,
    }); 

      if (!response.ok){
        setDisplayMessage("Error uploading your file")
      }
      setDisplayMessage("file successfully uploaded")
    }
    catch(error){
      setDisplayMessage("There was an issue uploading your file");
     console.log(error);
    }
  }

  return (
    <>
     <form onSubmit={saveSingleFile}>
      <input 
      type="file"
      onChange={(e)=>{ setSingleFile(e.target.files[0])}} 
      multiple
      />
      <button type="submit">Upload File</button>
     </form>
     <button onClick={fetchSingleFile} > Fetch a File </button>
     {displaySingleFile && (
      <div>
        <img
          src={displaySingleFile}
          style={{maxWidth: "300px"}}
        />
      </div>
     )}
    </>
  )
}

export default App

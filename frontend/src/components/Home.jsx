import React, {useState} from 'react';
import axios from 'axios';
import FileBase64 from 'react-file-base64';

const Home = () => {

    const [input, setInput] = useState({
        name: '',
        seedName: '',
        quality: '',
        add:'',
        category: '',
        selectedFile: ''
    })

  function handleChange(event){
    const {name , value} = event.target;

    setInput(prevInput => {
        return{
            ...prevInput,
            [name]: value
        }
    })
  }

  function handleClick(event){
    event.preventDefault();
    const newDetail = {
        name: input.name,
        seedName: input.seedName,
        quality: input.quality,
        add: input.add,
        category: input.category,
        selectedFile: input.selectedFile
    }
    console.log(input);
    axios.post('http://localhost:3001/', newDetail)
  }

  return (
    <div className='container'>
      <h1>Form</h1>
      <form>
        <div className='form-group'>
        <input onChange={handleChange} name="name" value={input.name} className='form-control' placeholder='Candidate Name' type="text" />
        </div>
        <div className='form-group'>
        <input onChange={handleChange} name="seedName" value={input.seedName} className='form-control' placeholder='Seed Name' type="text" />
        </div>
        <div className='form-group'>
        <input onChange={handleChange} name="quality" value={input.quality} className='form-control' placeholder='Seed Quality' type="text" />
        </div>
        <div className='form-group'>
        <input onChange={handleChange} name="add" value={input.add} className='form-control' placeholder='Address' type="text" />
        </div>
        <div className='form-group'>
        <input onChange={handleChange} name="category" value={input.category} className='form-control' placeholder='Seed Category' type="text" />
        </div>
        <div className='form-group'>
        <label>Upload seed photo</label>
        <FileBase64
        multiple={ false }
        onDone={ ({base64}) => setInput({...input, selectedFile: base64 }) } />
        </div>
    
        <button onClick={handleClick} className='btn btn-lg btn-info'>Submit</button>
      </form>
    </div>
  )
}

export default Home

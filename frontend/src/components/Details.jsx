import React, {useEffect, useState} from 'react';
import './Details.css';

const Details = () => {

 const [details, setDetails] = useState([{
  name: '',
  seedName: '',
  quality: '',
  add:'',
  category: '',
  selectedFile: ''
 }])
 
 useEffect(() => {
    fetch('/details').then(res => {
        if(res.ok){
            return res.json()
        }
    }).then(jsonRes => setDetails(jsonRes));
 })
  return (
    <div className='container'>
      <h1>Details</h1>
      {details.map(detail =>
        <div className='detail'>
          <div className='content'>
            <h2>{detail.name}</h2>
            <h3>{detail.seedName}</h3>
            <h3>{detail.quality}</h3>
            <h3>{detail.add}</h3>
            <h3>{detail.category}</h3>
            </div>
            <div className='image'>
            <img src={detail.selectedFile} alt="" />
            </div>
        </div>
        )}
    </div>
  )
}

export default Details

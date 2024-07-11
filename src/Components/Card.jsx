import React, { useState, useEffect } from 'react';
// import img1 from '../assets/Images/IMG_1.1.jpg';




const Card = (props) => {

    const [imgSrc, setImgSrc] = useState(null);
    useEffect(() => {
        // Dynamically import the image based on prop.id
        import(`../assets/Images/${props.img1}`)
          .then((module) => setImgSrc(module.default))
          .catch((error) => console.error('Error loading image:', error));
      }, [props.id]);
    
      if (!imgSrc) {
        return <div>Loading...</div>;
      }
   
  return (
    <div className='w-[220px] m-5 h-[400px] bg-white shadow-md'>
        <div className=' w-full h-[130px]'><img className='w-full h-full z-0' src={imgSrc} alt="" /></div>
        <div className='bg-blue-600 w-full z-1 h-[80px]'>{props.name}</div>
        <div className='pl-3'>
            <h1 className='font-bold'>Location:{props.city}</h1>
            <br />
            <h4>Fee: {props.fee}</h4>
            <h4>Status: {props.status}</h4>
            <h4>Degree: {props.degree}</h4>
        </div>
        <div className=''>
            <a href={props.url}><button className='bg-blue-800 py-1 px-2 my-2 ml-3'>Brochure</button></a>
            
            <a href="https://youtube.com"><button className='bg-red-900 py-1 px-2 text-white ml-8'>More Info</button></a>
            
        </div>
        
    </div>
  )
}

export default Card
import React from 'react'

const Filters = (props) => {
  const Locations = [...new Set(props.data.map(item => item.location))];
  const Fee_range = [...new Set(props.data.map(item => item.fee_cat))];
  const University = [...new Set(props.data.map(item => item.university))];

  

  return (
    <div className='flex-col'>
      <div className='flex-col bg-orange-200'>
        <h2>Location</h2>
        <br />
        {Locations.map((item, index) => {
          return <div><input type="checkbox" onChange={props.locFunc} key={index} name={item} id={"Loc_" + item} value={item} />{item}</div>
        })}
      </div>
      <div className='flex-col bg-lime-300'>
        <h2>Fee Range</h2>
        <br />
        {Fee_range.map((item, index) => {
          return <div><input type="checkbox" onChange={props.feeFunc} name={item} key={index} id={"Loc_" + item} value={item} />{item}</div>
        })}
      </div>
      <div className='flex-col bg-teal-500'>
        <h2>University</h2>
        <br />
        {University.map((item, index) => {
          return <div><input type="checkbox" onChange={props.uniFunc} name={item} key={index} id={"Loc_" + item} value={item} />{item}</div>
        })}
      </div>
    </div>
  )
}

export default Filters
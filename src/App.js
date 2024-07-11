import { useState } from 'react'
import Filters from './Components/Filters'
import Cards from './Components/Cards'

import ClgData from './assets/Data'


function App() {
  // const [locCheckedstatus, setlocCheckedstatus] = useState(false);
const [locChecked, setlocChecked] = useState([]);
const [feeChecked, setfeeChecked] = useState([]);
const [uniChecked, setuniChecked] = useState([]);


const handleLocSelect = (event) => {
  const isChecked = event.target.checked;
  const locName = event.target.name;

  // Update locChecked array based on checkbox state
  if (isChecked) {
    setlocChecked((prevLocChecked) => [...prevLocChecked, locName]);
  } else {
    setlocChecked((prevLocChecked) => prevLocChecked.filter((name) => name !== locName));
  }
};
const handleFeeSelect = (event) => {
  const isChecked = event.target.checked;
  const feeRange = event.target.name;

  // Update locChecked array based on checkbox state
  if (isChecked) {
    setfeeChecked((prevFeeChecked) => [...prevFeeChecked, feeRange]);
  } else {
    setfeeChecked((prevFeeChecked) => prevFeeChecked.filter((name) => name !== feeRange));
  }
};
const handleUniSelect = (event) => {
  const isChecked = event.target.checked;
  const uniName = event.target.name;

  // Update locChecked array based on checkbox state
  if (isChecked) {
    setuniChecked((prevUniChecked) => [...prevUniChecked, uniName]);
  } else {
    setuniChecked((prevUniChecked) => prevUniChecked.filter((name) => name !== uniName));
  }
};


const filteredData = ClgData.filter((item) => {
  const locPass = locChecked.length === 0 || locChecked.includes(item.location);
  const feePass = feeChecked.length === 0 || feeChecked.includes(item.fee_cat);
  const uniPass = uniChecked.length === 0 || uniChecked.includes(item.university);
  // Add other conditions for additional checkboxes (e.g., fee range, university)

  return locPass && feePass && uniPass;
});



  return (
    <>
      <div className='text-3xl font-bold underline h-14 border-gray-100 text-center'>
        <h1>Header</h1>
      </div>
      <div className='flex h-screen'>
        <div className='left bg-slate-100 w-3/12'>
          <Filters locFunc = {handleLocSelect} feeFunc ={handleFeeSelect} uniFunc ={handleUniSelect} data={ClgData}/>
        </div>
        <div className='right bg-red-100 w-9/12'>
          <Cards clg={filteredData}/>
        </div>
      </div>
    </>
  )
}

export default App

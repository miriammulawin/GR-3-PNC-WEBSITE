import { useState } from 'react'
import online from './assets/online.jpg'
import step2 from './assets/step2.jpg'
import step3 from './assets/step3.jpg'
import './index.css' 

function App() {
  const [count, setCount] = useState(0)
  const [selectedDiv, setSelectedDiv] = useState(1)

  const handleDivClick = (divNumber) => {
    setSelectedDiv(divNumber)
  }

  const renderContent = () => {
    switch(selectedDiv) {
      case 1:
        return (
          <div className='rounded-lg text-white shadow-2xl'>
            <img src={online} alt="" />
          </div>
        )
      case 2:
        return (
          <div className='rounded-lg  text-white shadow-2xl'>
            <img src={step2} alt="" />
          </div>
        )
      case 3:
        return (
          <div className='rounded-lg text-white shadow-2xl'>
            <img src={step3} alt="" />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
    <div className='flex flex-col justify-center items-center'>
       <h1 className='rounded-2xl bg-green-800 p-10 w-fit text-center text-5xl font-semibold text-white mt-20'>Application For College Admission is Now Open!</h1>

      <div className='flex flex-row w-50 h-fit bg-[#d4edda] mt-8 p-10 gap-5 rounded-sm border-green-800 border-2'>
        <div className='flex flex-col gap-2'>

            <div 
              className='w-60 h-15 cursor-pointer transition-colors'
              onClick={() => handleDivClick(1)}
            >
              <p className='font-bold'>Step 1: Online Registration</p>
            </div>

            <div 
              className='w-60 h-15 cursor-pointer  transition-colors'
              onClick={() => handleDivClick(2)}
            >
              <p className='font-bold'>Step 2: Submission of Initial Requirements</p>
            </div>

            <div 
              className='w-60 h-15  cursor-pointer transition-colors'
              onClick={() => handleDivClick(3)}
            >
              <p className='font-bold'>Step 3: Assestment Exam</p>
            </div>

        </div>

          {selectedDiv && (
            <div className='w-120'>
              {renderContent()}
            </div>
          )}

        </div>
      </div>
      
    </>
  )
}

export default App


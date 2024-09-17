import React, { useRef, useState } from 'react'
import vid from './assets/images/movire2.mp4'
import img8 from './assets/images/img.png'
import img1 from './assets/images/img1.png'
import img2 from './assets/images/img2.png'
import img3 from './assets/images/img3.png'
import img4 from './assets/images/img4.png'
import img5 from './assets/images/img5.png'
import img6 from './assets/images/img6.png'
import img from './assets/images/img8.png'
import PageOne from './Components/PageOne'
import PageTwo from './Components/PageTwo'
import PageThree from './Components/PageThree'
import PageFour from './Components/PageFour'

export default function App() {

  const [page, setPage] = useState(0);
  const titles = useRef(['Gmail Sign In', 'Phone Sign In', 'Nataionality']);
  let isValid = true;
  const videoRef = useRef(null);
  const [currentIndex, setcurrentIndext] = useState(0);
  const images = [img, img1, img2, img3, img4, img5, img6, img8]
  
  const PageDisplay = () => {
    if(page == 0){
      return <PageOne />
    } else if(page == 1){
      return <PageTwo />
    } else if(page == 2){
      return <PageThree />
    }else{
      return <PageFour />
    }
  };

  const clickBack = () => {
    setPage(prevPage => prevPage - 1)
  }

  const clickGo = () => {
    setPage(prevPage => prevPage + 1);

    page === 3 ? setPage(3) : '';
  }

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.pause(); 
    }
  }

  const handleMouseOut = () => {
    if (videoRef.current) {
      videoRef.current.play(); 
    }
  }

  const imgSlider = (button) => {
    setcurrentIndext(button == 'btn0' ? 0 : button == 'btn1' ? 1 : button == 'btn2' ? 2 : button == "btn3" ? 3 : button == "btn4" ? 4 : button == 'btn5' ? 5 : button == 'btn6' ? 6 : button == 'btn7' ? 7 : '')
  }

  

  return (
    <div>
      <img src={images[currentIndex]} alt="images" className='absolute h-full w-full transition-all'/>
      <div className="min-h-[100vh] flex flex-col justify-center items-center relative">
          <div className="shadow-md relative bg-lightPink h-4 w-[20%] rounded-full">
            <div style={{width: page == 0 ? '33%' : page == 1 ? '66%' : page == 2 ? '100%' : ''}} className="transition-all h-full bg-pink rounded-full"></div>
            <div style={{width: page == 3 ? '102%' : '0%'}} className="transition-all ease-[cubic-bezier(.98,.02,1,.43)] h-[101%] bg-green rounded-full absolute top-0 -left-[2px] z-10"></div>
          </div>
        <div className='backdrop-blur-sm mt-[2rem] shadow-[0px_0px_15px_0px_hsla(0,0%,0%,0.51)] p-3 rounded-md'>
          <main className='flex space-x-6 w-[60rem] overflow-hidden'>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} className='w-1/2'>
              <video ref={videoRef} src={vid} autoPlay muted loop className='h-full rounded-md'></video>
            </div>
            <div className='w-full h-full '>
              {PageDisplay()}
                <footer style={{display: page == 3 ? 'none' : ''}} className='px-5 py-3 pt-5 rounded-b-lg flex space-x-4 absolute bottom-[0.4rem] right-0'>
                <button
                className='bg-lightPink h-[2.5rem] hover:shadow-md transition-all w-[10rem] text-white font-medium text-lg rounded-sm'
                style={{display : page == 3 ? 'none' : 'inline', background: page >= 1 ? 'hsl(330, 100%, 50%)' : ''}}
                disabled={page == 0}
                onClick={clickBack}>
                Get Back
                </button>
                <button 
                type='submit'
                className='bg-pink hover:shadow-md transition-all h-[2.5rem] w-[10rem] text-white font-medium text-lg rounded-sm'
                style={{display : page == 3 ? 'none' : 'inline', background: page == 2 ? 'green' : ''}} 
                disabled={page == 3} 
                onClick={clickGo}>
                {page == 2 ? 'SubMit' : 'GO ON'}
                </button>
            </footer>
            </div>
          </main>
        </div>
        <div className="flex items-center space-x-10 absolute bottom-5 w-full justify-center">
          <button onClick={() => imgSlider('btn0')} style={{opacity: currentIndex == 0 ? '100%' : '', width: currentIndex == 0 ? '2%' : '', borderRadius: currentIndex == 0 ? '10px' : ''}} className='bg-white opacity-30 h-[1rem] w-[1rem] rounded-[50%] transition-all'></button>
          <button onClick={() => imgSlider('btn1')} style={{opacity: currentIndex == 1 ? '100%' : '', width: currentIndex == 1 ? '2%' : '', borderRadius: currentIndex == 1 ? '10px' : ''}} className='bg-white opacity-30 h-[1rem] w-[1rem] rounded-[50%] transition-all'></button>
          <button onClick={() => imgSlider('btn2')} style={{opacity: currentIndex == 2 ? '100%' : '', width: currentIndex == 2 ? '2%' : '', borderRadius: currentIndex == 2 ? '10px' : ''}} className='bg-white opacity-30 h-[1rem] w-[1rem] rounded-[50%] transition-all'></button>
          <button onClick={() => imgSlider('btn3')} style={{opacity: currentIndex == 3 ? '100%' : '', width: currentIndex == 3 ? '2%' : '', borderRadius: currentIndex == 3 ? '10px' : ''}} className='bg-white opacity-30 h-[1rem] w-[1rem] rounded-[50%] transition-all'></button>
          <button onClick={() => imgSlider('btn4')} style={{opacity: currentIndex == 4 ? '100%' : '', width: currentIndex == 4 ? '2%' : '', borderRadius: currentIndex == 4 ? '10px' : ''}} className='bg-white opacity-30 h-[1rem] w-[1rem] rounded-[50%] transition-all'></button>
          <button onClick={() => imgSlider('btn5')} style={{opacity: currentIndex == 5 ? '100%' : '', width: currentIndex == 5 ? '2%' : '', borderRadius: currentIndex == 5 ? '10px' : ''}} className='bg-white opacity-30 h-[1rem] w-[1rem] rounded-[50%] transition-all'></button>
          <button onClick={() => imgSlider('btn6')} style={{opacity: currentIndex == 6 ? '100%' : '', width: currentIndex == 6 ? '2%' : '', borderRadius: currentIndex == 6 ? '10px' : ''}} className='bg-white opacity-30 h-[1rem] w-[1rem] rounded-[50%] transition-all'></button>
          <button onClick={() => imgSlider('btn7')} style={{opacity: currentIndex == 7 ? '100%' : '', width: currentIndex == 7 ? '2%' : '', borderRadius: currentIndex == 7 ? '10px' : ''}} className='bg-white opacity-30 h-[1rem] w-[1rem] rounded-[50%] transition-all'></button>
        </div>
      </div>      
    </div>
  )
}

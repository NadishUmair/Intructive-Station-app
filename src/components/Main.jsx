import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, delay, motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CottageIcon from "@mui/icons-material/Cottage";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import logo from "../../src/Images/logo-removebg-preview.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";


import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";

import imgOne from "../../src/Images/Patricia Denkler/Patricia Denkler.png";
import imgTwo from "../../src/Images/Rosemarie Mariner/Rosemarie Mariner.png";
import imgThree from "../../src/Images/Daisy Morgan/Daisy Morgan.png";
import imgFour from "../../src/Images/Gwen Hall/Gwen Hall.png";
import imgFive from "../../src/Images/Kathleen Owens/Kathleen Owens.png";
import videoOneIn from "../../src/Images/Patricia Denkler/Patricia Denkler in.mp4";
import videoOneOut from "../../src/Images/Patricia Denkler/Patricia Denkler out.mp4";
import videoTwoIn from "../../src/Images/Rosemarie Mariner/Rosemarie Mariner in.mp4";
import videoTwoOut from "../../src/Images/Rosemarie Mariner/Rosemarie Mariner out.mp4";
import videoThreeIn from "../../src/Images/Daisy Morgan/Daisy Morgan in.mp4";
import videoThreeOut from "../../src/Images/Daisy Morgan/Daisy Morgan out.mp4";
import viderFourIn from "../../src/Images/Gwen Hall/Gwen Hall in.mp4";
import viderFourOut from "../../src/Images/Gwen Hall/Gwen Hall out.mp4";
import videoFiveIn from "../../src/Images/Kathleen Owens/Kathleen Owens in.mp4";
import videoFiveOut from "../../src/Images/Kathleen Owens/Kathleen Owens out.mp4";
import "./Main.css";
import { FaHome } from "react-icons/fa";
import Slider from "react-slick";
console.log(logo)
function Main() {

  const fullscreenrequest=()=>{
    
   document.body.requestFullscreen();
  }
 
  const imageData = [
    { img: imgOne, videoIn: videoOneIn, videoOut: videoOneOut },
    { img: imgTwo, videoIn: videoTwoIn, videoOut: videoTwoOut },
    { img: imgThree, videoIn: videoThreeIn, videoOut: videoThreeOut },
    { img: imgFour, videoIn: viderFourIn, videoOut: viderFourOut },
    { img: imgFive, videoIn: videoFiveIn, videoOut: videoFiveOut }
  ];


  const [introVideoEnd, setIntroVideoEnd] = useState(true);
  const [secondVideo, setSecondVideo] = useState(false);
  const [ThirdVideo, setThirdVideo] = useState(false);
  const [fourVideo, setFourVideo] = useState(false);
  const [fiveVideo, setFiveVideo] = useState(false);
  const [sixVideo, setSixVideo] = useState(false);
  const [videoDynamic, setVideoDynamic] = useState(false);
  const [playBtn, setPlayBtn] = useState(false);
  const [introVideosplay, setIntroVideoplay] = useState(false);
  const [displayNone, setDisplayNone] = useState(false);
  const [displayNoneTwo, setDisplayNoneTwo] = useState(false);
  const [displayFourVideo, setDisplayFourVideo] = useState(false);
  const [checkIntroVideo, setcheckIntroVideo] = useState("");
  const [selectedData, setSelectedData] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userslist, setuserlist] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [SelectedVideo, setSelectedVideo] = useState("");
  const [currentVideoIndex, setcurrentVideoIndex] = useState(0);
  const selectedVideoRef = useRef(null);

  const videos = [
    "./INTRO.mp4",
    "./INTRO loop.mp4",
    "./menu bgvd.mp4",
    "./Transitions alpha.mp4",
  ];
const [inactive, setInactive] = useState(false);
useEffect(() => {
  let inactivityTimeout;
  const resetTimer = () => {
    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(handleInactive, 30000); 
  };
  const handleInactive = () => {
    setInactive(true);
    handleHomeclick();
  };
  const handleUserActivity = () => {
    if (inactive) {
      setInactive(false);
    }
    resetTimer();
  };
 



  window.addEventListener('mousemove', handleUserActivity);
  window.addEventListener('keydown', handleUserActivity);
  resetTimer();
  return () => {
    window.removeEventListener('mousemove', handleUserActivity);
    window.removeEventListener('keydown', handleUserActivity);
    clearTimeout(inactivityTimeout);
  };
}, [inactive]);
 const handlefirstVideoEnded=()=>{
 
  setIntroVideoEnd(false);
  setSecondVideo(true);
 }
 const handleSecondVideoClick=()=>{
  fullscreenrequest();
  setIntroVideoEnd(false);
  setSecondVideo(false);
  setThirdVideo(true);
 }
 const handlethirdvideoEnd=()=>{
  setThirdVideo(false);
  setFourVideo(true);
 }
const handleHomeclick=()=>{
  setFourVideo(false)
  setSelectedVideo("")
  setSecondVideo(true)
}
const handleHomeMenu=()=>{

  setFourVideo(false)
  setSelectedVideo(false);
  setThirdVideo(true)
   
  
}
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  }
  const handleImageClick = (index) => {
    setFourVideo(false)
    setSelectedVideo(imageData[index].videoIn);
    setCurrentIndex(index); 
  };

 

  const handleNext = () => {
    const nextIndex = (currentVideoIndex + 1) % imageData.length;
    setSelectedVideo(imageData[currentVideoIndex].videoIn);
    setcurrentVideoIndex(nextIndex);
  };
 
 

  
  console.log(currentVideoIndex);

  const handlePrevious= () => {

    const prevIndex = (currentVideoIndex + 1) % imageData.length;
      setSelectedVideo(imageData[currentVideoIndex].videoIn);
      setcurrentVideoIndex(prevIndex);
      

      
  };


    
    
  
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };
  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };


 
return(
  <>
  <div className="video-section">
  <div className="video-wrapper">
       
  <div className="main-video">
    <AnimatePresence className="animate">
     {introVideoEnd && (
      <motion.video
      className="video-area"
      key="introVideo"
          muted
          autoPlay
          onEnded={handlefirstVideoEnded}
          onClick={handleSecondVideoClick}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1  }}
          exit={{ opacity: 0 ,transition: { duration: 0.8 }}}>
               <source src={videos[0]} type="video/mp4" 
             
               
               />
      </motion.video>
     )}
     {secondVideo && (
        <motion.video
          key="loopVideo"
          className="video-area"
          muted
          autoPlay
          loop
          onClick={handleSecondVideoClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1,transition: { duration: 0.8 } }}
          exit={{ opacity: 0 }}

        >
          <source src={videos[1]} type="video/mp4" />
        </motion.video>
      )}

{ThirdVideo && (
        <motion.video
        className="video-area slow-motion"
        key="thirdVideo"
        muted
        autoPlay
        
        
        transition={{ duration: 2 }}
        style={{ animationPlayState: "paused" }}
        onEnded={handlethirdvideoEnd}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <source src={videos[3]} type="video/mp4" />
      </motion.video>
      ) }
      
        
{fourVideo && (
  
    <motion.video
    className="video-area "
      key="fourvideo"
      muted
      autoPlay
      loop
      transition={{ duration: 2 }}
     
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
    
     <source src={videos[2]} className="fourvideo-src" type="video/mp4" />
   
    </motion.video>

)}
 {SelectedVideo && (
                 <motion.video
                 ref={selectedVideoRef}
                 className="video-area"
                 key={`selectedVideo-${currentVideoIndex}`}
                   muted
                   autoPlay

                   transition={{ duration: 2 }}
                
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                 >
                 
                  <source src={SelectedVideo} type="video/mp4" />
                
                 </motion.video>
              )}
             

              
    </AnimatePresence>
   
  </div>

  { SelectedVideo && (
 <div className="overlay-content2">
 <div className="home-icon">
 <FaHome className="homeicon" onClick={handleHomeMenu} />
 </div>
      <div className="selected-buttons">
    <div className="buttons-container">
    <Button onClick={handlePrevious}><IoIosArrowBack  className="button-icon" /></Button>
    <Button onClick={handleNext}><IoIosArrowForward  className="button-icon" /></Button>
    </div>

      </div>
       </div>
      
  )

  }
  {fourVideo && (
        <div className="overlay-content">
          <div className="home-icon">
          <FaHome className="homeicon" onClick={handleHomeclick} />
          </div>
         <div className="logo-container">
                  <img src={logo} alt="" className="logo" />
                </div>
              <div className="swiper-section"> 
              {/* <Swiper
              touchMove={true}
             effect={'coverflow'}

        loop={'true'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={5}
       
        autoplay={
          {
            delay:300,
            disableOnInteraction: true,
            reverseDirection: false,
          }
        }
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
        onSlideChange={(swiper) => handleSlideChange(swiper)}
> 
  
{imageData.map((item, index) => (
        <SwiperSlide key={index} className={` ${index === activeIndex ? 'active' : ''}`}>
          <div className="img-container"
           onClick={() => handleImageClick(index)}
          >
            <img src={item.img} className="" alt={`Slide ${index + 1}`} />
          </div>
        </SwiperSlide>
      ))}


</Swiper> */}
   <Slider {...settings}>
        {imageData.map((item, idx) => (
          // className={idx === imageIndex ? "slide activeSlide" : "slide"}
          <div className="slide-sec" >
            <img src={item.img} alt={''} />
          </div>
        ))}
      </Slider>
 
  
</div>

        </div>
      )}
  </div>
  </div>
  </>
)
}

export default Main;
import React, { useState, useEffect, useRef } from "react";
import reward1 from '../assets/reward1.jpeg'; 
import reward1_1 from '../assets/reward1_1.jpeg';
import reward2_1 from '../assets/reward2_1.jpeg';
import reward2_2 from '../assets/reward2_2.jpeg'; 
import reward3_1 from '../assets/reward3_1.jpeg';
import reward3_2 from '../assets/reward3_2.jpeg';
import certificate1 from '../assets/certi_5g.png';
import certificate2 from '../assets/certificate2.png';
import rewardVideo from '../assets/reward1_vid.mp4'; 
import './RewardsRecognition.css';

// Array of reward data
const rewardData = [
  {
    title: "Economic Times Excellence Award for Empowering Leadership Excellence",
    images: [reward1, reward1_1],
    video: rewardVideo,
  },
  {
    title: "Entrepreneur of the Year Award by Entrepreneurship Council of India.",
    images: [reward2_1, reward2_2],
  },
  {
    title: "TOP100 Women Achievers",
    images: [reward3_1, reward3_2],
  },
  
  // Add more rewards and recognitions here
];

const RewardsRecognition = () => {
  return (
    <div>
      <br/>
      <h1 className="text-center text-4xl font-bold my-8">Honoring Achievements</h1>
      <div className="rewards-page">
        {rewardData.map((reward, index) => (
          <div key={index} className="reward-item">
            <ImageCarousel images={reward.images} video={reward.video} isFirstCard={index === 0} />
            <h3 className="font-bold">{reward.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
{/*
const ImageCarousel = ({ images, video, isFirstCard }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    let interval;
    if (!isVideoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [images.length, isVideoPlaying]);

  useEffect(() => {
    if (videoEnded) {
      setVideoEnded(false);
      setIsVideoPlaying(false);
      setCurrentIndex(0); // Reset to the first image after video ends
    }
  }, [videoEnded]);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  const handleImageLoad = () => {
    if (isFirstCard && !isVideoPlaying && currentIndex === images.length - 1) {
      setIsVideoPlaying(true); // Start video after last image for the first card
    }
  };

  return (
    <div className="carousel-container2">
      {isVideoPlaying && isFirstCard ? (
        <video
          ref={videoRef}
          src={video}
          autoPlay
         
          muted
          onEnded={handleVideoEnd}
          className="carousel-video"
        />
      ) : (
        <img
          src={images[currentIndex]}
          alt={`Reward ${currentIndex}`}
          className="carousel-image"
          onLoad={handleImageLoad}
        />
      )}
    </div>
  );
};
*/}
const ImageCarousel = ({ images, video, isFirstCard }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    let interval;
    if (!isVideoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000); 
    }
    return () => clearInterval(interval);
  }, [images.length, isVideoPlaying]);

  useEffect(() => {
    if (videoEnded) {
      setVideoEnded(false);
      setIsVideoPlaying(false);
      setCurrentIndex(0); 
    }
  }, [videoEnded]);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  const handleImageLoad = () => {
    if (isFirstCard && !isVideoPlaying && currentIndex === images.length - 1) {
      setIsVideoPlaying(true); 
    }
  };

  return (
    <div className="carousel-container2">
      {isVideoPlaying && isFirstCard ? (
        <video
          ref={videoRef}
          src={video}
          autoPlay
          muted
          onEnded={handleVideoEnd}
          className="carousel-video"
        />
      ) : (
        <img
          src={images[currentIndex]}
          alt={`Reward ${currentIndex}`}
          className="carousel-image"
          onLoad={handleImageLoad}
        />
      )}
    </div>
  );
};


export default RewardsRecognition;

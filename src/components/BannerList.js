import {useEffect, useRef, useState} from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const BannerList = ({listOfBanner}) => {
  const bannerRef = useRef(null);
  const [scrollVal, setScrollVal] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        setScrollVal(bannerRef.current.scrollLeft);
      }
    };
    if (bannerRef.current) {
      bannerRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (bannerRef.current) {
        bannerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  
  const handleBannerScroll = (step) => {
    if(bannerRef.current) {
      bannerRef.current.scrollLeft += step;
    }
  };

    return (
        <div className="w-full mx-auto">
            <div className="relative">
              <div className="lg:mx-3 lg:p-3 sm:mx-2 sm:p-2 mx-1 p-1">
                <div className="flex justify-start mb-3 pl-3">
                  <div className="md:text-2xl text-lg font-bold">What's on your mind?</div>
                </div>
                <div className="absolute top-0 flex gap-2 right-8">
                  <button onClick={() => handleBannerScroll(-400)} 
                          disabled={scrollVal===0}
                          className={`${scrollVal===0 ? "text-slate-400" : "text-black"} flex justify-center items-center 
                          cursor-pointer rounded-full w-6 h-6 p-1 bg-slate-200 hover:bg-slate-300`}>
                          
                        <GoArrowLeft />
                  </button>
                  <button onClick={() => handleBannerScroll(400)} 
                          className="text-black flex justify-center items-center cursor-pointer rounded-full w-6 h-6 p-1 
                          bg-slate-200 hover:bg-slate-300">
                        <GoArrowRight />
                  </button>
                </div>
                <div className="flex overflow-x-auto scroll-smooth no-scrollbar" ref={bannerRef}>
                  <div className="flex items-center" >
                    {listOfBanner?.map((banner) => (
                      <div className="md:pr-5 md:w-36 sm:pr-4 sm:w-28 pr-2 w-20 hover:scale-95 transition ease-in-out rounded-lg" 
                           key={banner?.id}>
                        <img className="w-full cursor-pointer"
                             src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${banner?.imageId}`}
                             alt={banner?.accessibility?.altText}         
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
};

export default BannerList;
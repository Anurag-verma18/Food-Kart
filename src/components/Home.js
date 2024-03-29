import { Link } from "react-router-dom";
import Testimonials from "./Testimonials";
import { foodkartPro, gridImages, heroImage } from "../utils/constants";

const Home = () => {
  return (
    <div className="max-w-fit overflow-hidden m-0 p-0 bg-rose-50 ">
      <section className="w-full overflow-hidden flex flex-col items-center md:flex md:flex-row justify-between py-16 mx-0">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start pt-8 px-8 mx-6 font-sans">
          <h1 className="w-4/5 mb-4 md:mb-8 text-center md:text-left text-3xl md:text-5xl font-bold">
            Delicious dishes, delivered with ease
          </h1>
          <p className="w-4/5 md:w-3/4 mb-4 md:mb-7 text-lg text-slate-800">
            Indulge in a world of culinary delights with our online food
            delivery platform. Explore a diverse array of cuisines, from local
            favorites to global specialties, all conveniently delivered to your
            doorstep with just a few taps.
          </p>
          <Link to="/restaurants">
            <button className="bg-orange-500 hover:bg-orange-400 py-2 px-3 rounded-md">
              Explore Food
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 pt-6 px-8 mx-6 flex justify-center ">
          <img
            className="w-auto"
            src={heroImage}
            alt="food delivery"
          />
        </div>
      </section>
      <div className="w-full h-auto md:h-20 bg-blue-200">
        <div className="w-[100%] md:flex md:flex-row md:justify-evenly items-center flex flex-col justify-between">
          <img
            className="h-20 py-4 md:py-0"
            src="https://res.cloudinary.com/dencbmqyy/image/upload/v1708831730/phone_smjpqb.png"
            alt="scanner"
          />
          <div className="p-0 m-0 h-20 flex flex-col justify-center">
            <h1 className="font-sans text-center text-base md:text-xl font-semibold">
              Get the full FoodKart experience
            </h1>
            <p className="text-sm font-serif">
              Scan the QR code with your camera. First delivery is free
            </p>
          </div>
          <img
            className="h-20 py-4 md:py-0 rounded-md"
            src="https://res.cloudinary.com/dencbmqyy/image/upload/v1708833424/qr_code_x88gf9.png"
            alt="qr code"
          />
        </div>
      </div>
      <div>
        <div className="w-full h-full bg-black">
          
          <div className="flex flex-col justify-evenly items-center md:flex md:flex-row md:justify-between py-8 md:py-16 ">
            <div className="w-full md:w-1/2 md:px-16 px-8 items-center justify-center mb-4 md:mb-0">
              <img
                className=""
                src={foodkartPro}
                alt="foodkart pro"
              />
            </div>
            <div className="w-full md:w-1/2 md:px-16 flex flex-col justify-center items-center">
              <h1 className="w-3/4 font-sans font-bold text-2xl md:text-5xl text-center md:text-left text-white mb-4 md:mb-8 pl-2 md:pl-0">
                FoodKart Pro is <br />delivery for less
              </h1>
              <p className="w-4/5 md:w-3/4 pl-2 md:pl-0 text-base text-white">
                Members get a ₹0 delivery fee on FoodKart Pro orders, 5% back on
                pickup orders, lower service fess, and so much more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-10 md:h-20 relative bg-white"></div>
      <section>
        <div className="w-full h-full relative bg-yellow-300">
         
          <div className="flex flex-col md:flex md:flex-row justify-center items-center">
            <div className="w-full md:w-1/2 px-4 md:px-0 mx-5 md:mx-10 my-5 md:my-20 grid grid-cols-3 gap-3">
              <div className="grid gap-2">
                <div>
                  <img
                    className="h-auto max-w-full"
                    src={gridImages[0]}
                    alt="food one"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full"
                    src={gridImages[1]}
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full"
                    src={gridImages[2]}
                  />
                </div>
            
              </div>

              <div className="grid gap-2">
                <div>
                  <img
                    className="h-auto max-w-full"
                    src={gridImages[3]}
                    alt="food one"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full"
                    src={gridImages[5]}
                  />
                </div>
                
                <div>
                  <img
                    className="h-auto max-w-full"
                    src={gridImages[7]}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <div>
                  <img
                    className="h-auto max-w-full"
                    src={gridImages[8]}
                    alt="food one"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full"
                    src={gridImages[9]}
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full"
                    src={gridImages[10]}
                  />
                </div>
                
              </div>
            </div>
            <div className="w-full md:w-1/2 h-full flex flex-col justify-between md:justify-around mb-5 md:mb-20 md:mt-20 px-5 md:px-10">
              <h1 className="font-sans font-bold text-center text-3xl md:text-4xl text-black mb-5 md:mb-10">
                Taste the world, <br /> one tap at a time
              </h1>
              <Testimonials />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-10 md:h-20 relative bg-white"></div>
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";
import Testimonials from "./Testimonials";
import { foodkartPro, gridImages, heroImage, secondBackgroundImage, } from "../utils/constants";

const Home = () => {
  return (
    <div className="m-0 p-0 bg-rose-50">
      <div className="w-full h-full flex justify-between py-16">
        <div className="w-1/2 pt-16 pl-8 ml-6 font-sans">
          <h1 className="w-3/4 mb-8 text-5xl font-bold">
            Delicious dishes, delivered with ease
          </h1>
          <p className="w-3/4 mb-7 text-lg text-slate-800">
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
        <div className="w-1/2 pt-6 pr-8 mr-6 flex justify-center">
          <img
            className="w-auto"
            src={heroImage}
            alt="food delivery"
          />
        </div>
      </div>
      <div className="w-full h-20 bg-blue-200">
        <div className="w-[100%] flex justify-evenly items-center">
          <img
            className="h-20"
            src="https://res.cloudinary.com/dencbmqyy/image/upload/v1708831730/phone_smjpqb.png"
            alt="scanner"
          />
          <div className="p-0 m-0">
            <h1 className="font-sans text-xl font-semibold">
              Get the full FoodKart experience
            </h1>
            <p className="text-sm font-serif">
              Scan the QR code with your camera. First delivery is free
            </p>
          </div>
          <img
            className="h-20 rounded-md"
            src="https://res.cloudinary.com/dencbmqyy/image/upload/v1708833424/qr_code_x88gf9.png"
            alt="qr code"
          />
        </div>
      </div>
      <div>
        <div className="w-full h-full bg-black">
          
          <div className="flex justify-between py-16">
            <div className="w-1/2 px-16 flex items-center justify-center">
              <img
                className=""
                src={foodkartPro}
                alt="foodkart pro"
              />
            </div>
            <div className="w-1/2 px-16 flex flex-col justify-center">
              <h1 className="w-3/4 font-sans font-bold text-5xl text-white mb-8">
                FoodKart Pro is delivery for less
              </h1>
              <p className="w-3/4 text-md text-white">
                Members get a ₹0 delivery fee on FoodKart Pro orders, 5% back on
                pickup orders, lower service fess, and so much more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-20 relative bg-white"></div>
      <section>
        <div className="w-full h-full relative bg-yellow-300">
         
          <div className="flex justify-center">
            <div className=" w-1/2 mx-10 my-20 grid grid-cols-3 gap-3">
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
            <div className="w-1/2 flex flex-col justify-around my-20 px-10">
              <h1 className="font-sans font-bold text-4xl text-black">
                Taste the world, <br /> one tap at a time
              </h1>
              <Testimonials />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-20 relative bg-white"></div>
    </div>
  );
};

export default Home;

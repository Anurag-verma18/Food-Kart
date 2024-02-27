import { Link } from "react-router-dom";
import Testimonials from "./Testimonials";
import { firstBackgroundImage, foodkartPro, gridImages, heroImages, secondBackgroundImage, } from "../utils/constants";

const Home = () => {
  return (
    <div className="m-0 p-0 bg-rose-50">
      <div className="w-full h-screen flex pt-28">
        <div className="w-1/2 pt-10 px-8 mx-6 font-sans">
          <h1 className="mb-8 text-5xl font-bold">
            Delicious dishes, delivered with ease
          </h1>
          <p className="mb-7 text-lg text-slate-800">
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
        <div className="w-1/2 px-8 mx-6 flex flex-col">
          <img
            className="w-[55%] relative left-8"
            src={heroImages[0]}
            alt="food delivery"
          />
          <img
            className="w-[55%] relative left-32 -mt-11"
            src={heroImages[1]}
            alt="food delivery"
          />
          <img
            className="w-[55%] relative left-56 -mt-11"
            src={heroImages[2]}
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
        <div className="w-full h-screen relative top-0">
          <img
            src={firstBackgroundImage}
            alt="First background image"
          />
          <div className="flex">
            <div className="w-2/5 absolute top-44 left-32 z-20">
              <img
                className=""
                src={foodkartPro}
                alt="foodkart pro"
              />
            </div>
            <div className="w-[30%] mr-24 absolute top-56 right-28 z-20">
              <h1 className="font-sans font-bold text-5xl text-white mb-8">
                FoodKart Pro is delivery for less
              </h1>
              <p className="text-md text-white">
                Members get a ₹0 delivery fee on FoodKart Pro orders, 5% back on
                pickup orders, lower service fess, and so much more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-20 relative bg-white"></div>
      <section>
        <div className="w-full h-screen relative top-0">
          <img
            src={secondBackgroundImage}
            alt="second background image"
          />
          <div className="flex justify-between absolute top-24 z-20">
            <div className=" w-2/5 h-[70%] ml-10 mr-10 grid grid-cols-3 gap-3">
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
                <div>
                  <img
                    className="h-auto max-w-full"
                    src={gridImages[3]}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <div>
                  <img
                    className="h-auto max-w-full"
                    src={gridImages[4]}
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
                    src={gridImages[6]}
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
                <div>
                  <img
                    className="h-auto max-w-full"
                    src={gridImages[11]}
                  />
                </div>
              </div>
            </div>
            <Testimonials />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

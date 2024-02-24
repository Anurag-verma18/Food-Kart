import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="m-0 p-0 bg-rose-50">
          <div className="w-full h-screen flex pt-20">
              <div className="w-1/2 px-8 mx-6 font-sans">
                  <h1 className="mb-8 text-5xl font-bold">
                    Delicious dishes, delivered with ease
                  </h1>
                  <p className="mb-7 text-lg text-slate-800">Indulge in a world of culinary delights with our online food delivery platform. Explore a diverse array of cuisines, from local favorites to global specialties, all conveniently delivered to your doorstep with just a few taps.</p>
                  <Link to="/restaurants">
                      <button className="bg-orange-400 py-2 px-3 rounded-md">
                        Explore Food
                      </button>
                  </Link>
              </div>
              <div className="w-1/2 px-8 mx-6 flex flex-col">
                  <img className="w-[55%]" 
                       src="https://res.cloudinary.com/dencbmqyy/image/upload/v1708762736/food-images/dzlpdcn7c92elelhfx4q.jpg" 
                       alt="food delivery"
                  />
                  <img className="w-[55%] relative left-24 -mt-11" 
                       src="https://res.cloudinary.com/dencbmqyy/image/upload/v1708796064/food_delivery_uc5mej.jpg" 
                       alt="food delivery"
                  />
                  <img className="w-[55%] relative left-48 -mt-11" 
                       src="https://res.cloudinary.com/dencbmqyy/image/upload/v1708762010/food-images/zbs5cnhoyyogqv0ybox0.jpg" 
                       alt="food delivery"
                  />
              </div>
          </div>
          <div className="w-full h-20 bg-white">

          </div>
          <div>
            <div className="w-full">
                <img src="https://res.cloudinary.com/dencbmqyy/image/upload/v1708761648/food-background/fevjdkgfe00xmqrakg7a.jpg" 
                     alt="First background image"
                />
            </div>
          </div>
          <div className="w-full h-20 bg-white">

          </div>
          <div>
            <div className="w-full">
                <img src="https://res.cloudinary.com/dencbmqyy/image/upload/v1708761860/food-background/n6fuhdruaainrwwyhwri.jpg" 
                     alt="second background image"
                />
            </div>
          </div>
          <div className="w-full h-20 bg-white">

          </div>
        </div>
    );
};

export default Home;
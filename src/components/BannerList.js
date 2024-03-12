

const BannerList = ({listOfBanner}) => {
    return (
        <div className="w-full mx-auto">
            <div className="relative">
              <div className="mx-3 p-3">
                <div className="flex justify-start mb-3 pl-3">
                  <div className="text-lg font-semibold tracking-wide">What's on your mind?</div>
                </div>
                <div className="banner-list flex overflow-x-scroll no-scrollbar">
                  <div className="flex items-center">
                    {listOfBanner?.map((banner) => (
                      <div className="pr-5 w-36 hover:scale-95 transition ease-in-out rounded-lg" 
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
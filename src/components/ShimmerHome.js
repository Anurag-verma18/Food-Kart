const ShimmerHome = () => {
  return (
    <section className="shimmer-container flex flex-col justify-normal mx-auto max-w-[1110px]">
      <div className="mt-28 w-full">
        <div className="flex flex-col justify-normal p-4 mb-10">
          <div className="mb-4 w-[200px] h-6 bg-gray-300 animate-pulse rounded-xl"></div>
          <div className="hidden sm:flex justify-evenly items-center gap-x-1 mx-auto">
              {Array.from({length: 7}).map((_, index) => {
                return <div className="m-2 md:w-24 md:h-24 sm:w-20 sm:h-20 rounded-full bg-gray-300 animate-pulse"></div>
              })}
          </div>
          <div className="flex sm:hidden justify-evenly items-center gap-x-1 mx-auto">
              {Array.from({length: 4}).map((_, index) => {
                return <div className="m-2 w-14 h-14 rounded-full bg-gray-300 animate-pulse"></div>
              })}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="ml-4 mb-3 md:w-48 sm:w-44 w-40 h-6 bg-gray-300 animate-pulse rounded-xl"></div>
        <div className="flex justify-between items-center">
          {Array.from({length: 4}).map((_, index) => {
                return (
                  <div className="p-4 md:w-72 w-[364px]">
                    <div className="h-full overflow-hidden">
                      <div className="w-full md:h-40 h-48 relative">
                        <div className="w-full h-full object-cover bg-gray-300 animate-pulse rounded-xl"></div>
                      </div>
                      <div className="p-3">
                        <div className="w-3/5 md:h-3 sm:h-4 h-5 mb-2 bg-gray-300 animate-pulse md:rounded-md rounded-lg"></div>
                        <div className="w-2/5 md:h-3 sm:h-4 h-5 mb-4 bg-gray-300 animate-pulse md:rounded-md rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                )
          })}
        </div>
        <div className="flex justify-between items-center">
          {Array.from({length: 4}).map((_, index) => {
                return (
                  <div className="p-4 md:w-72 w-[364px]">
                    <div className="h-full overflow-hidden">
                      <div className="w-full md:h-40 h-48 relative">
                        <div className="w-full h-full object-cover bg-gray-300 animate-pulse rounded-xl"></div>
                      </div>
                      <div className="p-3">
                        <div className="w-3/5 md:h-3 sm:h-4 h-5 mb-2 bg-gray-300 animate-pulse md:rounded-md rounded-lg"></div>
                        <div className="w-2/5 md:h-3 sm:h-4 h-5 mb-4 bg-gray-300 animate-pulse md:rounded-md rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                )
          })}
        </div>
      </div>
    </section>
  );
};

export default ShimmerHome;

const ShimmerMenu = () => {
  return (
    <div className="mx-auto w-[360px] sm:w-[640px] mt-24">
      <div className="flex items-start justify-between mx-4 pt-4">
        <div className="w-1/3">
          <div className="w-3/5 h-3 mb-1 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="w-4/5 h-3 mb-1 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="w-2/5 h-3 bg-gray-300 animate-pulse rounded-md"></div>
        </div>
        <div className="flex items-start">
          <div className="w-20 h-16 p-2 bg-gray-300 animate-pulse rounded-md"></div>
        </div>
      </div>

      <hr className="border-dashed border-b-slate-400 mt-8 mb-4"/>

      <ul className="mt-20">
          {Array.from({length: 6}).map((_, index) => {
                return (
                  <li className="flex justify-between items-center mx-4 mb-12">
                    <div className="mb-2 w-1/2 flex flex-col items-start">
                      <div className="w-1/2 h-3 mb-1 bg-gray-300 animate-pulse rounded-md"></div>
                      <div className="w-1/3 h-3 mb-2 bg-gray-300 animate-pulse rounded-md"></div>
                      <div className="w-full h-3 bg-gray-300 animate-pulse rounded-md"></div>
                    </div>
                    <div className=" w-1/4 sm:w-1/5 p-2">
                      <div className="w-full h-16 sm:h-24 bg-gray-300 animate-pulse rounded-lg"></div>
                    </div>
                  </li>
                )
          })}
      </ul>
    </div>
  );
};

export default ShimmerMenu;

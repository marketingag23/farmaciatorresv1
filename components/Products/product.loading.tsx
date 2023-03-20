"use client";

const LoadingProducts = () => {
  return (
    <div className="group relative">
      <div className=" min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden border-[#D9D9D9] border-2 rounded-lg text-center">
        <div className="rounded-t-lg w-full h-60 bg-gray-200 rounded animate-pulse"></div>
        <div className="py-5 px-6 absolute top-4 rounded-r-lg bg-gray-300 animate-pulse"></div>
        <div className="py-5 px-7  absolute top-4 left-16 rounded-lg flex bg-gray-300 animate-pulse"></div>
        <hr className="w-full h-0.5 mx-auto bg-[#D9D9D9] border-0 " />
        <div className="mx-4 mb-3 text-center">
          <div className="w-3/6 h-4 bg-gray-200 rounded animate-pulse mb-4 my-3"></div>
          <div className="block h-10 mb-3">
            <div className="w-10/12 h-4 bg-gray-200 rounded animate-pulse  my-2"></div>
            <div className="w-9/12 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="w-3/6 h-4 bg-gray-200 rounded animate-pulse mb-4 my-3"></div>
          <div className="w-9/12 h-7 bg-gray-200 rounded animate-pulse mb-4 my-3"></div>
          <div className="w-11/12 h-9 bg-gray-200 rounded animate-pulse mb-4 my-3"></div>
        </div>
      </div>
    </div>
  );
};
export default LoadingProducts;

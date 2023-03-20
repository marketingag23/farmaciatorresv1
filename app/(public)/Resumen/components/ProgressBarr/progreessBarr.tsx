import React from "react";

export default function ProgreessBarr() {
  return (
    <div className="h-full w-full py-8">
      <div className="container mx-auto">
        <div className="w-full mx-auto">
          <div className="bg-gray-200 h-1 flex items-center justify-between">
            <div className="w-1/3 bg-bluet h-1 flex items-center">
              <div className="bg-bluet h-6 w-6 rounded-full shadow flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-check"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#FFFFFF"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
            <div className="w-1/3 flex justify-between h-1 items-center relative">
              <div className="bg-white h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2">
                <div className="h-3 w-3 bg-bluet rounded-full"></div>
              </div>
              <div className="bg-white h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative"></div>
            </div>
            <div className="w-1/3 flex justify-end">
              <div className="bg-white h-6 w-6 rounded-full shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

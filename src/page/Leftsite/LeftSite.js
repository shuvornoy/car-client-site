import React from 'react';
import Progess from '../Progess/Progess';
import { FaRegClipboard, FaWrench, FaRegSun } from "react-icons/fa";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { MdOutlineColorLens } from "react-icons/md";

const LeftSite = () => {
    return (
      <div className="border-r-2 sm:d-none">
        <div className="flex justify-start md:justify-between px-6 border-b-2 py-4">
          <div className="flex justify-start font-bold">
            <span className="mt-1 mr-1">
              <FaRegClipboard />
            </span>
            Basic information
          </div>
          <div className="font-bold">+</div>
        </div>
        <div className="flex justify-start md:justify-between px-6 py-4">
          <div className="flex justify-start text-center font-bold">
            <span className="mt-1 mr-1">
              <AiOutlineDollarCircle />
            </span>
            Car cost
          </div>
          <div className="font-bold">-</div>
        </div>
        <div className="flex justify-start md:justify-between px-6  py-4">
          <div className="bg-base-100 shadow-xl p-4 rounded">
            <div>Price From</div>
            <div className="font-bold">$ 21 000</div>
          </div>
          <div className="bg-base-100 shadow-xl p-4 rounded">
            <div>Price Up to</div>
            <div className="font-bold">$ 34 000</div>
          </div>
        </div>
        <div className="px-6">
          <span className="mt-1 mr-1">
            <Progess />
          </span>
        </div>
        <div className="flex justify-start md:justify-between px-6 border-t-2 py-4">
          <div className="flex justify-start text-center font-bold">
            <span className="mt-1 mr-1">
              <GrLocation />
            </span>
            Search region
          </div>
          <div className="font-bold">+</div>
        </div>
        <div className="flex justify-start md:justify-between px-6 border-t-2 py-4">
          <div className="flex justify-start text-center font-bold">
            <span className="mt-1 mr-1">
              <FaWrench />
            </span>
            Vehicle condition
          </div>
          <div className="font-bold">+</div>
        </div>
        <div className="flex justify-start md:justify-between px-6 border-t-2 py-4">
          <div className="flex justify-start text-center font-bold">
            <span className="mt-1 mr-1">
              <FaRegSun />
            </span>
            Add characteristics
          </div>
          <div className="font-bold">+</div>
        </div>
        <div className="flex justify-start md:justify-between px-6 border-t-2 py-4">
          <div className="flex justify-start text-center font-bold">
            <span className="mt-1 mr-1">
              <MdOutlineColorLens />
            </span>
            Color
          </div>
          <div className="font-bold">+</div>
        </div>
        <div className=" px-6 border-y-2 py-4">
          <div>Found cars: 12 324</div>
          <div className="flex justify-start md:justify-between mt-3">
            <button
              className="px-12  text-white"
              style={{ backgroundColor: "#f87171" }}
            >
              Show
            </button>
            <div>
              <button
                className="px-3 text-red-500"
                style={{ backgroundColor: "#fecaca" }}
              >
                x
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LeftSite;
import React from "react";
import CountUp from "react-countup";
import doc from '../../assets/success-doctor.png'
import rev from '../../assets/success-review.png'
import pat from '../../assets/success-patients.png'
import sta from '../../assets/success-staffs.png'

const Counter = () => {
  return (
    <>
      <div className="bg-white border-1 rounded-2xl px-12 py-10">
        <img src={doc} alt="" />
        <div className="text-5xl font-extrabold my-4">
          <CountUp end={199} duration={10} />+
        </div>
        <p className="text-[#0F0F0F]/60 text-2xl font-semibold">
          Total Lawyers
        </p>
      </div>

      <div className="bg-white border-1 rounded-2xl px-12 py-10">
      <img src={rev} alt="" />
        <div className="text-5xl font-extrabold my-4">
          <CountUp end={467} duration={10} />+
        </div>
        <p className="text-[#0F0F0F]/60 text-2xl font-semibold">
          Total Reviews
        </p>
      </div>

      <div className="bg-white border-1 rounded-2xl px-12 py-10">
      <img src={pat} alt="" />
        <div className="text-5xl font-extrabold my-4">
          <CountUp end={1900} duration={10} />+
        </div>
        <p className="text-[#0F0F0F]/60 text-2xl font-semibold">
        Cases Initiated
        </p>
      </div>

      <div className="bg-white rounded-2xl border-1 px-12 py-10">
      <img src={sta} alt="" />
        <div className="text-5xl font-extrabold my-4">
          <CountUp end={300} duration={10} />+
        </div>
        <p className="text-[#0F0F0F]/60 text-2xl font-semibold">
          Total Stuffs
        </p>
      </div>
    </>
  );
};

export default Counter;

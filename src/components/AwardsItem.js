import React from "react";

function AwardsItem({ award }) {
  const { image_url,title, created_at } = award;

  if (!award) return null;
  return (
    <div className="flex flex-col items-start mb-4 ">
      <div className="flex justify-center items-start">
        <img
          src={image_url}
          alt="name_of_school"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div className=" flex flex-col items-start ">
          <h2 className="text-lg font-bold mb-1 capitalize">
            {title}
          </h2>
          {/* <p className="text-sm text-textPrimary capitalize">
            {edu?.qualification}
          </p> */}
          {/* <div className="flex justify-center items-center">
            <p className="text-sm text-textPrimary mr-3">{edu?.start_date}</p>
            <p className="text-sm text-textPrimary">{edu?.end_date}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AwardsItem;

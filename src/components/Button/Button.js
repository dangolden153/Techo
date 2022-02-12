import React from "react";

const BtnComponent = ({type, rounded, onClick, children, sm, loading }) => {
  return (
    // <button
    //   onClick={onClick}
    //   className={`${rounded && "rounded-full"} ${sm && "text-sm"} ease-in-out duration-300 px-8 py-2 text-white font-semibold bg-googleBlue hover:bg-darkGoogleBlue `}
    // >
    //   {children}
    // </button>

    <button
      className="cursor-pointer md:text-2xl uppercase flex items-center justify-center  sm:p-3 w-full xs:p-2 xs:text-sm rounded-md bg-primaryColor hover:bg-darkPrimaryColor text-white mt-6 mb-4"
      type={type}
    >
      {loading ? (
        <div className="animate-spin border-2 border-dotted my-1 border-white w-7 h-7 rounded-full" />
      ) : (
        <p>{children}</p>
      )}
    </button>
  );
};

export default BtnComponent;

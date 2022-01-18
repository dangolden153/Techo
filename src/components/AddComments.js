import React from "react";
import userPics from "../assets/image/intro.png";

function AddComments() {
  return (
    <div className="flex items-center justify-between my-3">
      <img
        src={userPics}
        alt="profile pics"
        className="w-10 h-10 rounded-full"
      />
      <input
        type="text"
        placeholder="Add a comment"
        className="m-3  p-3 my-2 rounded-md   w-8/12 outline-none bg-lightGray text-textSecondary font-semibold text-lg"
        // value={password2}
        // onChange={(e) => setPassword2(e.target.value)}
      />
      <button className=" text-white font-semibold text-sm text-center p-2 px-7 rounded-full bg-primaryColor">
        Add Comment
      </button>
    </div>
  );
}

export default AddComments;

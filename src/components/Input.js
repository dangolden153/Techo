import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import appContext from "../context/app-context";
import { useField,ErrorMessage } from "formik";

function InputField({ placeholder, type,  ...props }) {
  const [field, meta] = useField(props)
    const { switchTab} = useContext(appContext);

  return (
    <div className=" my-2"> 
      <TextField
        id="outlined-basic"
        type={type}
        {...field}
        {...props}
        error={meta.touched && meta.error}
        // placeholder=
        // name={name}
        // className="  p-3 my-2 rounded-md w-full outline-none border border-lightBlack"
        // onChange={handleChange}
        placeholder={placeholder}
        variant="outlined"
        className={`capitalize p-3 rounded-md w-full outline-none border border-lightBlack`}
      />
      <ErrorMessage 
      component="p"
      name={field.name}
      className="text-red text-sm"
      />
    </div>
  );
}

export default InputField;

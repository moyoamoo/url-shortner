import { useState } from "react";
import GenerateURL from "./GenerateURL";
import Longurl from "./Longurl";
import { createUrl } from "../createURL";
import isURL from "validator/lib/isURL";
import { useDispatch } from "react-redux";
import { setValidation } from "../urlSlice";

const Form = () => {
  const [longURL, setLongUrl] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <form
        onInput={(e) => {
          setLongUrl(e.target.value);
          console.log(longURL);
          dispatch(setValidation(""));
        }}
        onSubmit={(e) => {
          e.preventDefault();
          if (!longURL.length) {
            dispatch(setValidation("Please enter a URL"));

            return;
          }
          if (isURL(longURL) === false) {
            console.log("i ran")
            dispatch(setValidation("Not a valid URL"));
          } else {
            createUrl(longURL);
          }
        }}
      >
        <Longurl />
        <GenerateURL />
      </form>
    </>
  );
};

export default Form;

import { FaLink } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { selectValidation } from "../urlSlice";

const Longurl = () => {
  const validation = useSelector(selectValidation);
  console.log(validation)
  return (
    <>
      <div>
        <div className="label-container">
          <FaLink />
          <label htmlFor="">Enter Long URL</label>
        </div>
        <input type="text" placeholder="Long URL" />
        {validation && <p>{validation}</p>}
      </div>
    </>
  );
};

export default Longurl;

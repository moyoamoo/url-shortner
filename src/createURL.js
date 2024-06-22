import axios from "axios";
import { store } from "./store";
import { setShortUrl } from "./urlSlice";

//loop over each character

//add the char unicide value to hash

//left shit the hash by 6 and 16 bits

//subtract the original has value
const sdbm = (string) => {
  let array = string.split("");
  let value = array.reduce(
    (hashCode, currentValue) =>
      (hashCode =
        currentValue.charCodeAt(0) +
        (hashCode << 6) +
        (hashCode << 16) -
        hashCode),
    0
  );
  return Math.abs(value);
};

export const createUrl = async (longUrl) => {
  const key = sdbm(longUrl);
  console.log(key);
  const shortUrl = "http://localhost:6001/" + String(key);
  try {
    const { data } = await axios.post(`http://localhost:6001/add`, {
      longUrl,
      shortUrl,
      key,
    });
    store.dispatch(setShortUrl(data.shortUrl));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

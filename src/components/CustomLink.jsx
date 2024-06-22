import { useSelector } from "react-redux";
import { selectShortUrl } from "../urlSlice";

const CustomLink = () => {
  const shortUrl = useSelector(selectShortUrl);

  return <>{shortUrl && <p>{shortUrl}/</p>}</>;
};

export default CustomLink;

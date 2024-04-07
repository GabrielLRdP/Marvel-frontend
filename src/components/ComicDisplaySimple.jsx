import axios from "axios";
import { useState } from "react";

const ComicDisplaySimple = ({ id, title }) => {
  const [path, setPath] = useState();
  const fetchData = async () => {
    const response = await axios.get(
      `https://site--marvel--n5fkvp4ymxn4.code.run/comic/${id}`
    );
    // console.log(response.data);
    setPath(
      `${response.data.thumbnail.path}/standard_fantastic.${response.data.thumbnail.extension}`
    );
  };

  fetchData();

  return (
    <div className="comic-character-page">
      <h3>{title}</h3>
      <img src={path} alt="" />
    </div>
  );
};

export default ComicDisplaySimple;

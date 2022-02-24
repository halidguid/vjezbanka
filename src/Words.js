/*eslint-disable*/

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Words() {
  const [words, setWords] = useState([]);
  const [singleWord, setSingleWord] = useState("");

  useEffect(async () => {
    // axios
    //   .get("https://random-word-api.herokuapp.com/word?number=10")
    //   .then((resp) => {
    //     setWords(resp.data);
    //   })
    //   .catch((err) => console.log(err));

    let response = await axios.get(
      "https://random-word-api.herokuapp.com/word?number=10"
    );

    setWords(response.data);
    setSingleWord(response.data[6]);
  }, []);

  return (
    <div className="words">
      {words.map((value, index) => {
        return <p key={index}>{value}</p>;
      })}
      <p style={{ fontWeight: "bolder" }}>{singleWord}</p>
    </div>
  );
}

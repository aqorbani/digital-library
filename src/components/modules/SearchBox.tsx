import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBox = ({ text, setText }: { text: string; setText: Function }) => {
  const [preText, setPreText] = useState("");

  //delay for user has enough time for typing and after search function start
  useEffect(() => {
    const delayonChange = setTimeout(() => {
      setText(preText);
    }, 1500);

    return () => clearTimeout(delayonChange);
  }, [preText]);

  return (
    <div className="flex items-center bg-green-100  text-gray-400 p-2 my-2 rounded outline-transparent">
      <IoSearch className="mr-1 ml-3 text-[2.5vw] md:text-[1.2vw]" />
      <input
        type="text"
        placeholder="برای جستجو چیزی وارد کنید..."
        value={preText}
        onChange={(e) => setPreText(e.target.value)}
        className="text-[2vw] md:text-[0.8vw] p-2 w-full md:w-56 bg-white  text-gray-400"
      />
    </div>
  );
};

export default SearchBox;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBox = ({ setData }: { setData: Function }) => {
  const [text, setText] = useState("");

  //delay for user has enough time for typing and after search function start
  useEffect(() => {
    const delayonChange = setTimeout(() => {
      if (text) {
        getData(text);
      }
    }, 1500);

    return () => clearTimeout(delayonChange);
  }, [text]);

  const getData = async (text: string) => {
    const url =
      "https://testv5.parslib.com:7443/develop/faces/rest/searchbiblio/multimediaList?multimediaType=4&fileExtension=pdf&pageSize=10&from=0&searchText=" +
      text;
      const res: any = await axios({
        method: "get",
        url: url,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        timeout: 150000,
      });

    console.log(JSON.stringify(res));
  };

  return (
    <div className="flex items-center bg-green-100  text-gray-400 p-2 my-2 rounded outline-transparent">
      <IoSearch
        className="mr-1 ml-3 text-[2.5vw] md:text-[1.2vw]"
        onClick={() => getData(text)}
      />
      <input
        type="text"
        placeholder="برای جستجو چیزی وارد کنید..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="text-[2vw] md:text-[0.8vw] p-2 w-full md:w-56 bg-white  text-gray-400"
      />
    </div>
  );
};

export default SearchBox;

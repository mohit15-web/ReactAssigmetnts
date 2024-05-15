import { useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  FaHeading,
  FaBold,
  FaItalic,
  FaLink,
  FaCode,
  FaImage,
  FaListUl,
} from "react-icons/fa";

function Head() {
  const [markdown, setMarkdown] = useState("# Markdown Preview");
  const [write, setWrite] = useState(true);
  const handleIconClick = (markdownText) => {
    setMarkdown(prevMarkdown => prevMarkdown + markdownText);
  };

  
const markdownTemp = `
## Mohit

A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`


  return (
    <div>
      <div className="flex justify-start items-center gap-5 bg-white py-6 px-3">
        <button className="border p-2" onClick={() => setWrite(true)}>Write</button>
        <button onClick={() => setWrite(false)}>Preview</button>
        <FaHeading onClick={() => handleIconClick("# ")} title="Heading" />
        <FaBold onClick={() => handleIconClick("**")} title="Bold" />
        <FaItalic onClick={() => handleIconClick("*")} title="Italic" />
        <FaLink onClick={() => handleIconClick("[]()")} title="Link" />
        <FaCode onClick={() => handleIconClick("```")} title="Code Block" />
        <FaImage
          onClick={() => handleIconClick("![Alt text](image-url)")}
          title="Image"
        />
        <FaListUl onClick={() => handleIconClick("* ")} title="Bullet List" />
      </div>
      {write ? (
        <div>
          <textarea
            className="w-full h-[80vh] bg-[#F8F9F8] p-3"
            value={markdown}
            onChange={(e) => {
              setMarkdown(e.target.value)
              console.log(e.target.value);
            }}
          ></textarea>
        </div>
      ) : (
        <div className=" bg-[#F8F9F8] w-full h-[80vh] p-3">
          <ReactMarkdown>{markdownTemp}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default Head;

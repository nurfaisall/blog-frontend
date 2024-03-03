import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PostArticle = () => {
  const [value, setValue] = useState<any>([]);

  const postArticle = () => {};

  useEffect(() => {}, []);

  return (
    <>
      <ReactQuill theme="snow" value={value} onChange={setValue}></ReactQuill>
      <button onClick={() => console.log(value)}>button test</button>
    </>
  );
};

export default PostArticle;

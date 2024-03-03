import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const PostArticle = () => {
  const [value, setValue] = useState<any>([]);
  const [title, setTitle] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  const postArticle = () => {
    setIsLoading(true)
    axios({
      method: "post",
      url: "http://localhost:8080",
      data: {
        title: title,
        articleText: value
      }
    })
    setTimeout(() => {
      console.log(1000);
      
      setIsLoading(false)
    }, 10000);
    console.log(value);
    
  };

  useEffect(() => {}, []);

  return (
    <div className="bg-slate-400">
    {isLoading ? 
    <div className="fixed right-1/2 top-1/2 translate-x-1/2 translate-y-1/2 "><div className="border border-r-teal-400 w-36 h-36">is loading</div></div> : <></>}
    <input type="text" placeholder="this is title" value={title} onChange={e => setTitle(e.target.value)} />
      <ReactQuill theme="snow" value={value} onChange={setValue} className=""></ReactQuill>
      <button onClick={() => {postArticle()}}>button test</button>
    </div>
  );
};

export default PostArticle;

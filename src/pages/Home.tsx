import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const baseurl = "http://localhost:8080";

const Home = () => {
  const [values, setValues] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${baseurl}/getAllArticle`);
      const data = await response.json();
      setValues(data);
      console.log(data);
    };

    fetchData();
  }, []);
  return (
    <ul className="list-none ">
      {values.map((value) => (
        <li className="text-slate-400" key={value.id}>
          <Link
            to={`/article/${value.id}`}
            className="cursor-pointer text-sky-400 hover:text-sky-500 transition-all text-xl underline block"
          >
            {value.title}
          </Link>
          {value.articleText.substring(0, 250)}.....
        </li>
      ))}
    </ul>
  );
};

export default Home;

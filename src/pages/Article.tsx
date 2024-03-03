import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  let { id } = useParams();
  console.log(`id${id}`);

  const baseUrl = `http://localhost:8080/article/${id}`;

  const [value, setValue] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(baseUrl);
      const data = await response.json();
      setValue(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold">{value.title}</h1>
      <div>{value.articleText}</div>
    </div>
  );
};

export default Article;

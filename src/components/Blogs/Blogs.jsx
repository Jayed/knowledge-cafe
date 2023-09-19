import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []); // Make sure to include an empty dependency array to run the effect once on mount

  console.log(blogs);

  return (
    <div>
      <h3>Blogs Data is here</h3>
    </div>
  );
};

export default Blogs;

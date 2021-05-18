import React, { useContext } from "react";
import Form from "./SearchForm";
import { AppContext } from "./context";
import Movies from "./Movies";
import { useEffect } from "react";
const Home = () => {
  const { movies, query, setQuery, fetchData } = useContext(AppContext);

  return (
    <section>
      <div className="container">
        <div className="row bg-danger">
          <Form></Form>
        </div>
        <Movies></Movies>
      </div>
    </section>
  );
};

export default Home;

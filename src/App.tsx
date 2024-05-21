import React, { useState } from "react";
import "./App.css";
import Booklist from "./components/booklist";
import data from "./assests/bookApi";

const App = () => {
  const [bookdata, setBookData] = useState(data);

  console.log(data);
  return (
    <main>
      <section className="container">
        <div className="topic">Bookkeeper </div>
        <h3> {bookdata.length} books in the list</h3>
        <Booklist booksProps={bookdata} />
        <button className="btn btn-block"> Clear All</button>
      </section>
    </main>
  );
};

export default App;
